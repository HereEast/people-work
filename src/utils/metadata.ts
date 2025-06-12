import { Metadata } from "next";

import { getPerson, getQuestion } from "~/_lib";
import { BASE_URL } from "./constants";

export const SEO_DATA = {
  index: {
    url: BASE_URL,
    imageUrl: "/og-image.jpg",
    title: "Job titles decoded. In a simple Q&A format.",
    description:
      "Real people, real jobs. Brief Q&As that demystify titles, share routines, and explore what keeps them going.",
  },
  person: {
    title(name: string, title: string, company: string) {
      return `${name}, ${title} at ${company}`;
    },
    description(name: string) {
      return `Get to know how ${name} thinks about work, career, and personal growth. All in a simple Q&A.`;
    },
  },
  question: {
    title(question: string) {
      return `Q: ${question}`;
    },
    description(tag: string) {
      return `Discover how experts from different industries approach this question. #${tag}`;
    },
  },
};

// Person metadata
export async function generatePersonMetadata(slug: string) {
  const person = await getPerson(slug);

  if (person) {
    const title = SEO_DATA.person.title(
      person.name,
      person.work[0].title,
      person.work[0].company,
    );

    const description = SEO_DATA.person.description(person.name);

    return getMetadata({ title, description });
  }
}

// Question metadata
export async function generateQuestionMetadata(slug: string) {
  const question = await getQuestion(slug);

  if (question) {
    const title = SEO_DATA.question.title(question.body);
    const description = SEO_DATA.question.description(question.slug);

    return getMetadata({ title, description });
  }
}

// Get metadata
interface MetadataInput {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export function getMetadata(input: MetadataInput = {}): Metadata {
  const title = input.title || SEO_DATA.index.title;
  const description = input.description || SEO_DATA.index.description;
  const imageUrl = input.imageUrl || SEO_DATA.index.imageUrl;

  return {
    title,
    description,
    metadataBase: new URL(SEO_DATA.index.url),
    openGraph: {
      title,
      description,
      url: SEO_DATA.index.url,
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
