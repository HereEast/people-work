import { Request, Response } from "express";

import { Question } from "../models/Question.js";

export async function getQuestions(req: Request, res: Response) {
  try {
    const questions = await Question.find().sort({ order: 1 }).exec();

    res.json(questions);
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);

      res.status(500).json({
        message: "Failed to fetch questions.",
      });
    }
  }
}
