export const dynamic = "force-dynamic";

import { FilterQuery } from "mongoose";
import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IPersonDB, PersonDB } from "~/models/Person";
import { PersonData } from "~/schemas";
import { mapPeopleData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

// GET ALL PEOPLE
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const slugs = searchParams.getAll("slug");

    const query: FilterQuery<IPersonDB> = { isActive: true };

    if (slugs.length > 0) {
      query.slug = { $in: slugs };
    }

    const docs: DBDoc<IPersonDB>[] = await PersonDB.find(query).exec();

    const people = mapPeopleData(docs) as PersonData[];
    const result =
      slugs.length > 0
        ? slugs.map((slug) => people.find((p) => p.slug === slug))
        : people;

    return NextResponse.json(result);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all people." },
      { status: 500 },
    );
  }
}
