import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { DBDoc } from "~/utils/types";
import { mapAnswerBasicData, mapAnswersData } from "~/utils/mappers";
import { IPersonDB, PersonDB } from "~/models/Person";

interface ReqParams {
  params: { personId: string };
}

// GET ANSWER BY PERSON ID
export async function GET(req: Request, { params }: ReqParams) {
  const { personId } = params;

  try {
    await connectDB();

    const person: DBDoc<IPersonDB> = await PersonDB.findOne({
      slug: personId,
      isActive: true,
    }).exec();

    const data: DBDoc<IAnswerDB>[] = await AnswerDB.find({
      personId: person._id,
      featured: true,
    })
      .populate("questionId")
      .populate("personId")
      .exec();

    // const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne({
    //   personId,
    //   featured: true,
    // }).exec();

    // if (!doc) {
    //   return NextResponse.json(
    //     { message: `🔴 Featured answer is not found for ID: ${personId}.` },
    //     {
    //       status: 404,
    //     },
    //   );
    // }

    const answers = mapAnswersData(data);

    return NextResponse.json(answers);

    // const answer = mapAnswerBasicData(doc);

    // return NextResponse.json(answer);
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
