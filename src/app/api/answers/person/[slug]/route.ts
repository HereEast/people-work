import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { IPersonDB, PersonDB } from "~/models/Person";
import { DBDoc } from "~/utils/types";
import { mapAnswersData } from "~/utils/mappers";

interface ReqParams {
  params: Promise<{ slug: string }>;
}

// GET ANSWERS BY SLUG
export async function GET(req: Request, props: ReqParams) {
  const { slug } = await props.params;

  const { searchParams } = new URL(req.url);
  const isFeaturedQuery = searchParams.get("featured");

  try {
    await connectDB();

    const person: DBDoc<IPersonDB> = await PersonDB.findOne({
      slug,
      isActive: true,
    }).exec();

    if (!person) {
      return NextResponse.json("🔴 Failed to fetch a person by slug.", {
        status: 400,
      });
    }

    await QuestionDB.find({}).exec(); // To make populate work

    // Featured
    if (isFeaturedQuery) {
      const data: DBDoc<IAnswerDB>[] = await AnswerDB.find({
        personId: person._id,
        featured: true,
      })
        .populate("questionId")
        .populate("personId")
        .exec();

      const answers = mapAnswersData(data);

      return NextResponse.json(answers);
    }

    // All answers
    const data: DBDoc<IAnswerDB>[] = await AnswerDB.find({
      personId: person._id,
    })
      .populate("questionId")
      .populate("personId")
      .exec();

    const answersToActiveQuestions = data.filter((answer) => {
      const question = answer.questionId as IQuestionDB;
      return question.isActive === true;
    });

    const orderedAnswers = answersToActiveQuestions.sort((a, b) => {
      const questionA = a.questionId as IQuestionDB;
      const questionB = b.questionId as IQuestionDB;
      return questionA.order - questionB.order;
    });

    const answers = mapAnswersData(orderedAnswers);

    return NextResponse.json(answers);
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
