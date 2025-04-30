import mongoose, { Schema, model } from "mongoose";

export interface IQuestionDB {
  _id: mongoose.Types.ObjectId;
  slug: string;
  body: string;
  description: string;
  order: number;
  isActive: boolean;
}

const QuestionDBSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  body: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
});

export type QuestionDBType = IQuestionDB & Document;

export const QuestionDB =
  mongoose.models.Question ||
  model<QuestionDBType>("Question", QuestionDBSchema, "questions");
