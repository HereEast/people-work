import { Metadata } from "next";

import { getPerson, getQuestion } from "~/_lib";
import { BASE_URL } from "./constants";
import { isFreelanceWork } from "./handlers";

const SEO_DATA = {
  url: BASE_URL,
  imageUrl: "/og-image.jpg",
  title: "Job titles explained via simple Q&As. Real people, real jobs.",
  description:
    "Discover what professionals actually do in their jobs. Get real career insights from Creative Directors, Data Scientists, AI Engineers, CEOs, and more.",
};

// Person metadata
export async function generatePersonMetadata(slug: string) {
  const person = await getPerson(slug);

  if (person) {
    const work = person.work;

    const isFreelance = isFreelanceWork(work.company);

    const title = isFreelance
      ? `What does a ${work.title} actually do? Real experience from ${person.name}`
      : `What does a ${work.title} actually do? Real experience from ${person.name} at ${work.company}.`;

    const description = isFreelance
      ? `Get real insights into a ${work.title}'s daily routine, responsibilities, and challenges from ${person.name}. No fluff, just honest career advice in a simple Q&A format.`
      : `Get real insights into a ${work.title}'s daily routine, responsibilities, and challenges from ${person.name} at ${work.company}. No fluff, just honest career advice in a simple Q&A format.`;

    return getMetadata({ title, description });
  }
}

// Question metadata
export async function generateQuestionMetadata(slug: string) {
  const question = await getQuestion(slug);

  if (question) {
    const title = question.body;
    const description = `${question.body} Discover how experts from different industries approach this question.`;

    return getMetadata({ title, description });
  }
}

// Index metadata
interface MetadataInput {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export function getMetadata(input: MetadataInput = {}): Metadata {
  const title = input.title || SEO_DATA.title;
  const description = input.description || SEO_DATA.description;
  const imageUrl = input.imageUrl || SEO_DATA.imageUrl;

  return {
    title,
    description,
    metadataBase: new URL(SEO_DATA.url),
    openGraph: {
      title,
      description,
      url: SEO_DATA.url,
      siteName: "people-work.net",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-EN",
      type: "website",
    },
  };
}
