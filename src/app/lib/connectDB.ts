import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

let cachedConnection: Connection | null = null;

export async function connectDB() {
  if (cachedConnection) {
    console.log("✅ DB connected.");
    return cachedConnection;
  }
  try {
    const cnx = await mongoose.connect(MONGODB_URI);

    cachedConnection = cnx.connection;
    console.log("✅ New DB connection.");

    return cachedConnection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
