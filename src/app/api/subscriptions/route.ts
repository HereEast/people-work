import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { ISubscription, Subscription } from "~/models/Subscription";

// Create new Subscription
export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "🔴 Email is required." },
      { status: 400 },
    );
  }

  try {
    await connectDB();

    // Check if exists and add counts.

    const subscription: ISubscription = new Subscription({ email });
    await subscription.save();

    return NextResponse.json(subscription);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error creating a new subscription." },
      { status: 500 },
    );
  }
}
