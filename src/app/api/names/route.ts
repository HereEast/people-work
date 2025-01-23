import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { IName, Name } from "~/models";

// Create new Name (Share)
export async function POST(req: Request) {
  const { name, link } = await req.json();

  if (!name || !link) {
    return NextResponse.json(
      { message: "🔴 Name and link are required." },
      { status: 400 },
    );
  }

  try {
    await connectDB();

    // Check if exists and add counts.

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
