import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { IPersonDB, PersonDB } from "~/models/Person";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { AnswerApiSchema } from "~/schemas";
import { DBDoc } from "~/utils/types";
import { mapAnswersData } from "~/utils/mappers";

interface ReqParams {
  params: { slug: string };
}

// GET ANSWERS BY QUESTION SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const { slug } = params;

  try {
    await connectDB();

    const question: DBDoc<IQuestionDB> = await QuestionDB.findOne({
      slug: slug,
      isActive: true,
    }).exec();

    if (!question) {
      return NextResponse.json("🔴 Failed to fetch a question by slug.", {
        status: 400,
      });
    }

    // To make populate work
    const p = await PersonDB.find({}).exec();

    const docs: DBDoc<IAnswerDB>[] = await AnswerDB.find({
      questionId: question._id,
    })
      .populate("questionId")
      .populate("personId")
      .exec();

    const answersByActivePeople = docs.filter((answer) => {
      const person = answer.personId as IPersonDB;
      return person.isActive;
    });

    const answers = mapAnswersData(answersByActivePeople);

    return NextResponse.json(answers);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error fetching answers by personId." },
      {
        status: 500,
      },
    );
  }
}
