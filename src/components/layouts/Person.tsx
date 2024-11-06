"use client";

import { useSearchParams } from "next/navigation";

import { AnswerParagraph, SidePanel, PersonIntro } from "~/components";
import { PageContainer } from "./PageContainer";

import { usePerson, useAnswers } from "~/hooks";
import { cn } from "~/utils/handlers";

interface PersonProps {
  slug: string;
}

export function Person({ slug }: PersonProps) {
  const searchParams = useSearchParams();

  const selectedSlug = searchParams.get("person") || "";

  const { data: selectedAnswers } = useAnswers(selectedSlug);
  const { data: answers, isLoading: answersLoading } = useAnswers(slug);
  const { data: person, isLoading: personLoading } = usePerson(slug);

  if (personLoading || answersLoading) {
    return <div>Loading...</div>;
  }

  const isSidePanelSelected = selectedAnswers && selectedAnswers?.length > 0;

  return (
    <PageContainer>
      <div className="flex gap-6">
        <div className="space-y-10">
          {person && !personLoading && <PersonIntro person={person} />}

          <div className="overflow-x-auto rounded-3xl border-2 border-stone-700 text-xl">
            {answers?.map((answerItem, index) => {
              const selectedAnswer = selectedAnswers?.[index];

              return (
                <div
                  key={index}
                  className={cn(
                    "grid border-b-2 border-stone-700 last:border-b-0 hover:bg-stone-200",
                    isSidePanelSelected ? "grid-cols-3" : "grid-cols-2",
                  )}
                >
                  <QuestionItem question={answerItem.question} />
                  <AnswerItem answer={answerItem.answer} />

                  {isSidePanelSelected && (
                    <AnswerItem answer={selectedAnswer?.answer} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <SidePanel />
      </div>
    </PageContainer>
  );
}

// Answers
interface AnswersItemProps {
  answer?: string;
}

export function AnswerItem({ answer = "" }: AnswersItemProps) {
  return (
    <div className="flex-1 border-stone-700 p-6 [&:not(:first-child)]:border-l-2">
      {answer && <AnswerParagraph answer={answer} />}
    </div>
  );
}

// Questions
interface QuestionItemProps {
  question: string;
}

export function QuestionItem({ question }: QuestionItemProps) {
  return (
    <div className="flex-1 border-stone-700 p-6">
      {question && <h5 className="font-semibold">{question}</h5>}
    </div>
  );
}
