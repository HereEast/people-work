import mongoose, { Schema, model } from "mongoose";

interface IQuestionDB {
  slug: string;
  body: string;
  description: string;
  order: number;
  isActive: boolean;
}

const QuestionDbSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  body: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
});

export type QuestionDocumentType = IQuestionDB & Document;

export const QuestionDocument =
  mongoose.models.Question ||
  model<QuestionDocumentType>("Question", QuestionDbSchema, "questions");
