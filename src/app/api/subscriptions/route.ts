import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { ISubscription, Subscription } from "~/models/Subscription";

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

    const existingEmail = await Subscription.findOne({ email }).exec();

    if (existingEmail) {
      return NextResponse.json(existingEmail);
    }

    const newSubscription: ISubscription = new Subscription({ email });
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
