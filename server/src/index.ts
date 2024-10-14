import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI || "";

import { questionRouter } from "./api/questions.js";
import { peopleRouter } from "./api/people.js";
import { answerRouter } from "./api/answers.js";
import { userRouter } from "./api/users.js";

const app = express();

app.use(cors());
app.use(express.json());

// API Endpoints
app.use("/api/answers", answerRouter);
app.use("/api/questions", questionRouter);
app.use("/api/people", peopleRouter);
app.use("/api/users", userRouter);

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
