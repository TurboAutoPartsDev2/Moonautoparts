import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
let mongodbConnected: mongoose.Mongoose | null = null; // cache connection instance

if(!process.env.MONGODB_URI) {
  throw new Error("Please add mongodb uri to .env.local");
}
const connectDB = async () => {
    try {
      if(mongodbConnected) {
        return { mongodbConnected }
      }
      mongodbConnected = await mongoose.connect(uri!);
      console.log('Connected to MongoDB');
      return { mongodbConnected }
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  };
export default connectDB;  

