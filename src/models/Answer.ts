import mongoose, { Schema, model } from "mongoose";

import { IQuestion } from "./Question";
import { IPerson } from "./Person";
import { ID } from "~/utils/types";

export interface IAnswer {
  personId: ID<IPerson>;
  questionId: ID<IQuestion>;
  name: string;
  question: string;
  answer: string;
  links?: IAnswerLink[];
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
