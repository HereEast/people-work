import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IPersonDB, PersonDB } from "~/models/Person";
import { mapPeopleData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

interface ReqParams {
  params: { slug: string };
}

// GET PERSON BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const slug = params.slug;

  try {
    await connectDB();

    const data: DBDoc<IPersonDB> = await PersonDB.findOne({ slug }).exec();

    if (!data) {
      return NextResponse.json(null);
    }

    const person = mapPeopleData(data);

    return NextResponse.json(person);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch a person." },
      { status: 500 },
    );
  }
}
