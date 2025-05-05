import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData } from "~/utils/mappers";

interface ReqParams {
  params: { id: string };
}

// GET ANSWERS BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const { id } = params;

  try {
    await connectDB();

    const doc: DBDoc<IAnswerDB> | null = await AnswerDB.findOne({
      personId: id,
      featured: true,
    }).exec();

    if (!doc) {
      return NextResponse.json(
        {
          message: `🔴 Featured answer for Person ID ${id} is not found.`,
        },
        {
          status: 404,
        },
      );
    }

    // const answer = mapAnswerBasicData(doc);
    const answer = {
      id: "12345",
      name: "John Snow",
      question: "How are you?",
      answer: "Good",
      featured: true,
    };

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
