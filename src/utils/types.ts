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

export interface ICompany {
  name: string;
  url: string;
}

export interface IPerson extends Document {
  name: string;
  email: string;
  company: ICompany;
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
  body: string;
  description: string;
  order: number;
  isActive: boolean;
}

export interface IAnswer extends Document {
  personId: mongoose.Types.ObjectId;
  questionId: IQuestion;
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
