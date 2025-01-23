import mongoose, { Schema, Document, model } from "mongoose";

export interface IName extends Document {
  name: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

const NameSchema = new Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true },
);

export const Name =
  mongoose.models.Name || model<IName>("Name", NameSchema, "names");
