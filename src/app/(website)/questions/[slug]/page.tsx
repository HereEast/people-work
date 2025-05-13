import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";
import { QuestionView, AnswersList } from "~/components/(pages)/(questions)";
import { RecommendedPeople } from "~/components/RecommendedPeople";

import { getQuestions } from "~/api-client/questions";
import { generateQuestionMetadata } from "~/utils/metadata";

interface QuestionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// METADATA
export async function generateMetadata(props: QuestionPageProps) {
  const params = await props.params;
  return generateQuestionMetadata(params.slug);
}

// PARAMS
export async function generateStaticParams() {
  const questions = await getQuestions();

  return (
    questions?.map((question) => ({
      slug: question.slug,
    })) || []
  );
}

// PAGE
export default async function QuestionAnswersPage(props: QuestionPageProps) {
  const params = await props.params;
  const { slug } = params;

  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  const currentIndex = questions?.findIndex((item) => item.slug === slug);
  const question = questions?.[currentIndex];

  return (
    <PageContainer>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-4">
        <QuestionView>{question.body}</QuestionView>
        <AnswersList slug={slug} />
      </div>

      <RecommendedPeople slug={slug} className="mb-12 mt-24" />
    </PageContainer>
  );
}

//<QuestionsNav questions={questions} currentIndex={currentIndex} />
