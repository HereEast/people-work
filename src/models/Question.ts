import mongoose, { Schema, Document, model } from "mongoose";

export type AnswerViewType = "all" | "links" | "text";

export interface IQuestion extends Document {
  body: string;
  description: string;
  order: number;
  active: boolean;
  answerView?: AnswerViewType;
}

const QuestionSchema = new Schema({
  body: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  active: { type: Boolean, required: true, default: true },
  answerView: { type: String, enum: ["links", "all"] },
});

export const Question =
  mongoose.models.Question ||
  model<IQuestion>("Question", QuestionSchema, "questions");
