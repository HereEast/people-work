import { Request, Response } from "express";

import { Person } from "../models/Person.js";
import { Answer } from "../models/Answer.js";
import { IQuestion } from "../models/Question.js";

// Get person by ID
export async function getPerson(req: Request, res: Response) {
  const { personId } = params;

  try {
    const answers = await Answer.find({ personId })
      .populate("questionId")
      .exec();

    const activeAnswers = answers.filter((answer) => {
      const question = answer.questionId as IQuestion;
      return question.isActive === true;
    });

    const sortedAnswers = activeAnswers.sort((a, b) => {
      const questionA = a.questionId as IQuestion;
      const questionB = b.questionId as IQuestion;
      return questionA.order - questionB.order;
    });

    console.log("👋", sortedAnswers);

    res.json(sortedAnswers);
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);

      res.status(500).json({
        message: "Failed to fetch a person by ID.",
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
