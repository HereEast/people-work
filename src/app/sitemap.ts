import type { MetadataRoute } from "next";

import { BASE_URL } from "~/utils/constants";
import { connectDB } from "./lib/connectDB";
import { IPerson, Person } from "~/models/Person";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();

  const people: IPerson[] = await Person.find({ isActive: true }).exec();

  const peopleSitemapData =
    people?.map((person) => {
      return {
        url: `${BASE_URL}/${person.slug}`,
        lastModified: person.updatedAt,
      };
    }) || [];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: "/backlog",
      lastModified: new Date(),
    },
    ...peopleSitemapData,
  ];
}
