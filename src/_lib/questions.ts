import { connectDB } from "./connectDB";
import { QuestionData } from "~/schemas";
import { IQuestionDB, QuestionDB } from "~/models/Question";

import { mapQuestionsData, mapQuestionData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

// Question by slug
export async function getQuestion(slug: string): Promise<QuestionData | null> {
  try {
    await connectDB();

    const doc: DBDoc<IQuestionDB> = await QuestionDB.findOne({
      slug,
      isActive: true,
    }).exec();

    if (!doc) return null;

    return mapQuestionData(doc);
  } catch (err) {
    console.error("🔴 Failed to fetch a person by slug:", err);
    return null;
  }
}

// Questions
export async function getQuestions(): Promise<QuestionData[] | null> {
  try {
    await connectDB();

    const docs: DBDoc<IQuestionDB>[] = await QuestionDB.find({
      isActive: true,
    })
      .sort({ order: 1 })
      .exec();

    if (!docs.length) return null;

    return mapQuestionsData(docs);
  } catch (err) {
    console.error("🔴 Failed to fetch all people:", err);
    return null;
  }
}
