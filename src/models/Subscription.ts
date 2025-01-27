import mongoose, { Schema, Document, model } from "mongoose";

export interface ISubscription extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const SubscriptionSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true },
);

export const Subscription =
  mongoose.models.Subscription ||
  model<ISubscription>("Subscription", SubscriptionSchema, "subscriptions");
