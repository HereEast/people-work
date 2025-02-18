import { PersonQAPage } from "~/components/pages/PersonQAPage";

import { connectDB } from "~/app/lib/connectDB";
import { Person, IPerson } from "~/models/Person";
import { getPeople } from "~/api-client/people";

import { SEO_DATA } from "~/utils/seo-data";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const people = await getPeople();

  return (
    people?.map((person) => ({
      slug: person.slug,
    })) || []
  );
}

export default async function PersonPage({ params }: PersonPageProps) {
  return <PersonQAPage slug={params.slug} />;
}

// METADATA
export async function generateMetadata({ params }: PersonPageProps) {
  await connectDB();

  const person: IPerson = await Person.findOne({ slug: params.slug }).exec();

  if (person) {
    const title = `${person.name}, ${person.jobTitle} at ${person.company.name}`;
    const description = `Discover how ${person.name} approaches work, perspectives, and career growth. Explore unique insights and experiences in a simple Q&A format.`;

    return {
      title,
      description: SEO_DATA.description,
      metadataBase: new URL(SEO_DATA.url),
      openGraph: {
        title,
        description: SEO_DATA.description,
        url: SEO_DATA.url,
        siteName: "people-work.net",
        images: [
          {
            url: SEO_DATA.image,
            width: 1200,
            height: 630,
          },
        ],
        locale: "en-EN",
      },
      twitter: {
        title,
        description: SEO_DATA.description,
        site: "people-work.net",
        card: "summary_large_image",
        images: [
          {
            url: SEO_DATA.image,
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }
}
