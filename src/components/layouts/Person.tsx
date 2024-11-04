"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { AnswerParagraph, SidePanel, PersonIntro } from "~/components";
import { PageContainer } from "./PageContainer";

import {
  usePerson,
  useQuestions,
  useAnswers,
  useSelectedAnswers,
} from "~/hooks";
import { IAnswer, IQuestion } from "~/utils/types";
import { cn } from "~/utils/handlers";

interface PersonProps {
  slug: string;
}

export function Person({ slug }: PersonProps) {
  const searchParams = useSearchParams();

  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(
    searchParams.getAll("person"),
  );

  useEffect(() => {
    const selected = searchParams.getAll("person");

    console.log(selected);
    setSelectedSlugs(selected);
  }, [searchParams]);

  const { data: selected } = useSelectedAnswers(selectedSlugs);

  const { data: person } = usePerson(slug);
  const { data: questions } = useQuestions();
  const { data: answers } = useAnswers(slug);

  console.log(selected);

  if (!person || !questions || !answers) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <div className="flex gap-6">
        <div className="space-y-10">
          {person && <PersonIntro person={person} />}

          {/* <div className="grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0">
            <QuestionsColumn questions={questions} />
            <AnswersColumn answers={answers} />
          </div> */}

          <div className="rounded-3xl border-2 border-stone-700 text-xl">
            {questions?.map((q, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0",
                  selected &&
                    selected?.length > 0 &&
                    `grid-cols-${2 + selected?.length}`,
                )}
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

                {selected &&
                  selected?.length > 0 &&
                  selected.map((item, index) => (
                    <div
                      className="flex-1 border-l-2 border-stone-700 p-6"
                      key={index}
                    >
                      {item.answers?.[index]?.answer && (
                        <AnswerParagraph
                          answer={item.answers?.[index]?.answer as string}
                        />
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <SidePanel />
      </div>
    </PageContainer>
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
