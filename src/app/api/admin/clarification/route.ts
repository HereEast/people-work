import { NextResponse } from "next/server";

import { connectDB } from "~/_lib";
import { AnswerDB } from "~/models/Answer";
import { PersonDB } from "~/models/Person";

// Submit
export interface IFormDataProps {
  answerId: string;
  question: string;
  answer: string;
  personSlug: string;
  prevQuestion?: string;
}

export async function POST(req: Request) {
  const data = await req.json();

  const {
    answerId,
    question,
    answer,
    personSlug,
    prevQuestion,
  }: IFormDataProps = data;

  if (!answerId || !question || !answer) {
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
        clarification.question === prevQuestion,
    );

    if (existingClarification) {
      existingClarification.question = question;
      existingClarification.answer = answer;
    } else {
      answerDoc.clarifications.push({
        question,
        answer,
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

// Delete
export async function DELETE(req: Request) {
  const data = await req.json();

  const { answerId, question, personSlug } = data;

  if (!answerId || !question || !personSlug) {
    return NextResponse.json(
      "🔴 Error: Answer ID, question, or personSlug is missing.",
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

    const updatedClarification = answerDoc.clarifications.filter(
      (clarification: { question: string }) =>
        clarification.question !== question,
    );

    answerDoc.clarifications = updatedClarification;
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
