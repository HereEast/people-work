import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { IPersonDB, PersonDB } from "~/models/Person";
import { mapAnswerBasicData, mapPeopleData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

interface ReqParams {
  params: { slug: string };
}

// GET PERSON BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const slug = params.slug;

  try {
    await connectDB();

    const doc: DBDoc<IPersonDB> = await PersonDB.findOne({ slug }).exec();

    if (!doc) {
      return NextResponse.json(null);
    }

    const featuredAnswerDoc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
      personId: doc._id,
      featured: true,
    }).exec();

    const person = mapPeopleData(doc);
    const featuredAnswer = mapAnswerBasicData(featuredAnswerDoc);

    return NextResponse.json({ person, featuredAnswer });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch a person." },
      { status: 500 },
    );
  }
}
