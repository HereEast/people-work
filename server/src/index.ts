import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI || "";

// import { tasksRouter } from "./api/tasks.js";
// import { usersRouter } from "./api/users.js";
// import { entriesRouter } from "./api/entries.js";

const app = express();

app.use(cors());
app.use(express.json());

// API Endpoints
// app.use("/api/tasks", tasksRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/entries", entriesRouter);

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
