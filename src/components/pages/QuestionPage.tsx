import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";
import { Answer } from "~/components/pages/person";
import { PersonDetails, QuestionsNavigation } from "./question";

import { getAnswersByQuestionSlug } from "~/api-client/answers";
import { getQuestions } from "~/api-client/questions";
import { IPerson } from "~/models/Person";

import { BASE_URL } from "~/utils/constants";

interface QuestionPageProps {
  slug: string;
}

export async function QuestionPage({ slug }: QuestionPageProps) {
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
                    <Answer answerData={answer} view={question.answerView} />
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
