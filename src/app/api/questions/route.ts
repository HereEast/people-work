import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { IQuestion, Question } from "~/models/Question";

// GET ALL QUESTIONS
export async function GET() {
  try {
    await connectDB();

    const questions: IQuestion[] = await Question.find({ isActive: true })
      .sort({ order: 1 })
      .exec();

    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all questions." },
      { status: 500 },
    );
  }
}
