import { notFound } from "next/navigation";

import { PageWrapper } from "~/components/PageWrapper";
import { RecommendedSection } from "~/components/RecommendedSection";
import { QAList, QAPersonInfo } from "~/components/(pages)/(personQA)";

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
  const { slug } = await props.params;
  return generatePersonMetadata(slug);
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
  const { slug } = await props.params;

  const person = await getPerson(slug);
  const answers = await getAnswersByPersonSlug({ slug });

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageWrapper>
      <section className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        <QAPersonInfo person={person} />
        <QAList data={answers} />
      </section>

      <section className="mb-12 mt-24">
        <RecommendedSection slug={slug} />
      </section>
    </PageWrapper>
  );
}
