import mongoose, { Schema, model } from "mongoose";

import { IAnswer } from "~/utils/types";

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

export const Answer =
  mongoose.models.Answer || model<IAnswer>("Answer", AnswerSchema, "answers");
