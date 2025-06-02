import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IQuestionDB, QuestionDB } from "~/models/Question";
import { IPersonDB, PersonDB } from "~/models/Person";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { mapAnswersData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

interface ReqParams {
  params: Promise<{ slug: string }>;
}

// GET ANSWERS BY QUESTION
export async function GET(req: Request, props: ReqParams) {
  const { slug } = await props.params;

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

    await PersonDB.find({}).exec(); // To make populate work

    const docs: DBDoc<IAnswerDB>[] = await AnswerDB.find({
      questionId: question._id,
      $or: [{ disabled: false }, { disabled: { $exists: false } }],
    })
      .populate("questionId")
      .populate("personId")
      .exec();

    const answersByActivePeople = docs.filter((answer) => {
      const person = answer.personId as IPersonDB;
      return person.isActive;
    });

    // const sortedByDate = answersByActivePeople.sort((a, b) => {
    //   const personA = a.personId as IPersonDB;
    //   const personB = b.personId as IPersonDB;

    //   return (
    //     new Date(personA.createdAt).getTime() -
    //     new Date(personB.createdAt).getTime()
    //   );
    // });

    const answers = mapAnswersData(answersByActivePeople);

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
