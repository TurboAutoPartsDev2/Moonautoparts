import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
let mongodbConnected: mongoose.Mongoose | null = null; // cache connection instance

const connectDB = async () => {
    try {
      if (!process.env.MONGODB_URI) {
        console.warn('MONGODB_URI not found in environment variables. Using mock data.');
        return { mongodbConnected: null };
      }
      
      if(mongodbConnected) {
        return { mongodbConnected }
      }
      mongodbConnected = await mongoose.connect(uri!);
      console.log('Connected to MongoDB');
      return { mongodbConnected }
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      return { mongodbConnected: null };
    }
  };
export default connectDB;  

