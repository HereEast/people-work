import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { mapAnswerBasicData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

interface ReqParams {
  params: { personId: string };
}

// GET FEATURED ANSWER
export async function GET(req: Request, { params }: ReqParams) {
  const { personId } = params;

  try {
    await connectDB();

    // const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
    //   personId: new mongoose.Types.ObjectId(personId),
    //   featured: true,
    // }).exec();

    // const answer = mapAnswerBasicData(doc);

    return NextResponse.json("Hello");
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error fetching answers by person slug." },
      {
        status: 500,
      },
    );
  }
}
