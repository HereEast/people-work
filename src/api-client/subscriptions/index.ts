import axios from "axios";

import { ISubscription } from "~/models/Subscription";

interface SubscriptionProps {
  email: string;
}

// CREATE SUBSCRIPTION (ADD EMAIL)
export async function submitSubscription({ email }: SubscriptionProps) {
  if (!email) {
    throw new Error("Email is required.");
  }

  try {
    const response = await axios.post<ISubscription>(
      "api/subscriptions",
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
