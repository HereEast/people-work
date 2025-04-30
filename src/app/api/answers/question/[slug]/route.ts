import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { IPersonDB, PersonDB } from "~/models/Person";
import { AnswerDB } from "~/models/Answer";
import { AnswerApiSchema } from "~/schemas";

interface ReqParams {
  params: { slug: string };
}

// GET ANSWERS BY QUESTION SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const { slug } = params;

  try {
    await connectDB();

    const question = (await QuestionDB.findOne({
      slug: slug,
      isActive: true,
    })
      .lean()
      .exec()) as IQuestionDB | null;

    if (!question) {
      return NextResponse.json("🔴 Failed to fetch a question by slug.", {
        status: 400,
      });
    }

    // To make populate work
    await PersonDB.find({}).exec();

    const data = await AnswerDB.find({
      questionId: question._id,
    })
      .populate("questionId")
      .populate("personId")
      .lean()
      .exec();

    const activeAnswers = data.filter((answer) => {
      const person = answer.personId as IPersonDB;
      const question = answer.questionId as IQuestionDB;

      return person.isActive && question.isActive;
    });

    const mappedData = activeAnswers.map((data) => {
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
