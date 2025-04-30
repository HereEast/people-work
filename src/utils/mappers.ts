import mongoose from "mongoose";
import { IQuestionDB } from "~/models/Question";

import { QuestionApiSchema, QuestionData } from "~/schemas";

export function mapQuestionData(data: IQuestionDB[]) {
  const mappedData = data.map(({ _id, ...rest }) => ({
    ...rest,
    id: (_id as mongoose.Types.ObjectId).toString(),
  }));

  const questions: QuestionData[] = QuestionApiSchema.array().parse(mappedData);

  return questions;
}
