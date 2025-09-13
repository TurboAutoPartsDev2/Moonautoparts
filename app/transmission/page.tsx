
import type { Metadata } from "next";
import TransmissionsLandingPage from "./v4";
import connectDB from "@/lib/db";
import SideBarFormAPIs from "@/lib/formShortSchema";

export const metadata: Metadata = {
  title:
    "Quality Used Transmissions - Instant Quote | Warranty & Free Shipping",
  description:
    "Premium used transmissions with 3-year warranty. Get instant pricing, free shipping, and expert installation support nationwide.",
  keywords:
    "used transmissions, transmission replacement, automatic transmission, manual transmission, warranty",
};

export default async function UsedTransmissionsPage() {
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
  if(response.success) return <TransmissionsLandingPage data={response.data} />;
}
