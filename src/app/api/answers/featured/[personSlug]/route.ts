import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData } from "~/utils/mappers";
import { IPersonDB, PersonDB } from "~/models/Person";

// GET FEATURED ANSWER
interface ReqParams {
  params: { personSlug: string };
}

export async function GET(req: Request, { params }: ReqParams) {
  const { personSlug } = params;

  try {
    await connectDB();

    const person: DBDoc<IPersonDB> = await PersonDB.findOne({
      slug: personSlug,
      isActive: true,
    }).exec();

    if (!person) {
      return NextResponse.json("🔴 Failed to fetch a person.", {
        status: 400,
      });
    }

    const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
      personId: person._id,
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
