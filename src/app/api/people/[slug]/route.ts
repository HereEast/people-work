import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IPersonDB, PersonDB } from "~/models/Person";
import { mapPeopleData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

interface ReqParams {
  params: Promise<{ slug: string }>;
}

// GET PERSON BY SLUG
export async function GET(req: Request, props: ReqParams) {
  const { slug } = await props.params;

  try {
    await connectDB();

    const doc: DBDoc<IPersonDB> = await PersonDB.findOne({
      slug,
    }).exec();

    if (!doc) {
      return NextResponse.json(null);
    }

    const person = mapPeopleData(doc);

    return NextResponse.json(person);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch a person." },
      { status: 500 },
    );
  }
}
