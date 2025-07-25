import type { MetadataRoute } from "next";

import { getPeople, getQuestions } from "~/_lib";
import { BASE_URL } from "~/utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const people = await getPeople();
  const questions = await getQuestions();

  const peopleSitemapData =
    people?.map((person) => {
      return {
        url: `${BASE_URL}/people/${person.slug}`,
        lastModified: new Date(),
      };
    }) || [];

  const questionsSitemapData =
    questions?.map((question) => {
      return {
        url: `${BASE_URL}/questions/${question.slug}`,
        lastModified: new Date(),
      };
    }) || [];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/people`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/questions`,
      lastModified: new Date(),
    },
    ...peopleSitemapData,
    ...questionsSitemapData,
  ];
}
