import { NextResponse } from "next/server";

import { Answer, Person, Question } from "~/models";
import { IAnswer, IAnswerSubmitData, IPerson, IQuestion } from "~/utils/types";
import { connectDB } from "~/app/lib/connectDB";

const slug = "alexander-starodetko"; // Sasha

// Submit answers
export async function POST(req: Request) {
  const data = await req.json();

  const inputData: IAnswerSubmitData[] = Array.from(data.inputData);

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

    const person: IPerson | null = await Person.findOne({ slug });

    if (!person) {
      return NextResponse.json("🔴 Error: Failed to fetch a Person.", {
        status: 400,
      });
    }

    for (const input of inputData) {
      const existingAnswer: IAnswer | null = await Answer.findOne({
        personId: person._id,
        questionId: input.questionId,
      });

      if (existingAnswer) {
        existingAnswer.answer = input.answer;

        await existingAnswer.save();
      } else {
        const question: IQuestion | null = await Question.findById(
          input.questionId,
        );

        if (!question) {
          return NextResponse.json("🔴 Error: Failed to fetch a Question.", {
            status: 400,
          });
        }

        const newAnswer = new Answer({
          questionId: input.questionId,
          personId: person._id,
          name: person?.name,
          question: question?.body,
          answer: input.answer,
        });

        await newAnswer.save();
      }
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

// // Submit an answer
// export async function POST(req: Request) {
//   const { questionId, personId, answer } = await req.json();

//   if (!Types.ObjectId.isValid(questionId)) {
//     return NextResponse.json("🔴 Invalid questionId.", {
//       status: 400,
//     });
//   }

//   if (!Types.ObjectId.isValid(personId)) {
//     return NextResponse.json("🔴 Invalid personId.", {
//       status: 400,
//     });
//   }

//   try {
//     await connectDB();

//     const question: IQuestion | null = await Question.findById(questionId);
//     const person: IPerson | null = await Person.findById(personId);
//     const existingAnswer: IAnswer | null = await Answer.findOne({
//       personId,
//       questionId,
//     });

//     if (existingAnswer) {
//       existingAnswer.answer = answer;
//       await existingAnswer.save();

//       console.log("✅ Existing answer is changed.");

//       return NextResponse.json(existingAnswer);
//     }

//     const newAnswer = new Answer({
//       questionId,
//       personId,
//       name: person?.name,
//       question: question?.body,
//       answer,
//     });

//     await newAnswer.save();

//     console.log("✅ Submitted a new answer.");

//     return NextResponse.json(newAnswer);
//   } catch (err) {
//     console.log(err);

//     return NextResponse.json(
//       { message: "🔴 Error submitting an answer." },
//       {
//         status: 500,
//       },
//     );
//   }
// }
