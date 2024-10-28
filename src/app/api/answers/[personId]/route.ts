import { NextResponse } from "next/server";
import { Types } from "mongoose";

import { connectDB } from "~/app/lib/connectDB";
import { IAnswer, IQuestion } from "~/utils/types";
import { Answer } from "~/models";

interface ReqParams {
  params: { personId: string };
}

// Get answers by PersonId
export async function GET(req: Request, { params }: ReqParams) {
  const { personId } = params;

  if (!Types.ObjectId.isValid(personId)) {
    return NextResponse.json("🔴 Invalid personId.", {
      status: 400,
    });
  }

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
