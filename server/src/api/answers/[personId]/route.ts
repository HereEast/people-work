import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { IAnswer, IQuestion } from "~/utils/types";
import { Answer } from "~/models";

interface ReqParams {
  params: { personId: string };
}

// Get person's answers
export async function GET(req: Request, { params }: ReqParams) {
  const { personId } = params;

  try {
    await connectDB();

    const answers: IAnswer[] = await Answer.find({ personId })
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

    console.log("👋", sortedAnswers);

    return NextResponse.json(sortedAnswers);
  } catch (err) {
    console.log("🔴", err);
  }
}
