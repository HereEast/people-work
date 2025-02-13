import mongoose, { Schema, Document, model } from "mongoose";

import { IQuestion } from "./Question";

export interface IAnswer extends Document {
  personId: mongoose.Types.ObjectId | IQuestion;
  questionId: mongoose.Types.ObjectId | IQuestion;
  name: string;
  question: string;
  answer: string;
  links?: {
    body: string;
    url: string;
    image?: string;
  }[];
}

export interface IAnswerLink {
  body: string;
  url: string;
  image?: string;
}

const AnswerLinksSchema = new Schema(
  {
    body: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String },
  },
  { _id: false },
);

const AnswerSchema = new Schema(
  {
    personId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
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
    links: [{ type: AnswerLinksSchema }],
  },
  { timestamps: true },
);

export const Answer =
  mongoose.models.Answer || model<IAnswer>("Answer", AnswerSchema, "answers");
