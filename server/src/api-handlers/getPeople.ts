import { Request, Response } from "express";

import { Person } from "../models/Person.js";
import { Answer } from "../models/Answer.js";
import { IQuestion } from "../models/Question.js";

// Get person by slug
export async function getPerson(req: Request, res: Response) {
  const { slug } = req.params;

  try {
    const person = await Person.findOne({ slug }).exec();

    res.json(person);
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);

      res.status(500).json({
        message: `Failed to fetch a person by slug ${slug}.`,
      });
    }
  }
}

// Get all people
export async function getPeople(req: Request, res: Response) {
  try {
    const questions = await Person.find().exec();

    res.json(questions);
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);

      res.status(500).json({
        message: "Failed to fetch people.",
      });
    }
  }
}
