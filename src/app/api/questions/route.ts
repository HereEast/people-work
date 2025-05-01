import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { mapQuestionsData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

// GET ALL QUESTIONS
export async function GET() {
  try {
    await connectDB();

    const docs: DBDoc<IQuestionDB>[] = await QuestionDB.find({
      isActive: true,
    })
      .sort({ order: 1 })
      .exec();

    const questions = mapQuestionsData(docs);

    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all questions." },
      { status: 500 },
    );
  }
}
