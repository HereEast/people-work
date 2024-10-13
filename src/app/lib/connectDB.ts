import mongoose, { Connection } from "mongoose";

let connection: Connection | null = null;

export async function connectDB() {
  if (connection) {
    console.log("✅ DB connected.");
    return connection;
  }
  try {
    const cnx = await mongoose.connect(process.env.MONGODB_URI || "");

    connection = cnx.connection;
    console.log("✅ New DB connection.");

    return connection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
