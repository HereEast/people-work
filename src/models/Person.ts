import mongoose, { Schema, Document, model } from "mongoose";

export interface IPerson extends Document {
  name: string;
  email: string;
  company: ICompany;
  jobTitle: string;
  country: string;
  links: ILinks;
  keyWords?: string[];
  slug: string;
  isActive: boolean;
  updatedAt: Date;
  createdAt: Date;
}

export interface ICompany {
  name: string;
  url: string;
}

export interface ILinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

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
    slug: { type: String, required: true, unique: true },
    keyWords: { type: [String] },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const Person =
  mongoose.models.Person || model<IPerson>("Person", PersonSchema, "persons");
