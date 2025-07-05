import mongoose, { Schema, model } from "mongoose";

import { IQuestionDB } from "./Question";
import { IPersonDB } from "./Person";

export interface IAnswerDB {
  _id: mongoose.Types.ObjectId;
  personId: mongoose.Types.ObjectId | IPersonDB;
  questionId: mongoose.Types.ObjectId | IQuestionDB;
  name: string;
  answer: string;
  marked: boolean;
  disabled: boolean;
  clarifications: {
    question: string;
    answer: string;
  }[];
}

const ClarificationDBSchema = new Schema(
  {
    question: { type: String },
    answer: { type: String },
  },
  { _id: false },
);

const AnswerDBSchema = new Schema(
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
    answer: { type: String, required: true },
    clarifications: {
      type: [ClarificationDBSchema],
      default: [],
    },
    marked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export type AnswerDBType = IAnswerDB & Document;

export const AnswerDB =
  mongoose.models.Answer ||
  model<AnswerDBType>("Answer", AnswerDBSchema, "answers");
