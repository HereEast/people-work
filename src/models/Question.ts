import mongoose, { Schema, model } from "mongoose";

import { ID } from "~/utils/types";

export type AnswerViewType = "all" | "links" | "text";

export interface IQuestion {
  _id: ID;
  slug: string;
  body: string;
  description: string;
  order: number;
  isActive: boolean;
  answerView?: AnswerViewType;
}

const QuestionSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  body: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
  answerView: { type: String, enum: ["links", "all"] },
});

export const Question =
  mongoose.models.Question ||
  model<IQuestion>("Question", QuestionSchema, "questions");
