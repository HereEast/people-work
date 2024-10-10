import mongoose, { Schema, model } from "mongoose";

export interface IAnswer {
  _id: mongoose.Types.ObjectId;
  personId: mongoose.Types.ObjectId;
  questionId: mongoose.Types.ObjectId;
  body: string;
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
    body: { type: String, required: true },
  },
  { timestamps: true },
);

export const Answer = model<IAnswer>("Answer", AnswerSchema, "answers");
