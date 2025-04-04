import type { MetadataRoute } from "next";

import { BASE_URL } from "~/utils/constants";
import { connectDB } from "../lib/connectDB";
import { IPerson, Person } from "~/models/Person";
import { IQuestion, Question } from "~/models/Question";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();

  const people: IPerson[] = await Person.find({ isActive: true }).exec();
  const questions: IQuestion[] = await Question.find({ isActive: true }).exec();

  const peopleSitemapData =
    people?.map((person) => {
      return {
        url: `${BASE_URL}/${person.slug}`,
        lastModified: person.updatedAt,
      };
    }) || [];

  const questionsSitemapData =
    questions?.map((question) => {
      return {
        url: `${BASE_URL}/${question.slug}`,
        lastModified: new Date(),
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
    {
      url: "/questions",
      lastModified: new Date(),
    },
    ...peopleSitemapData,
    ...questionsSitemapData,
  ];
}
