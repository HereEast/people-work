import { SubscriptionData } from "~/schemas";

interface SubscriptionProps {
  email: string;
}

// CREATE SUBSCRIPTION (ADD EMAIL)
export async function submitSubscription({
  email,
}: SubscriptionProps): Promise<SubscriptionData | null> {
  if (!email) {
    throw new Error("Email is required.");
  }

  try {
    const response = await fetch("api/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("🔴 Failed to (subscribe)");
    }

    const data: SubscriptionData = await response.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }

    return null;
  }
}
