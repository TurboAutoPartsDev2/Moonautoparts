
import type { Metadata } from "next";
import EnginesLandingPage from "./v4";
import connectDB from "@/lib/db";
import SideBarFormAPIs from "@/lib/formShortSchema";

export const metadata: Metadata = {
  title: "Premium Used Engines - Get Instant Quote | Best Prices & Warranty",
  description:
    "High-quality used engines with warranty. Get instant quote, free shipping, and expert support. Save thousands on engine replacement.",
  keywords:
    "used engines, car engines, engine replacement, warranty, instant quote",
};

export default async function UsedEnginesPage() {
  async function getFormData() {
    "use server";
    await connectDB();
    try {
      const formData = await SideBarFormAPIs.find().select("-__v").lean();
      return { data: JSON.parse(JSON.stringify(formData)), success: true };
    } catch (error) {
      console.log("Internal server error: ", error);
      return { data: [], success: false };
    }
  }
  const response = await getFormData();
  if (response.success) return <EnginesLandingPage data={response.data} />;
}