import { generateSKU } from "@/lib/utils/skuGenerator";
import mongoose from "mongoose";

// Helper function to normalize the option
function normalizeOption(option: string) {
  if (!option) {
    return "";
  }
  return option
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/\//g, "-")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/,/g, "");
}


// seo data
const seoData = new mongoose.Schema({
  seoTitle: { type: String, trim: true },
  seoDescription: { type: String, trim: true },
  seoKeywords: { type: String, trim: true },
  html: { type: String, trim: true }
})

// reply review model
const replyReviewSchema = new mongoose.Schema({
  name: { type: String, trim: true, },
  review: { type: String },
  like: { type: Number, default: 0 },
  disLike: { type: Number, default: 0 },
  likedBy: [String],
  dislikedBy: [String]
}, { timestamps: true })

// main products review schema 
const productReviewSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
  like: { type: Number, default: 0 },
  disLike: { type: Number, default: 0 },
  replies: [replyReviewSchema],
  likedBy: [String],
  dislikedBy: [String]
}, { timestamps: true })

const productSchema = new mongoose.Schema(
  {
    part_name: { type: String, index: true, trim: true },
    make: { type: String, index: true, trim: true },
    model: { type: String, index: true, trim: true },
    year: { type: Number, index: true, trim: true },
    option: String,
    option_slug: { type: String, trim: true, index: true },
    miles: { type: Number, index: true, trim: true },
    part_grade: String,
    stock: { type: String, default: "In Stock" },
    price: { type: Number, index: true, trim: true },
    images: { type: [String], default: [] },
    reviews: [productReviewSchema],
    metaObject: seoData,
    sku: { type: Number, unique: true, required: true, index: true },
    from_cmt: { type: Boolean, default: false },
    from_cmt2: { type: Boolean, default: false },
    authorId: { type: String, default: "6565cc7b7dcde7abcc9b1deb" },
    imageBy: { type: String, default: "admin" },
  },
  { timestamps: true }
);

// Pre-save middleware to auto-generate a unique SKU (if missing) and normalize option_slug.
productSchema.pre("validate", async function (next) {
  try {
    // If no SKU exists (new product or backfill), generate one.
    if (!this.sku) {
      let isUnique = false;
      let newSKU: number = 0;  // default initialization
      let attempts = 0;
      const MAX_ATTEMPTS = 10; // To avoid an infinite loop
      // Cast this.constructor to a Mongoose Model so TypeScript recognizes findOne
      const model = this.constructor as mongoose.Model<unknown>;
      do {
        newSKU = generateSKU();
        const existingProduct = await model.findOne({ sku: newSKU });
        if (!existingProduct) {
          isUnique = true;
        }
        attempts++;
      } while (!isUnique && attempts < MAX_ATTEMPTS);

      if (!isUnique) {
        throw new Error("Failed to generate unique SKU after maximum attempts");
      }
      this.sku = newSKU;
    }
    // Normalize the option_slug from the option field.
    if (this.option) {
      this.option_slug = normalizeOption(this.option);
    } else {
      this.option_slug = "";
    }
    next();
  } catch (error: unknown) {
    next(error as Error);
  }
});

const Products =
  mongoose.models.products || mongoose.model("products", productSchema);

export default Products;
