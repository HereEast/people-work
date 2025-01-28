import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { Person, IPerson } from "~/models/Person";
// import { IPerson } from "~/utils/types";

interface ReqParams {
  params: { slug: string };
}

// GET PERSON BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const slug = params.slug;

  try {
    await connectDB();

    const person: IPerson = await Person.findOne({ slug }).exec();

    return NextResponse.json(person);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch a person." },
      { status: 500 },
    );
  }
}
