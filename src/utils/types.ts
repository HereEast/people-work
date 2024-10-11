import mongoose from "mongoose";

export enum PAGE {
  HOME = "/",
  QUESTIONS = "/questions",
}

export interface IPerson {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  company: string;
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

export interface IQuestion {
  _id: mongoose.Types.ObjectId;
  body: string;
  description: string;
  order: number;
  isActive: boolean;
}

export interface IAnswer {
  _id: mongoose.Types.ObjectId;
  personId: mongoose.Types.ObjectId;
  questionId: mongoose.Types.ObjectId;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISocialLinks {
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
}
