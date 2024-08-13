import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};
