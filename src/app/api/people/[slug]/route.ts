export const runtime = "nodejs";

import { HydratedDocument } from "mongoose";
import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { Person, IPerson } from "~/models/Person";

interface ReqParams {
  params: { slug: string };
}

// GET PERSON BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const slug = params.slug;

  try {
    await connectDB();

    const doc: HydratedDocument<IPerson> = await Person.findOne({
      slug,
    }).exec();

    const person: IPerson = {
      ...doc.toObject(),
      _id: doc.toObject()._id.toString(),
    };

    return NextResponse.json(person);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch a person." },
      { status: 500 },
    );
  }
}
