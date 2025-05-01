import { notFound } from "next/navigation";
import Link from "next/link";

import { getQuestions } from "~/api-client/questions";
import { getAnswersByQuestionSlug } from "~/api-client/answers";

import { PageContainer } from "~/components/PageContainer";
import { generateQuestionMetadata } from "~/utils/metadata";
import { PersonDetails, QuestionsNav } from "~/components/(pages)/(questions)";
import { Answer } from "~/components/(pages)/(personQA)";

import { BASE_URL } from "~/utils/constants";

interface QuestionPageProps {
  params: {
    slug: string;
  };
}

// METADATA
export async function generateMetadata({ params }: QuestionPageProps) {
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
export default async function QuestionAnswersPage({
  params,
}: QuestionPageProps) {
  const { slug } = params;

  const [questions, answers] = await Promise.all([
    getQuestions(),
    getAnswersByQuestionSlug(slug),
  ]);

  if (!answers || !questions) {
    notFound();
  }

  const currentIndex = questions?.findIndex((item) => item.slug === slug);
  const question = questions?.[currentIndex];

  return (
    <PageContainer className="max-w-4xl">
      <div className="mb-4">
        <Link
          href={`${BASE_URL}/questions`}
          className="underline hover:no-underline hover:opacity-50"
          scroll={false}
        >
          All Questions
        </Link>
      </div>

      <div className="mb-10">
        <h2 className="text-4xl font-extrabold tracking-header">
          {question.body}
        </h2>
      </div>

      <ul className="mb-6 space-y-2">
        {answers.map((answer, index) => (
          <li className="rounded-2xl bg-stone-100 p-8 text-xl" key={index}>
            <div className="space-y-8">
              <Answer>{answer}</Answer>
              <PersonDetails person={answer.person} />
            </div>
          </li>
        ))}
      </ul>

      <QuestionsNav questions={questions} currentIndex={currentIndex} />
    </PageContainer>
  );
}
