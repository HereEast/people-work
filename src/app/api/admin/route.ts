import { NextResponse } from "next/server";

import { connectDB } from "~/_lib";
import { AnswerDB } from "~/models/Answer";
import { PersonDB } from "~/models/Person";

export interface IFormDataProps {
  questionId: string;
  answer: string;
  personSlug: string;
}

export async function POST(req: Request) {
  const data = await req.json();

  const { questionId, answer, personSlug }: IFormDataProps = data;

  if (!questionId || !answer) {
    return NextResponse.json("🔴 Error: Question ID or answer is missing.", {
      status: 400,
    });
  }

  try {
    await connectDB();

    const person = await PersonDB.findOne({ slug: personSlug });

    if (!person) {
      return NextResponse.json("🔴 Error: Failed to fetch a Person.", {
        status: 400,
      });
    }

    let answerDoc = await AnswerDB.findOne({
      personId: person._id,
      questionId,
    });

    if (answerDoc) {
      answerDoc.answer = answer;

      await answerDoc.save();
    } else {
      answerDoc = new AnswerDB({
        questionId,
        personId: person._id,
        name: person?.name,
        answer,
      });

      await answerDoc.save();
    }

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
