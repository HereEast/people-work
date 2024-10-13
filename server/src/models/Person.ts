import mongoose, { Schema, model } from "mongoose";

export interface IPerson {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  company: string;
  companyURL: string;
  jobTitle: string;
  country: string;
  profileImageURL?: string;
  socialLinks: ISocialLinks;
  keyWords?: string[];
  slug: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISocialLinks {
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
}

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

export const Person = model<IPerson>("Person", PersonSchema, "persons");
