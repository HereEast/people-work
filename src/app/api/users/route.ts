import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { User } from "~/models/User";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    await connectDB();

    const newUser = new User({ email, password });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.log(err);
  }
}
