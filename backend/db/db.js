import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const instance = await mongoose.connect(process.env.DB_URI, {
      dbName: "Leaderboard",
    });
    console.log(`MongoDB Connected ${instance.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
