import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";
import { PersonImage } from "~/components/PersonImage";
import { Content } from "~/components/(pages)/(personQA)";
import { AccentText } from "~/components/AccentText";
import { FeaturedCardList } from "~/components/FeaturedCard";

import { getPeople, getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";
import { generatePersonMetadata } from "~/utils/metadata";
import { getRandomSlugs } from "~/utils/handlers";
import { PersonData } from "~/schemas";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

// METADATA
export async function generateMetadata({ params }: PersonPageProps) {
  return generatePersonMetadata(params.slug);
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

// PAGE
export default async function PersonQAPage({ params }: PersonPageProps) {
  const { slug } = params;

  const person = await getPerson(slug);
  const answers = await getAnswersByPersonSlug(slug);

  const recommendedSlugs = getRandomSlugs();
  const recommendedPeople = await getPeople(recommendedSlugs);

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="grid w-full grid-cols-2 gap-6">
        <div className="sticky top-1/2 -translate-y-1/2 self-start">
          <PersonView person={person} />
        </div>

        <Content data={answers} />
      </div>

      <div className="mb-20 mt-24">
        <div className="mb-6">
          <h2 className="text-center text-4xl font-medium">
            Check other cool people
          </h2>
        </div>

        {recommendedPeople && <FeaturedCardList people={recommendedPeople} />}
      </div>
    </PageContainer>
  );
}

// Person Preview
interface PersonCardProps {
  person: PersonData;
}

export function PersonView({ person }: PersonCardProps) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="size-[320px] overflow-hidden rounded-xl">
        <PersonImage name={person.name} slug={person.slug} />
      </div>

      <div className="space-y-1">
        <h1 className="text-center">
          <AccentText>{person.name}</AccentText>
        </h1>

        <h2 className="text-4xl font-medium">{`${person.jobTitle} at ${person.company.name}`}</h2>
      </div>
    </div>
  );
}
