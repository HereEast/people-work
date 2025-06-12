import { NextResponse } from "next/server";

import { connectDB } from "~/_lib";
import { IName, Name } from "~/models/Name";

// CREATE NAME (SHARE)
export async function POST(req: Request) {
  const { name, link } = await req.json();

  if (!name || !link) {
    return NextResponse.json(
      { message: "🔴 All inputs are required." },
      { status: 400 },
    );
  }

  try {
    await connectDB();

    const newName: IName = new Name({ name, link });
    await newName.save();

    return NextResponse.json(newName);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Error creating a new shared name." },
      { status: 500 },
    );
  }
}
