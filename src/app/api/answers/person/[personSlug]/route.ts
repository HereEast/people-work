import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { IQuestion, Question } from "~/models/Question";
import { Answer, IAnswer } from "~/models/Answer";
import { IPerson, Person } from "~/models/Person";

interface ReqParams {
  params: { personSlug: string };
}

// GET ANSWERS BY PERSON SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const { personSlug } = params;

  try {
    await connectDB();

    const person: IPerson | null = await Person.findOne({ slug: personSlug });

    if (!person) {
      return NextResponse.json("🔴 Failed to fetch a person by slug.", {
        status: 400,
      });
    }

    // Remove later (make sure Questions are available before populate)
    const questions: IQuestion[] = await Question.find({}).exec();

    const answers: IAnswer[] = await Answer.find({ personId: person._id })
      .populate("questionId")
      .exec();

    const activeAnswers = answers.filter((answer) => {
      const question = answer.questionId as IQuestion;
      return question.isActive === true;
    });

    const result = activeAnswers.sort((a, b) => {
      const questionA = a.questionId as IQuestion;
      const questionB = b.questionId as IQuestion;
      return questionA.order - questionB.order;
    });

    return NextResponse.json(result, { status: 200 });
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
