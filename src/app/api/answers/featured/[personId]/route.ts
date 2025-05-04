import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { IPersonDB, PersonDB } from "~/models/Person";
import { DBDoc } from "~/utils/types";
import { mapAnswersData } from "~/utils/mappers";

interface ReqParams {
  params: { personId: string };
}

// GET ANSWERS BY PERSON ID
export async function GET(req: Request, { params }: ReqParams) {
  const { personId } = params;

  try {
    await connectDB();

    const docs: DBDoc<IAnswerDB>[] = await AnswerDB.find({
      personId,
      featured: true,
    })
      .populate("questionId")
      .populate("personId")
      .exec();

    // if (!doc) {
    //   return NextResponse.json(
    //     { message: `🔴 Featured answer is not found for ID: ${personId}.` },
    //     {
    //       status: 404,
    //     },
    //   );
    // }

    const answers = mapAnswersData(docs);
    // const featuredAnswer = answers.find((item) => item.featured);

    return NextResponse.json(answers[0]);
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
