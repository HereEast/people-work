import mongoose, { Document } from "mongoose";

export type ObjectIdType = mongoose.Types.ObjectId;

export enum PAGE {
  HOME = "/",
  QUESTIONS = "/questions",
}

export interface IResult {
  answers: IAnswer[];
  person: IPerson;
}

export interface IPerson extends Document {
  // _id: mongoose.Types.ObjectId;
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

export interface IQuestion extends Document {
  // _id: mongoose.Types.ObjectId;
  body: string;
  description: string;
  order: number;
  isActive: boolean;
}

export interface IAnswer extends Document {
  // _id: mongoose.Types.ObjectId;
  personId: mongoose.Types.ObjectId | IPerson;
  questionId: mongoose.Types.ObjectId | IQuestion;
  name: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAnswerSubmitData {
  questionId: string;
  answer: string;
}

export interface ISelectedResult {
  person: IPerson;
  answers: IAnswer[];
}

export interface ISocialLinks {
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
}

// SVG Icons
export interface IconProps {
  className?: string;
}
