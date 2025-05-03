import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData } from "~/utils/mappers";

// GET ANSWER BY QUESTION ID and PERSON SLUG
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const questionId = searchParams.get("questionId");
  const personId = searchParams.get("personId");

  try {
    await connectDB();

    const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
      questionId,
      personId,
    }).exec();

    if (!doc) {
      return NextResponse.json("🔴 Failed to fetch a featured answer.", {
        status: 400,
      });
    }

    const answer = mapAnswerBasicData(doc);

    return NextResponse.json(answer);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error fetching a featured answer." },
      {
        status: 500,
      },
    );
  }
}
