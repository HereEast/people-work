import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { mapQuestionsData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

interface ReqParams {
  params: { slug: string };
}

// GET QUESTION BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const slug = params.slug;

  try {
    await connectDB();

    const doc: DBDoc<IQuestionDB> = await QuestionDB.findOne({
      slug,
      isActive: true,
    }).exec();

    if (!doc) {
      return NextResponse.json(null);
    }

    const question = mapQuestionsData(doc);

    return NextResponse.json(question);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch a question." },
      { status: 500 },
    );
  }
}
