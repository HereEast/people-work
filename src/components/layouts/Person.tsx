"use client";

import { ReactNode } from "react";

import { AnswerParagraph, SidePanel, PersonIntro } from "~/components";

import { usePerson } from "~/hooks/usePerson";
import { useQuestions } from "~/hooks/useQuestions";
import { useAnswers } from "~/hooks/useAnswers";
import { IAnswer, IQuestion } from "~/utils/types";
import { PageContainer } from "./PageContainer";

interface PersonProps {
  slug: string;
}

export function Person({ slug }: PersonProps) {
  const { data: person } = usePerson(slug);
  const { data: questions } = useQuestions();
  const { data: answers } = useAnswers(slug);

  if (!person || !questions || !answers) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <div className="flex gap-6">
        <div className="space-y-10">
          {person && <PersonIntro person={person} />}

          <div className="grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0">
            <QuestionsColumn questions={questions} />
            <AnswersColumn answers={answers} />
          </div>

          {/* <div className="rounded-3xl border-2 border-stone-700 text-xl">
          {questions?.map((q, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0"
            >
              <div className="flex-1 border-r-2 border-stone-700 p-6">
                <h5 className="font-semibold">{q.body}</h5>
              </div>

              <div className="flex-1 p-6">
                {answers?.[index]?.answer && (
                  <AnswerParagraph
                    answer={answers?.[index]?.answer as string}
                  />
                )}
              </div>
            </div>
          ))}
        </div> */}
        </div>

        <SidePanel />
      </div>
    </PageContainer>
  );
}

// Q&A Table
interface TableProps {
  questions: IQuestion[];
  children: ReactNode;
}

export function Table({ questions, children }: TableProps) {
  return (
    <div className="rounded-3xl border-2 border-stone-700 text-xl">
      {questions?.map((q, index) => (
        <div
          key={index}
          className="grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0"
        >
          <div className="flex-1 border-r-2 border-stone-700 p-6">
            <h5 className="font-semibold">{q.body}</h5>
          </div>

          {children}
        </div>
      ))}
    </div>
  );
}

// Answers
interface AnswersColumnProps {
  answers: IAnswer[];
}

export function AnswersColumn({ answers }: AnswersColumnProps) {
  return (
    <div className="rounded-r-3xl border-2 border-stone-700 text-xl">
      {answers.map((answer, index) => (
        <div
          key={index}
          className="border-b-2 border-stone-700 p-6 last:border-b-0"
        >
          <AnswerParagraph answer={answer.answer} />
        </div>
      ))}
    </div>
  );
}

// Questions
interface QuestionsColumnProps {
  questions: IQuestion[];
}

export function QuestionsColumn({ questions }: QuestionsColumnProps) {
  return (
    <div className="rounded-l-3xl border-2 border-r-0 border-stone-700 text-xl">
      {questions?.map((q, index) => (
        <div
          key={index}
          className="border-b-2 border-stone-700 p-6 last:border-b-0"
        >
          <h5 className="font-semibold">{q.body}</h5>
        </div>
      ))}
    </div>
  );
}
