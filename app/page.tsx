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
    const dbConnection = await connectDB();
    
    // If no MongoDB connection, return mock data
    if (!dbConnection.mongodbConnected) {
      console.log("Using mock data - MongoDB not connected");
      return { 
        data: [
          {
            _id: "mock1",
            make: "Toyota",
            models: [
              {
                _id: "model1",
                model: "Camry",
                years: [
                  {
                    _id: "year1",
                    year: 2020,
                    Options: [
                      { _id: "opt1", option: "2.5L 4-Cylinder" },
                      { _id: "opt2", option: "3.5L V6" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "mock2",
            make: "Honda",
            models: [
              {
                _id: "model2",
                model: "Accord",
                years: [
                  {
                    _id: "year2",
                    year: 2019,
                    Options: [
                      { _id: "opt3", option: "1.5L Turbo" },
                      { _id: "opt4", option: "2.0L Turbo" }
                    ]
                  }
                ]
              }
            ]
          }
        ], 
        success: true 
      };
    }
    
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
