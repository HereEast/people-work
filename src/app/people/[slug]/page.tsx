import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";
import { FeaturedCardList } from "~/components/FeaturedCardList";
import { Content, PersonView } from "~/components/(pages)/(personQA)";

import { getPeople, getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";
import { generatePersonMetadata } from "~/utils/metadata";
import { getRandomSlugs } from "~/utils/handlers";

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
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="sticky top-11 self-start rounded-b-2xl bg-stone-200 md:top-14 lg:top-1/2 lg:-translate-y-1/2">
          <PersonView person={person} />
        </div>

        <Content data={answers} />
      </div>

      <div className="mb-20 mt-24">
        <div className="mb-6">
          <h2 className="text-center text-2xl font-medium md:text-4xl">
            Check other cool people
          </h2>
        </div>

        {recommendedPeople && <FeaturedCardList people={recommendedPeople} />}
      </div>
    </PageContainer>
  );
}
