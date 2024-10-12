import mongoose, { Schema, model } from "mongoose";

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
    companyURL: { type: String },
    jobTitle: { type: String, required: true },
    country: { type: String, required: true },
    profileImageURL: { type: String },
    socialLinks: { type: SocialLinksSchema },
    keyWords: { type: [String] },
    isActive: { type: Boolean, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const Person =
  mongoose.models.Person || model<IPerson>("Person", PersonSchema, "persons");
