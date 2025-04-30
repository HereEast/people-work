import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { PersonDB } from "~/models/Person";
import { PersonApiSchema } from "~/schemas";

// GET ALL PEOPLE
export async function GET() {
  try {
    await connectDB();

    const data = await PersonDB.find({
      isActive: true,
    })
      .lean()
      .exec();

    const mappedData = data.map(({ _id, ...rest }) => ({
      ...rest,
      id: String(_id),
      createdAt: new Date(rest.createdAt),
    }));

    const people = PersonApiSchema.array().parse(mappedData);

    return NextResponse.json(people);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all people." },
      { status: 500 },
    );
  }
}
