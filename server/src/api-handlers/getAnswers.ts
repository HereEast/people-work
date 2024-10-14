import { Request, Response } from "express";

import { Answer } from "../models/Answer.js";
import { IQuestion } from "../models/Question.js";

// Get answers by PersonID
export async function getAnswersByPersonID(req: Request, res: Response) {
  const { personId } = req.params;

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
        message: "Failed to get person's answers.",
      });
    }
  }
}
