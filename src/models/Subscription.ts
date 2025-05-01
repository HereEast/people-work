import mongoose, { Schema, Document, model } from "mongoose";

export interface ISubscriptionDB {
  email: string;
}

const SubscriptionDBSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true },
);

export type SubscriptionDBType = ISubscriptionDB & Document;

export const SubscriptionDB =
  mongoose.models.Subscription ||
  model<SubscriptionDBType>(
    "Subscription",
    SubscriptionDBSchema,
    "subscriptions",
  );
