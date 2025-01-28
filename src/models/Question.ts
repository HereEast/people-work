import mongoose, { Schema, Document, model } from "mongoose";

export interface IQuestion extends Document {
  body: string;
  description: string;
  order: number;
  active: boolean;
}

const QuestionSchema = new Schema({
  body: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  active: { type: Boolean, required: true, default: true },
});

export const Question =
  mongoose.models.Question ||
  model<IQuestion>("Question", QuestionSchema, "questions");
