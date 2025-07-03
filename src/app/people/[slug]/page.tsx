import { notFound } from "next/navigation";

import { RecommendedSection } from "~/components/RecommendedSection";
import { QAPersonView } from "~/components/(qa-page)/QAPersonView";
import { QAList } from "~/components/(qa-page)/QAList";

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
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        <QAPersonView person={person} />
        <QAList data={answers} />
      </div>

      <div className="mb-12 mt-24">
        <RecommendedSection slug={slug} />
      </div>
    </div>
  );
}
