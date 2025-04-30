import mongoose, { Schema, model } from "mongoose";

import { IQuestionDB } from "./Question";
import { IPersonDB } from "./Person";

import { ID } from "~/utils/types";

export interface IAnswerDB {
  _id: mongoose.Types.ObjectId;
  personId: ID<IPersonDB>;
  questionId: ID<IQuestionDB>;
  name: string;
  question: string;
  answer: string;
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
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true },
);

export type AnswerDBType = IAnswerDB & Document;

export const AnswerDB =
  mongoose.models.Answer ||
  model<AnswerDBType>("Answer", AnswerDBSchema, "answers");
