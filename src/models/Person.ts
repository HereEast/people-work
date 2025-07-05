import mongoose, { Schema, model } from "mongoose";

export interface IPersonDB {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  slug: string;
  work: {
    company: string;
    title: string;
    url: string;
  }[];
  metadata: {
    experience: string;
    domain: string;
    featuredAnswer: string;
    location: {
      country: string;
      city: string;
    };
    links: {
      linkedin: string;
      instagram: string;
      twitter: string;
      email: string;
      website: string;
    };
  };
  isActive: boolean;
  isHidden: boolean;
  keyWords: string[];
  createdAt: Date;
}

const LinksSchema = new Schema(
  {
    linkedin: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    email: { type: String },
    website: { type: String },
  },
  { _id: false },
);

const MetadataSchema = new Schema(
  {
    experience: { type: String },
    domain: { type: String },
    featuredAnswer: { type: String },
    location: {
      country: { type: String },
      city: { type: String },
    },
    links: { type: LinksSchema },
  },
  { _id: false },
);

const WorkSchema = new Schema(
  {
    company: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String },
  },
  { _id: false },
);

const PersonDBSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    work: { type: [WorkSchema], required: true },
    metadata: { type: MetadataSchema },
    keyWords: { type: [String], default: [] },
    isActive: { type: Boolean, required: true },
    isHidden: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export type PersonDBType = IPersonDB & Document;

export const PersonDB =
  mongoose.models.Person ||
  model<PersonDBType>("Person", PersonDBSchema, "persons");
