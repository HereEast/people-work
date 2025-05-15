import { notFound } from "next/navigation";

import { PageWrapper } from "~/components/PageWrapper";
import { RecommendedSection } from "~/components/RecommendedSection";
import { QAList, PersonView } from "~/components/(pages)/(personQA)";

import { getPeople, getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";
import { generatePersonMetadata } from "~/utils/metadata";

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

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-4">
        <PersonView person={person} />
        <QAList data={answers} />
      </div>

      <RecommendedSection slug={slug} className="mb-12 mt-24" />
    </PageWrapper>
  );
}
