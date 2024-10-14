import { Request, Response } from "express";

import { Question } from "../models/Question.js";
import { Answer } from "../models/Answer.js";
import { Person } from "../models/Person.js";

export async function addAnswer(req: Request, res: Response) {
  const { questionId, personId, answer } = req.body;

  try {
    const question = await Question.findById(questionId);
    const person = await Person.findById(personId);
    const existingAnswer = await Answer.findOne({ personId, questionId });

    if (!person) {
      res.status(404).json({ message: "Person is not found." });
      return;
    }

    if (!question) {
      res.status(404).json({ message: "Question is not found." });
      return;
    }

    if (existingAnswer) {
      existingAnswer.answer = answer;
      existingAnswer.save();

      console.log("✅ Replaced answer body for an existing answer.");

      res.json(existingAnswer);
    }

    const newAnswer = new Answer({
      questionId,
      personId,
      name: person.name,
      question: question.body,
      answer,
    });
    await newAnswer.save();

    console.log("✅ Submitted new answer.");

    res.json(newAnswer);
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);

      res.status(500).json({
        message: "Failed to add an answer to DB.",
      });
    }
  }
}
