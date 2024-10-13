import { NextResponse } from "next/server";

import { connectDB } from "../../lib/connectDB";
import { Person } from "../../../models/Person";

export async function GET() {
  try {
    await connectDB();

    const questions = await Person.find().exec();

    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
