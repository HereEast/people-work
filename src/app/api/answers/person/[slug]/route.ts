import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB } from "~/models/Answer";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { IPersonDB, PersonDB } from "~/models/Person";
import { AnswerApiSchema } from "~/schemas";

interface ReqParams {
  params: { slug: string };
}

// GET ANSWERS BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const { slug } = params;

  try {
    await connectDB();

    const person = (await PersonDB.findOne({ slug, isActive: true })
      .lean()
      .exec()) as IPersonDB | null;

    if (!person) {
      return NextResponse.json("🔴 Failed to fetch a person by slug.", {
        status: 400,
      });
    }

    // To make populate work
    const questions = await QuestionDB.find({}).exec();

    const data = await AnswerDB.find({ personId: person._id })
      .populate("questionId")
      .populate("personId")
      .lean()
      .exec();

    const activeAnswers = data.filter((answer) => {
      const question = answer.questionId;
      return question.isActive === true;
    });

    const orderedAnswers = activeAnswers.sort((a, b) => {
      const questionA = a.questionId;
      const questionB = b.questionId;
      return questionA.order - questionB.order;
    });

    const mappedData = orderedAnswers.map((data) => {
      const question = data.questionId as IQuestionDB;
      const person = data.personId as IPersonDB;

      return {
        id: String(data._id),
        answer: data.answer,
        question: {
          ...question,
          id: String(question._id),
        },
        person: {
          ...person,
          id: String(person._id),
        },
      };
    });

    const answers = AnswerApiSchema.array().parse(mappedData);

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
