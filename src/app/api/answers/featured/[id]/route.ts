import { NextResponse, NextRequest } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData } from "~/utils/mappers";

interface ReqParams {
  params: Promise<{ id: string }>;
}

// GET ANSWERS BY SLUG
export async function GET(req: NextRequest, props: ReqParams) {
  const params = await props.params;
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
