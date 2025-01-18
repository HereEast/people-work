"use client";

import { ParsedParagraph } from "../ParsedParagraph";
import { PersonCard } from "../PersonCard";
import { SidePanel } from "../SidePanel";
import { PageContainer } from "./PageContainer";

import { useAnswers } from "~/hooks";

interface PersonProps {
  slug: string;
}

export function PersonPage({ slug }: PersonProps) {
  const { data, isLoading } = useAnswers(slug);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer classes="flex gap-10 relative">
      <div className="grid grid-cols-[320px_1fr] gap-10">
        {data && !isLoading && (
          <div className="sticky top-10 w-[320px]">
            <PersonCard person={data.person} isLink={false} />
          </div>
        )}

        <div className="flex flex-col gap-2 rounded-5xl bg-stone-100 p-10 text-xl">
          {data?.answers?.map((item, index) => {
            const question = item.questionId;

            return (
              <div key={index} className="space-y-4 rounded-2xl bg-white p-8">
                <Question>{question.body}</Question>
                <Answer>{item.answer}</Answer>
              </div>
            );
          })}
        </div>
      </div>

      <SidePanel />
    </PageContainer>
  );
}

// Answer
interface AnswersProps {
  children: string;
}

export function Answer({ children }: AnswersProps) {
  return (
    <div className="text-2xl leading-tight">
      <ParsedParagraph>{children}</ParsedParagraph>
    </div>
  );
}

// Question
interface QuestionProps {
  children: string;
}

export function Question({ children }: QuestionProps) {
  return (
    <div className="flex-1 border-stone-700">
      <h5 className="text-base leading-tight text-stone-400/75">{children}</h5>
    </div>
  );
}
