import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";
import { FeaturedList } from "~/components/FeaturedList";
import { QAList, PersonView } from "~/components/(pages)/(personQA)";

import { getPeople, getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";
import { generatePersonMetadata } from "~/utils/metadata";
import { getFeaturedSlugs } from "~/utils/handlers";

interface PersonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// METADATA
export async function generateMetadata(props: PersonPageProps) {
  const params = await props.params;
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
export default async function PersonQAPage(props: PersonPageProps) {
  const params = await props.params;
  const { slug } = params;

  const person = await getPerson(slug);
  const answers = await getAnswersByPersonSlug(slug);

  const recommendedSlugs = getFeaturedSlugs(2);
  const recommendedPeople = await getPeople(recommendedSlugs);

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-4">
        <PersonView person={person} />
        <QAList data={answers} />
      </div>

      <div className="mb-20 mt-24">
        <div className="mb-10">
          <h2 className="text-center text-2xl font-medium md:text-4xl">
            Check other cool people
          </h2>
        </div>

        {recommendedPeople && <FeaturedList people={recommendedPeople} />}
      </div>
    </PageContainer>
  );
}
