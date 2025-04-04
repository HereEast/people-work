export const runtime = "nodejs";

import { HydratedDocument } from "mongoose";
import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { Person, IPerson } from "~/models/Person";

// GET ALL PEOPLE
export async function GET() {
  try {
    await connectDB();

    const docs: HydratedDocument<IPerson>[] = await Person.find({
      isActive: true,
    }).exec();

    const people: IPerson[] = docs.map((doc) => doc.toObject());

    return NextResponse.json(people);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all people." },
      { status: 500 },
    );
  }
}
