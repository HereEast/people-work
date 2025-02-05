import { QAPage } from "~/components/layouts/QAPage";

import { connectDB } from "../lib/connectDB";
import { Person, IPerson } from "~/models/Person";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PersonPageProps) {
  await connectDB();

  const person: IPerson = await Person.findOne({ slug: params.slug }).exec();

  if (person) {
    const title = `PEOPLE—WORK.NET | ${person.name}, ${person.jobTitle} at ${person.company.name}`;

    return {
      title: title,
      openGraph: {
        title: title,
      },
      twitter: {
        title: title,
      },
    };
  }
}

export default function PersonPage({ params }: PersonPageProps) {
  return <QAPage slug={params.slug} />;
}
