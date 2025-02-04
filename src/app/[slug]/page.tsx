import { QAPage } from "~/components/layouts/QAPage";

import { connectDB } from "../lib/connectDB";
import { Person, IPerson } from "~/models/Person";
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

export default function PersonPage({ params }: PersonPageProps) {
  return <QAPage slug={params.slug} />;
}
