import mongoose, { Schema, model } from "mongoose";

export interface IQuestion {
  _id: mongoose.Types.ObjectId;
  body: string;
  description: string;
  order: number;
  isActive: boolean;
}

const QuestionSchema = new Schema({
  body: { type: String, required: true, unique: true },
  description: { type: String },
  order: { type: Number, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
});

export const Question =
  model<IQuestion>("Question", QuestionSchema, "questions");
