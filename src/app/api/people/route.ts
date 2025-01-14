import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { Person } from "~/models/Person";
import { IPerson } from "~/utils/types";

// Get all people
export async function GET() {
  try {
    await connectDB();

    const people: IPerson[] = await Person.find({ isActive: true }).exec();

    return NextResponse.json(people);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all people." },
      { status: 500 },
    );
  }
}
