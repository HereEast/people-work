"use client";

import { Loader } from "../Loader";
import { ParsedParagraph } from "../ParsedParagraph";
import { PersonCard } from "../PersonCard";
import { SharePersonCard } from "../SharePersonCard";
import { SidePanel } from "../SidePanel";
import { PageContainer } from "./PageContainer";

import { useAnswers } from "~/hooks";

interface PersonProps {
  slug: string;
}

export function PersonPage({ slug }: PersonProps) {
  const { data, isLoading } = useAnswers(slug);

  return (
    <PageContainer classes="min-h-screen max-w-full">
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="flex justify-between gap-4">
          <div className="relative flex max-w-7xl gap-10">
            {data && (
              <div className="relative">
                <div className="sticky top-16 w-[340px]">
                  <PersonCard person={data.person} isLink={false} />
                </div>
              </div>
            )}

            <div className="space-y-10">
              <div className="flex flex-col gap-2 rounded-5xl bg-stone-100 p-10 text-xl">
                {data?.answers?.map((item, index) => {
                  const question = item.questionId;

                  return (
                    <div
                      key={index}
                      className="space-y-4 rounded-2xl bg-white p-8"
                    >
                      <Question>{question.body}</Question>
                      <Answer>{item.answer}</Answer>
                    </div>
                  );
                })}
              </div>

              <SharePersonCard />
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-16">
              <SidePanel />
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

// Answer
interface AnswersProps {
  children: string;
}

export function Answer({ children }: AnswersProps) {
  return (
    <div className="answer text-2xl leading-tight">
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
