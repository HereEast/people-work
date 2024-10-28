import { NextResponse } from "next/server";
import { Types } from "mongoose";

import { connectDB } from "~/app/lib/connectDB";
import { Answer, Person, Question } from "~/models";
import { IAnswer, IPerson, IQuestion } from "~/utils/types";

// Submit an answer
export async function POST(req: Request) {
  const { questionId, personId, answer } = await req.json();

  if (!Types.ObjectId.isValid(questionId)) {
    return NextResponse.json("🔴 Invalid questionId.", {
      status: 400,
    });
  }

  if (!Types.ObjectId.isValid(personId)) {
    return NextResponse.json("🔴 Invalid personId.", {
      status: 400,
    });
  }

  try {
    await connectDB();

    const question: IQuestion | null = await Question.findById(questionId);
    const person: IPerson | null = await Person.findById(personId);
    const existingAnswer: IAnswer | null = await Answer.findOne({
      personId,
      questionId,
    });

    if (existingAnswer) {
      existingAnswer.answer = answer;
      await existingAnswer.save();

      console.log("✅ Existing answer is changed.");

      return NextResponse.json(existingAnswer);
    }

    const newAnswer = new Answer({
      questionId,
      personId,
      name: person?.name,
      question: question?.body,
      answer,
    });

    await newAnswer.save();

    console.log("✅ Submitted a new answer.");

    return NextResponse.json(newAnswer);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error submitting an answer." },
      {
        status: 500,
      },
    );
  }
}
