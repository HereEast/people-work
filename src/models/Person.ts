import mongoose, { Schema, model } from "mongoose";

export interface IPersonDB {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  company: ICompany;
  jobTitle: string;
  country: string;
  links: ILinks;
  slug: string;
  isActive: boolean;
  contentMeta: IContentMeta;
  keyWords?: string[];
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

export interface IContentMeta {
  answers: {
    featured: mongoose.Types.ObjectId;
    marked: mongoose.Types.ObjectId[];
  };
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

const PersonDBSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    company: { type: CompanySchema },
    jobTitle: { type: String, required: true },
    country: { type: String, required: true },
    links: { type: LinksSchema },
    slug: { type: String, required: true, unique: true },
    keyWords: { type: [String], default: [] },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export type PersonDBType = IPersonDB & Document;

export const PersonDB =
  mongoose.models.Person ||
  model<PersonDBType>("Person", PersonDBSchema, "persons");
