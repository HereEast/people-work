import mongoose, { Schema, model } from "mongoose";

import { IQuestionDB } from "./Question";
import { IPersonDB } from "./Person";

export interface IAnswerDB {
  _id: mongoose.Types.ObjectId;
  personId: mongoose.Types.ObjectId | IPersonDB;
  questionId: mongoose.Types.ObjectId | IQuestionDB;
  name: string;
  answer: string;
  featured?: boolean;
  marked?: boolean;
  disabled?: boolean;
}

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
    featured: { type: Boolean },
    marked: { type: Boolean },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export type AnswerDBType = IAnswerDB & Document;

export const AnswerDB =
  mongoose.models.Answer ||
  model<AnswerDBType>("Answer", AnswerDBSchema, "answers");
