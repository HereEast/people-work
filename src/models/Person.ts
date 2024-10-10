import { Schema, model } from "mongoose";

import { IPerson } from "~/utils/types";

const SocialLinksSchema = new Schema(
  {
    linkedIn: { type: String },
    twitter: { type: String },
    instagram: { type: String },
  },
  { _id: false },
);

const PersonSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
    country: { type: String, required: true },
    profileImage: { type: String },
    socialLinks: { type: SocialLinksSchema },
    keyWords: { type: [String] },
  },
  { timestamps: true },
);

export const Person = model<IPerson>("Person", PersonSchema, "persons");
