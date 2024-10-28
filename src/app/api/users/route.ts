import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { IUser, User } from "~/models";

// Create User
export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "🔴 Email and password are required." },
      { status: 400 },
    );
  }

  try {
    await connectDB();

    // Check if user exists.

    const newUser: IUser = new User({ email, password });
    await newUser.save();

    return NextResponse.json(newUser);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error creating a user." },
      { status: 500 },
    );
  }
}
