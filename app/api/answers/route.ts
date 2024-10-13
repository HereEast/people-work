import { NextResponse } from "next/server";

import { connectDB } from "../../lib/connectDB";
import { Answer, Person, Question } from "../../../models";

// Create
export async function POST(req: Request) {
  const { questionId, personId, answer } = await req.json();

  try {
    await connectDB();

    const question = await Question.findById(questionId);
    const person = await Person.findById(personId);
    const existingAnswer = await Answer.findOne({ personId, questionId });

    if (existingAnswer) {
      existingAnswer.answer = answer;
      existingAnswer.save();

      console.log("✅ Replaced answer body for an existing answer.");

      return NextResponse.json(existingAnswer);
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

    return NextResponse.json(newAnswer);
  } catch (err) {
    console.log(err);
  }
}
