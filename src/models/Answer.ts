import mongoose, { Schema, model } from "mongoose";

import { IQuestion } from "./Question";

export interface IAnswer extends Document {
  personId: mongoose.Types.ObjectId;
  questionId: IQuestion;
  name: string;
  question: string;
  answer: string;
}

const AnswerSchema = new Schema(
  {
    personId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    name: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true },
);

export const Answer =
  mongoose.models.Answer || model<IAnswer>("Answer", AnswerSchema, "answers");
