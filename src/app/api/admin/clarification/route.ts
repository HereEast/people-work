import { NextResponse } from "next/server";

import { connectDB } from "~/_lib";
import { AnswerDB } from "~/models/Answer";
import { PersonDB } from "~/models/Person";

export interface IFormDataProps {
  answerId: string;
  clarificationQuestion: string;
  clarificationAnswer: string;
  personSlug: string;
}

export async function POST(req: Request) {
  const data = await req.json();

  const {
    answerId,
    clarificationQuestion,
    clarificationAnswer,
    personSlug,
  }: IFormDataProps = data;

  if (!answerId || !clarificationQuestion || !clarificationAnswer) {
    return NextResponse.json(
      "🔴 Error: Answer ID, question, or answer is missing.",
      {
        status: 400,
      },
    );
  }

  try {
    await connectDB();

    const person = await PersonDB.findOne({ slug: personSlug });

    if (!person) {
      return NextResponse.json("🔴 Error: Failed to fetch a Person.", {
        status: 400,
      });
    }

    const answerDoc = await AnswerDB.findOne({
      personId: person._id,
      _id: answerId,
    });

    if (!answerDoc) {
      return NextResponse.json("🔴 Error: Failed to fetch an answer.", {
        status: 400,
      });
    }

    const existingClarification = answerDoc.clarifications.find(
      (clarification: { question: string }) =>
        clarification.question === clarificationQuestion,
    );

    if (existingClarification) {
      existingClarification.answer = clarificationAnswer;
    } else {
      answerDoc.clarifications.push({
        question: clarificationQuestion,
        answer: clarificationAnswer,
      });
    }

    await answerDoc.save();

    return NextResponse.json(answerDoc);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error: Failed to submit an answer." },
      {
        status: 500,
      },
    );
  }
}
