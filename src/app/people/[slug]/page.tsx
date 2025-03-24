import { PersonQA } from "~/components/pages/PersonQA";

import { connectDB } from "~/app/lib/connectDB";
import { getPeople, getPerson } from "~/api-client/people";

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

  const person = await getPerson(params.slug);

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

export default async function PersonQAPage({ params }: PersonPageProps) {
  return <PersonQA slug={params.slug} />;
}
