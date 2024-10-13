import mongoose, { Schema, model } from "mongoose";

import { IPerson } from "./Person.js";
import { IQuestion } from "./Question.js";

export interface IAnswer {
  _id: mongoose.Types.ObjectId;
  personId: mongoose.Types.ObjectId | IPerson;
  questionId: mongoose.Types.ObjectId | IQuestion;
  name: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
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

export const Answer = model<IAnswer>("Answer", AnswerSchema, "answers");
