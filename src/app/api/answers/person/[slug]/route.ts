import { NextResponse } from "next/server";
import { FilterQuery } from "mongoose";

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

    const query: FilterQuery<IAnswerDB> = {
      personId: person.id,
      $or: [{ disabled: false }, { disabled: { $exists: false } }],
    };

    if (isFeaturedQuery) {
      query.featured = true;
    }

    const data: DBDoc<IAnswerDB>[] = await AnswerDB.find(query)
      .populate("questionId")
      .populate("personId")
      .exec();

    // Featured answer
    if (isFeaturedQuery) {
      return NextResponse.json(mapAnswersData(data));
    }

    // All answers
    const answersToActiveQuestions = data.filter((answer) => {
      const question = answer.questionId as IQuestionDB;
      return question.isActive === true;
    });

    const sortedAnswers = answersToActiveQuestions.sort((a, b) => {
      const questionA = a.questionId as IQuestionDB;
      const questionB = b.questionId as IQuestionDB;
      return questionA.order - questionB.order;
    });

    const answers = mapAnswersData(sortedAnswers);

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
