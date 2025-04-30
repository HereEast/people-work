import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { QuestionDB } from "~/models/Question";
import { QuestionApiSchema } from "~/schemas";

// GET ALL QUESTIONS
export async function GET() {
  try {
    await connectDB();

    const data = await QuestionDB.find({
      isActive: true,
    })
      .sort({ order: 1 })
      .lean()
      .exec();

    const mappedData = data.map(({ _id, ...rest }) => ({
      ...rest,
      id: String(_id),
    }));

    const questions = QuestionApiSchema.array().parse(mappedData);

    return NextResponse.json(questions);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all questions." },
      { status: 500 },
    );
  }
}

// export async function GET() {
//   try {
//     await connectDB();

//     const questions: IQuestion[] = await Question.find({
//       isActive: true,
//     })
//       .sort({ order: 1 })
//       .lean()
//       .exec();

//     return NextResponse.json(questions);
//   } catch (err) {
//     console.log(err);

//     return NextResponse.json(
//       { message: "🔴 Failed to fetch all questions." },
//       { status: 500 },
//     );
//   }
// }
