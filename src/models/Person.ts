import mongoose, { Schema, model } from "mongoose";

export interface IPerson {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const PersonSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export const Person = model<IPerson>("Person", PersonSchema, "persons");
