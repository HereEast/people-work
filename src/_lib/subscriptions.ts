import { SubscriptionData } from "~/schemas";
import { handleError } from "~/utils/handlers";

// Subscribe
export async function submitSubscription(
  email: string,
): Promise<SubscriptionData | null> {
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
      throw new Error("🔴 Failed to subscribe.");
    }

    const data: SubscriptionData = await response.json();

    return data;
  } catch (err) {
    handleError(err);

    return null;
  }
}
