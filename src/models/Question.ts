import { Schema, model } from "mongoose";

import { IQuestion } from "~/utils/types";

const QuestionSchema = new Schema({
  body: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
});

export const Question = model<IQuestion>(
  "Question",
  QuestionSchema,
  "questions",
);
