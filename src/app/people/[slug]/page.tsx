import { PersonQAPage } from "~/components/pages/PersonQAPage";

import { connectDB } from "~/app/lib/connectDB";
import { Person, IPerson } from "~/models/Person";
import { getPeople } from "~/api-client/people";

import { SEO_DATA } from "~/utils/data/seo-data";
import { getMetadata } from "~/utils/getMetadata";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

// METADATA
export async function generateMetadata({ params }: PersonPageProps) {
  await connectDB();

  const person: IPerson = await Person.findOne({ slug: params.slug }).exec();

  if (person) {
    const title = SEO_DATA.person.title(
      person.name,
      person.jobTitle,
      person.company.name,
    );

    const description = SEO_DATA.person.description(person.name);

    return getMetadata({ title, description });
  }
}

// PARAMS
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
