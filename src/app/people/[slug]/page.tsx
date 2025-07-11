import { notFound } from "next/navigation";

import { RecommendedSection } from "~/components/RecommendedSection";
import { QAPersonView } from "~/components/(people)/QAPersonView";
import { QAList } from "~/components/(people)/QAList";

import { generatePersonMetadata } from "~/utils/metadata";
import { getAnswersByPersonSlug, getPeople, getPerson } from "~/_lib";

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
  return people?.map((person) => ({ slug: person.slug })) || [];
}

// PAGE
export default async function PersonQAPage(props: PersonPageProps) {
  const { slug } = await props.params;

  const [person, answers] = await Promise.all([
    getPerson(slug),
    getAnswersByPersonSlug(slug),
  ]);

  if (!person || !answers) {
    notFound();
  }

  return (
    <div>
      <section
        className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4"
        aria-labelledby="person-heading"
      >
        <QAPersonView person={person} />

        <section aria-labelledby="qa-heading">
          <h2 id="qa-heading" className="sr-only">
            Questions and Answers
          </h2>

          <QAList data={answers} />
        </section>
      </section>

      <div className="mb-12 mt-24">
        <RecommendedSection slug={slug} />
      </div>
    </div>
  );
}
