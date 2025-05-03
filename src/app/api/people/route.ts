import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IPersonDB, PersonDB } from "~/models/Person";
import { mapPeopleData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

// GET ALL PEOPLE
export async function GET() {
  try {
    await connectDB();

    const docs: DBDoc<IPersonDB>[] = await PersonDB.find({
      isActive: true,
    }).exec();

    const people = mapPeopleData(docs);

    console.log({ people });

    return NextResponse.json(people);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch all people." },
      { status: 500 },
    );
  }
}
