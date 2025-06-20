import { notFound } from "next/navigation";

import { QuestionView, AnswersList } from "~/components/(question-page)";
import { RecommendedSection } from "~/components/RecommendedSection";

import { generateQuestionMetadata } from "~/utils/metadata";
import { getQuestions } from "~/_lib";

interface QuestionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// METADATA
export async function generateMetadata(props: QuestionPageProps) {
  const { slug } = await props.params;
  return generateQuestionMetadata(slug);
}

// PARAMS
export async function generateStaticParams() {
  const questions = await getQuestions();

  if (!questions) {
    return [];
  }

  return questions.map((question) => ({
    slug: question.slug,
  }));
}

// PAGE
export default async function QuestionAnswersPage(props: QuestionPageProps) {
  const { slug } = await props.params;

  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  const currentIndex = questions?.findIndex((item) => item.slug === slug);
  const question = questions?.[currentIndex];

  return (
    <div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-4">
        <QuestionView question={question} />
        <AnswersList slug={slug} />
      </div>

      <div className="mb-12 mt-24">
        <RecommendedSection slug={slug} />
      </div>
    </div>
  );
}

//<QuestionsNav questions={questions} currentIndex={currentIndex} />
