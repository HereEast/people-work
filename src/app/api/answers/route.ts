import { NextResponse } from "next/server";

import { IFormDataProps } from "~/api-client/answers";

import { connectDB } from "~/lib/connectDB";
import { AnswerDB } from "~/models/Answer";
import { PersonDB } from "~/models/Person";

// SUBMIT ANSWERS
const ID = "";

export async function POST(req: Request) {
  const data = await req.json();

  const inputData: IFormDataProps[] = Array.from(data.inputData);

  if (!Array.isArray(inputData)) {
    return NextResponse.json(
      "🔴 Error: Invalid data format, expected an array.",
      {
        status: 400,
      },
    );
  }

  try {
    await connectDB();

    const person = await PersonDB.findOne({ _id: ID });

    if (!person) {
      return NextResponse.json("🔴 Error: Failed to fetch a Person.", {
        status: 400,
      });
    }

    for (const input of inputData) {
      const answer = new AnswerDB({
        questionId: input.questionId,
        personId: person._id,
        name: person?.name,
        question: input?.question,
        answer: input.answer,
      });

      await answer.save();
    }

    return NextResponse.json(
      { message: "✅ Success: All answers are submitted." },
      {
        status: 201,
      },
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error: Failed to submit answers." },
      {
        status: 500,
      },
    );
  }
}

// GET ANSWERS BY SLUG ARRAY
// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);

//   const slugs = searchParams.getAll("slugs").toString().split(",");

//   try {
//     await connectDB();

//     const results: IResult[] = [];

//     for (const slug of slugs) {
//       const person: IPerson | null = await Person.findOne({ slug });

//       if (!person) {
//         return NextResponse.json("🔴 Failed to fetch a person by slug.", {
//           status: 400,
//         });
//       }

//       const answers: IAnswer[] = await Answer.find({ personId: person._id })
//         .populate({
//           path: "questionId",
//           model: Question,
//         })
//         .exec();

//       const activeAnswers = answers.filter((answer) => {
//         const question = answer.questionId as IQuestion;
//         return question.active === true;
//       });

//       const sortedAnswers = activeAnswers.sort((a, b) => {
//         const questionA = a.questionId as IQuestion;
//         const questionB = b.questionId as IQuestion;
//         return questionA.order - questionB.order;
//       });

//       results.push({
//         person,
//         answers: sortedAnswers,
//       });
//     }

//     return NextResponse.json(results, { status: 200 });
//   } catch (err) {
//     console.log(err);

//     return NextResponse.json(
//       { message: "🔴 Error fetching answers by personId." },
//       {
//         status: 500,
//       },
//     );
//   }
// }
