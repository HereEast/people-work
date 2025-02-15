import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { IQuestion, Question } from "~/models/Question";
import { IPerson, Person } from "~/models/Person";
import { Answer, IAnswer } from "~/models/Answer";

interface ReqParams {
  params: { questionSlug: string };
}

// GET ANSWERS BY QUESTION SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const { questionSlug } = params;

  try {
    await connectDB();

    const question: IQuestion | null = await Question.findOne({
      slug: questionSlug,
    });

    if (!question) {
      return NextResponse.json("🔴 Failed to fetch a question by slug.", {
        status: 400,
      });
    }

    // Remove later (make sure Questions are available before populate)
    const people: IPerson[] = await Person.find({}).exec();

    const answers: IAnswer[] = await Answer.find({
      questionId: question._id,
    })
      .populate("personId")
      .exec();

    const activeAnswers = answers.filter((answer) => {
      const person = answer.personId as IPerson;
      return person.isActive === true;
    });

    return NextResponse.json(activeAnswers, { status: 200 });
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
