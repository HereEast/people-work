import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { SubscriptionDB } from "~/models/Subscription";
import { SubscriptionApiSchema } from "~/schemas";

// CREATE NEW SUBSCRIPTION (ADD EMAIL)
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

    const data = await SubscriptionDB.findOne({
      email,
    })
      .lean()
      .exec();

    if (data) {
      const subscription = SubscriptionApiSchema.parse(data);
      return NextResponse.json(subscription);
    }

    const newSubscription = new SubscriptionDB({ email });
    await newSubscription.save();

    return NextResponse.json(newSubscription);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error creating a new subscription." },
      { status: 500 },
    );
  }
}
