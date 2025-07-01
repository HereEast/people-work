import { FilterQuery } from "mongoose";

import { connectDB } from "./connectDB";
import { IPersonDB, PersonDB } from "~/models/Person";
import { PersonData } from "~/schemas";

import { mapPeopleData, mapPersonData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

// Person by slug
export async function getPerson(slug: string): Promise<PersonData | null> {
  try {
    await connectDB();

    const doc: DBDoc<IPersonDB> = await PersonDB.findOne({ slug }).exec();

    if (!doc) return null;

    return mapPersonData(doc);
  } catch (err) {
    console.error("🔴 Failed to fetch a person by slug:", err);
    return null;
  }
}

// People
export async function getPeople(
  slugs?: string[],
): Promise<PersonData[] | null> {
  try {
    await connectDB();

    const query: FilterQuery<IPersonDB> = { isActive: true };

    if (slugs?.length) {
      query.slug = { $in: slugs };
    }

    const docs: DBDoc<IPersonDB>[] = await PersonDB.find(query)
      .sort({ createdAt: -1 })
      .exec();

    if (!docs.length) return null;

    const peopleData = mapPeopleData(docs);

    if (slugs?.length) {
      return slugs
        .map((slug) => peopleData.find((p) => p.slug === slug))
        .filter(Boolean) as PersonData[];
    }

    return peopleData;
  } catch (err) {
    console.error("🔴 Failed to fetch all people:", err);
    return null;
  }
}
