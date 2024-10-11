import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { Question } from "~/models/Question";

export async function GET() {
  try {
    await connectDB();

    const questions = await Question.find().exec();

    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
