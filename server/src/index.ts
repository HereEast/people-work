import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI || "";

import { questionRouter } from "./api/questions.js";

const app = express();

app.use(cors());
app.use(express.json());

// API Endpoints
app.use("/api/questions", questionRouter);

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);

    app.listen(PORT, () => {
      console.log(`🚀 Server is listening on port ${PORT}.`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
