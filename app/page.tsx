import type { Metadata } from "next";
import EnginesLandingPage from "./engine/v4";
import connectDB from "@/lib/db";
import SideBarFormAPIs from "@/lib/formShortSchema";

export const metadata: Metadata = {
  title: "Moon Auto Parts - Premium Used Engines & Transmissions | Best Prices & Warranty",
  description:
    "High-quality used engines and transmissions with industry-leading warranty. Get instant quote, free shipping, and expert support. Save up to 70% on your replacement.",
  keywords:
    "used engines, car engines, transmissions, auto parts, engine replacement, transmission replacement, warranty, instant quote",
};

export default async function Home() {
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

  if (response.success) {
    return (
      <main>
        <EnginesLandingPage data={response.data} />
      </main>
    );
  }

  return <div>Error loading data</div>;
}
