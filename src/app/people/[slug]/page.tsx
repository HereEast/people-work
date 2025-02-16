import { PersonQAPage } from "~/components/layouts";

import { connectDB } from "~/app/lib/connectDB";
import { Person, IPerson } from "~/models/Person";
import { getPeople } from "~/api-client/people";

import { OG } from "~/utils/constants";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PersonPageProps) {
  await connectDB();

  const person: IPerson = await Person.findOne({ slug: params.slug }).exec();

  if (person) {
    const title = `${person.name}, ${person.jobTitle} at ${person.company.name}`;

    return {
      title,
      description: OG.DESCRIPTION,
      metadataBase: new URL(OG.BASE_URL),
      openGraph: {
        title,
        description: OG.DESCRIPTION,
        url: OG.BASE_URL,
        siteName: "people-work.net",
        images: [
          {
            url: OG.IMAGE,
            width: 1200,
            height: 630,
          },
        ],
        locale: "en-EN",
      },
      twitter: {
        title,
        description: OG.DESCRIPTION,
        site: "people-work.net",
        card: "summary_large_image",
        images: [
          {
            url: OG.IMAGE,
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }
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
