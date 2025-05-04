import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData } from "~/utils/mappers";

interface ReqParams {
  params: { personId: string };
}

// GET ANSWER BY PERSON ID
export async function GET(req: Request, { params }: ReqParams) {
  const { personId } = params;

  try {
    await connectDB();

    const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
      personId: new mongoose.Types.ObjectId(personId),
      // featured: true,
    }).exec();

    if (!doc) {
      return NextResponse.json(
        { message: `🔴 Featured answer is not found for ID: ${personId}.` },
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
      { message: "🔴 Error fetching answers by person ID." },
      {
        status: 500,
      },
    );
  }
}
