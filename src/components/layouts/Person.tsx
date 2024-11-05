"use client";

import { useSearchParams } from "next/navigation";

import { AnswerParagraph, SidePanel, PersonIntro } from "~/components";
import { PageContainer } from "./PageContainer";

import { usePerson, useAnswers, useQuestions } from "~/hooks";
import { IAnswer, IQuestion } from "~/utils/types";
import { cn } from "~/utils/handlers";

interface PersonProps {
  slug: string;
}

export function Person({ slug }: PersonProps) {
  const searchParams = useSearchParams();

  const selectedSlug = searchParams.get("person") || "";

  const { data: selected } = useAnswers(selectedSlug);
  const { data: answers } = useAnswers(slug);

  const { data: person, isLoading: personLoading } = usePerson(slug);
  const { data: questions, isLoading: questionsLoading } = useQuestions();

  // console.log(selected);

  if (personLoading || questionsLoading || !answers) {
    return <div>Loading...</div>;
  }

  const isSidePanelSelected = selected && selected?.length > 0;

  return (
    <PageContainer>
      <div className="flex gap-6">
        <div className="space-y-10">
          {person && <PersonIntro person={person} />}

          {/* <div className="grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0">
            <QuestionsColumn questions={questions} />
            <AnswersColumn answers={answers} />
          </div> */}

          <div className="overflow-x-auto rounded-3xl border-2 border-stone-700 text-xl">
            {questions?.map((q, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0",
                  isSidePanelSelected && "grid-cols-3",
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

                {isSidePanelSelected && (
                  <div className="flex-1 border-l-2 border-stone-700 p-6">
                    {selected?.[index]?.answer && (
                      <AnswerParagraph
                        answer={selected?.[index]?.answer as string}
                      />
                    )}
                  </div>
                )}
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
