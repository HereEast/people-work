import { NextResponse } from "next/server";

// import { IFormDataProps } from "~/api-client/answers";

import { connectDB } from "~/_lib";
import { AnswerDB } from "~/models/Answer";
import { PersonDB } from "~/models/Person";

// SUBMIT ANSWERS
const ID = "";

export interface IFormDataProps {
  questionId: string;
  question: string;
  answer: string;
}

export async function POST(req: Request) {
  const data = await req.json();

  const inputData: IFormDataProps[] = Array.from(data.inputData);

  if (!Array.isArray(inputData)) {
    return NextResponse.json(
      "🔴 Error: Invalid data format, expected an array.",
      {
        status: 400,
      },
    );
  }

  try {
    await connectDB();

    const person = await PersonDB.findOne({ _id: ID });

    if (!person) {
      return NextResponse.json("🔴 Error: Failed to fetch a Person.", {
        status: 400,
      });
    }

    for (const input of inputData) {
      const answer = new AnswerDB({
        questionId: input.questionId,
        personId: person._id,
        name: person?.name,
        question: input?.question,
        answer: input.answer,
      });

      await answer.save();
    }

    return NextResponse.json(
      { message: "✅ Success: All answers are submitted." },
      {
        status: 201,
      },
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error: Failed to submit answers." },
      {
        status: 500,
      },
    );
  }
}
