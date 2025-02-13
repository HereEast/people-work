import mongoose, { Schema, Document, model } from "mongoose";

export type AnswerViewType = "all" | "links" | "text";

export interface IQuestion extends Document {
  body: string;
  slug: string;
  description: string;
  order: number;
  isActive: boolean;
  answerView?: AnswerViewType;
}

const QuestionSchema = new Schema({
  body: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
  answerView: { type: String, enum: ["links", "all"] },
});

export const Question =
  mongoose.models.Question ||
  model<IQuestion>("Question", QuestionSchema, "questions");
