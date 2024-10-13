import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { User } from "~/models";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    await connectDB();

    const newUser = new User({ email, password });
    await newUser.save();

    return NextResponse.json(newUser);
  } catch (err) {
    console.log(err);
  }
}
