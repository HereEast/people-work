import mongoose, { HydratedDocument } from "mongoose";

export interface IconProps {
  className?: string;
}

export type DBDoc<T> = HydratedDocument<T & { _id: mongoose.Types.ObjectId }>;
