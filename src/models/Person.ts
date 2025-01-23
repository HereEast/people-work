import mongoose, { Schema, model } from "mongoose";

import { IPerson } from "~/utils/types";

const LinksSchema = new Schema(
  {
    linkedin: { type: String },
    twitter: { type: String },
    instagram: { type: String },
  },
  { _id: false },
);

const CompanySchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String },
  },
  { _id: false },
);

const PersonSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    company: { type: CompanySchema },
    jobTitle: { type: String, required: true },
    country: { type: String, required: true },
    links: { type: LinksSchema },
    keyWords: { type: [String] },
    isActive: { type: Boolean, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const Person =
  mongoose.models.Person || model<IPerson>("Person", PersonSchema, "persons");
