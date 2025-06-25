import { notFound } from "next/navigation";

import { QuestionView, AnswersList } from "~/components/(question-page)";
import { RecommendedSection } from "~/components/RecommendedSection";

import { generateQuestionMetadata } from "~/utils/metadata";
import { getQuestion, getQuestions } from "~/_lib";

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
export default async function QuestionPage(props: QuestionPageProps) {
  const { slug } = await props.params;

  const question = await getQuestion(slug);

  if (!question) {
    notFound();
  }

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
