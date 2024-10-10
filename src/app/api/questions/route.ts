import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { Question } from "~/models/Question";

export async function GET() {
  const res = await Question.find().exec();

  try {
    await connectDB();

    const questions = await Question.find().exec();

    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json(res);
}
