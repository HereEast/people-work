import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { IPersonDB, PersonDB } from "~/models/Person";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData, mapAnswersData } from "~/utils/mappers";

interface ReqParams {
  params: { personSlug: string };
}

// GET ANSWERS BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const { personSlug } = params;

  try {
    await connectDB();

    const person: DBDoc<IPersonDB> = await PersonDB.findOne({
      slug: personSlug,
      isActive: true,
    }).exec();

    if (!person) {
      return NextResponse.json("🔴 Failed to fetch a person by slug.", {
        status: 400,
      });
    }

    const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
      personId: person._id,
      featured: true,
    }).exec();

    // const answer = mapAnswerBasicData(doc);

    return NextResponse.json(doc);
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
