import { NextResponse } from "next/server";

import { connectDB } from "~/_lib";
import { ISubscriptionDB, SubscriptionDB } from "~/models/Subscription";
import { mapSubscriptionData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

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

    const data: DBDoc<ISubscriptionDB> = await SubscriptionDB.findOne({
      email,
    }).exec();

    if (data) {
      const subscription = mapSubscriptionData(data);
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
