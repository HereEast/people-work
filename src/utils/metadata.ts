import { Metadata } from "next";

import { connectDB } from "~/_lib";
import { SEO_DATA } from "./data/seo-data";
import { QuestionDB } from "~/models/Question";
import { PersonDB } from "~/models/Person";
import { BASE_URL } from "./constants";

// export const SEO_DATA = {
//   index: {
//     url: BASE_URL,
//     imageUrl: "/og-image.jpg",
//     title: "Job titles decoded. In a simple Q&A format.",
//     description:
//       "A small web hustle on a mission to demystify job titles and show real people behind them.",
//   },
//   person: {
//     title(name: string, title: string, company: string) {
//       return `${name}, ${title} at ${company}`;
//     },
//     description(name: string) {
//       return `Discover how ${name} approaches work, perspectives, and career growth. Explore unique insights and experiences in a simple Q&A format.`;
//     },
//   },
//   question: {
//     title(question: string) {
//       return `Q: ${question}`;
//     },
//     description:
//       "Explore diverse perspectives on this topic from professionals across industries.",
//   },
// };

// Person metadata
export async function generatePersonMetadata(slug: string) {
  await connectDB();

  const person = await PersonDB.findOne({ slug }).exec();

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
  await connectDB();

  const question = await QuestionDB.findOne({ slug, isActive: true }).exec();

  if (question) {
    const title = SEO_DATA.question.title(question.body);
    const description = SEO_DATA.question.description;

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
