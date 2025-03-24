import mongoose from "mongoose";

export interface IconProps {
  className?: string;
}

export type ID<T = string> = T | mongoose.Types.ObjectId | string;
