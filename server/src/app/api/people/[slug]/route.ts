import { NextResponse } from "next/server";

import { connectDB } from "~/app/lib/connectDB";
import { Person } from "~/models/Person";

interface ReqParams {
  params: { slug: string };
}

export async function GET(req: Request, { params }: ReqParams) {
  const slug = params.slug;

  console.log(slug);

  try {
    await connectDB();

    const person = await Person.findOne({ slug }).exec();

    return NextResponse.json(person);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
