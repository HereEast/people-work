import mongoose, { Schema, model } from "mongoose";

export interface IQuestion {
  _id: mongoose.Types.ObjectId;
  body: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema(
  {
    body: { type: String, required: true, unique: true },
    order: { type: Number, required: true, unique: true },
  },
  { timestamps: true },
);

export const Question = model<IQuestion>(
  "Question",
  QuestionSchema,
  "questions",
);
