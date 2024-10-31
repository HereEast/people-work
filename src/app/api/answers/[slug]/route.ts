import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { IAnswer, IPerson, IQuestion } from "~/utils/types";
import { Answer, Person } from "~/models";

interface ReqParams {
  params: { slug: string };
}

// Get answers by PersonId
export async function GET(req: Request, { params }: ReqParams) {
  const { slug } = params;

  try {
    await connectDB();

    const person: IPerson | null = await Person.findOne({ slug });

    if (!person) {
      return NextResponse.json("🔴 Failed to fetch a person by slug.", {
        status: 400,
      });
    }

    const answers: IAnswer[] = await Answer.find({ personId: person._id })
      .populate("questionId")
      .exec();

    const activeAnswers = answers.filter((answer) => {
      const question = answer.questionId as IQuestion;
      return question.isActive === true;
    });

    const sortedAnswers = activeAnswers.sort((a, b) => {
      const questionA = a.questionId as IQuestion;
      const questionB = b.questionId as IQuestion;
      return questionA.order - questionB.order;
    });

    return NextResponse.json(sortedAnswers, { status: 200 });
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
