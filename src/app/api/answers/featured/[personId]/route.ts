import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData } from "~/utils/mappers";

// GET FEATURED ANSWER
interface ReqParams {
  params: { personId: string };
}

export async function GET(req: Request, { params }: ReqParams) {
  const { personId } = params;

  try {
    await connectDB();

    const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
      personId,
      featured: true,
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
