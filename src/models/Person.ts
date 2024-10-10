import mongoose, { Schema, model } from "mongoose";

export interface IPerson {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
  profileImage?: string;
  keyWords?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PersonSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
    country: { type: String, required: true },
    profileImage: { type: String },
    keyWords: { type: [String] },
  },
  { timestamps: true },
);

export const Person = model<IPerson>("Person", PersonSchema, "persons");
