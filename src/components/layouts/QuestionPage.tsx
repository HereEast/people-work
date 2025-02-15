import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "./PageContainer";
import { PersonImage } from "../PersonImage";
import { Answer } from "../Content";
import { QuestionsNavigation } from "../QuestionsNavigation";

import { getAnswersByQuestionSlug } from "~/api-client/answers";
import { getQuestions } from "~/api-client/questions";
import { IPerson } from "~/models/Person";

import { BASE_URL } from "~/utils/constants";

interface QuestionPageProps {
  questionSlug: string;
}

export async function QuestionPage({ questionSlug }: QuestionPageProps) {
  const questions = await getQuestions();
  const answers = await getAnswersByQuestionSlug(questionSlug);

  if (!answers || !questions) {
    notFound();
  }

  const currentIndex = questions?.findIndex(
    (item) => item.slug === questionSlug,
  );

  const question = questions?.[currentIndex];

  return (
    <PageContainer className="max-w-4xl">
      {answers && question && (
        <div>
          <div className="mb-2">
            <Link
              href={`${BASE_URL}/questions`}
              className="underline hover:no-underline hover:opacity-50"
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
        </div>
      )}
    </PageContainer>
  );
}

// Person details
interface PersonDetailsProps {
  person: IPerson;
}

function PersonDetails({ person }: PersonDetailsProps) {
  return (
    <div className="flex items-start gap-3 text-base leading-none">
      <div className="size-10 shrink-0 overflow-hidden rounded-full">
        <PersonImage person={person} />
      </div>
      <div className="flex flex-col gap-1.5">
        <Link
          href={`${BASE_URL}/people/${person.slug}`}
          className="w-fit font-semibold tracking-header underline underline-offset-1 hover:no-underline hover:opacity-50"
        >
          {person.name}
        </Link>
        <span>{`${person.jobTitle} @ ${person.company.name}`}</span>
      </div>
    </div>
  );
}
