import { SubscriptionData } from "~/schemas";
import { ISubscriptionDB, SubscriptionDB } from "~/models/Subscription";

import { connectDB } from "./connectDB";
import { mapSubscriptionData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

// Subscribe
export async function submitSubscription(
  email: string,
): Promise<SubscriptionData | null> {
  try {
    await connectDB();

    const doc: DBDoc<ISubscriptionDB> = await SubscriptionDB.findOne({
      email,
    }).exec();

    if (!doc) {
      const subscription = mapSubscriptionData(doc);
      return subscription;
    }

    const newSubscription = new SubscriptionDB({ email });
    await newSubscription.save();

    return mapSubscriptionData(newSubscription);
  } catch (err) {
    console.error("🔴 Failed to create a new subscription:", err);
    return null;
  }
}
