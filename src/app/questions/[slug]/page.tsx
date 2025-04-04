import { notFound } from "next/navigation";
import Link from "next/link";

import { getQuestions } from "~/api-client/questions";
import { connectDB } from "~/lib/connectDB";
import { IQuestion, Question } from "~/models/Question";

import { SEO_DATA } from "~/utils/data/seo-data";
import { getMetadata } from "~/utils/metadata";
import { getAnswersByQuestionSlug } from "~/api-client/answers";
import { PageContainer } from "~/components/PageContainer";
import { BASE_URL } from "~/utils/constants";
import { IPerson } from "~/models/Person";
import { PersonDetails, QuestionsNavigation } from "~/components/(questions)";
import { Answer } from "~/components/(personQA)/Answer";

interface QuestionPageProps {
  params: {
    slug: string;
  };
}

// METADATA
export async function generateMetadata({ params }: QuestionPageProps) {
  await connectDB();

  const question: IQuestion = await Question.findOne({
    slug: params.slug,
  }).exec();

  if (question) {
    const title = SEO_DATA.question.title(question.body);
    const description = SEO_DATA.question.description;

    return getMetadata({ title, description });
  }
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

export default async function QuestionAnswersPage({
  params,
}: QuestionPageProps) {
  const { slug } = params;

  const questions = await getQuestions();
  const answers = await getAnswersByQuestionSlug(slug);

  if (!answers || !questions) {
    notFound();
  }

  const currentIndex = questions?.findIndex((item) => item.slug === slug);

  const question = questions?.[currentIndex];

  return (
    <PageContainer className="max-w-4xl">
      {answers && question && (
        <>
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
            {answers.map((answer, index) => {
              const person = answer.personId as IPerson;

              return (
                <li
                  className="rounded-2xl bg-stone-100 p-8 text-xl"
                  key={index}
                >
                  <div className="space-y-8">
                    <Answer>{answer}</Answer>
                    <PersonDetails person={person} />
                  </div>
                </li>
              );
            })}
          </ul>

          <QuestionsNavigation
            questions={questions}
            currentIndex={currentIndex}
          />
        </>
      )}
    </PageContainer>
  );
}
