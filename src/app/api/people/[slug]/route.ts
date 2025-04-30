import { NextResponse } from "next/server";

import { connectDB } from "~/lib/connectDB";
import { IPersonDB, PersonDB } from "~/models/Person";
import { PersonApiSchema } from "~/schemas";

interface ReqParams {
  params: { slug: string };
}

// GET PERSON BY SLUG
export async function GET(req: Request, { params }: ReqParams) {
  const slug = params.slug;

  try {
    await connectDB();

    const data = (await PersonDB.findOne({ slug })
      .lean()
      .exec()) as IPersonDB | null;

    if (!data) {
      return NextResponse.json(null);
    }

    const mappedData = {
      ...data,
      id: String(data?._id),
      createdAt: new Date(data?.createdAt),
    };

    const person = PersonApiSchema.parse(mappedData);

    return NextResponse.json(person);
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "🔴 Failed to fetch a person." },
      { status: 500 },
    );
  }
}
