"use client";

import { IPerson, IResult } from "~/utils/types";
import { Loader } from "../Loader";
import { ParsedParagraph } from "../ParsedParagraph";
import { SharePersonCard } from "../SharePersonCard";
import { SidePanel } from "../SidePanel";
import { PersonPreview } from "../PersonPreview";
import { PageContainer } from "./PageContainer";

import { useAnswers } from "~/hooks";

interface QAPageProps {
  slug: string;
}

export function QAPage({ slug }: QAPageProps) {
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
                  <PersonPreview person={data.person} />
                </div>
              </div>
            )}

            <div className="space-y-10">
              {data && <Content data={data} />}
              <SharePersonCard />
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="sticky top-16">
              <SidePanel />
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

// Content
interface ContentProps {
  data: IResult;
}

function Content({ data }: ContentProps) {
  return (
    <div className="flex flex-col gap-2 rounded-5xl bg-stone-100 p-10 text-xl">
      {data?.answers?.map((item, index) => {
        const question = item.questionId;

        return (
          <div key={index} className="space-y-4 rounded-2xl bg-white p-8">
            <Question>{question.body}</Question>
            <Answer question={question.order} person={data.person}>
              {item.answer}
            </Answer>
          </div>
        );
      })}
    </div>
  );
}

// Answer
interface AnswersProps {
  children: string;
  question: number;
  person: IPerson;
}

export function Answer({ children, question, person }: AnswersProps) {
  return (
    <div className="answer text-2xl leading-tight">
      {question === 2 ? (
        <p>
          {person.jobTitle} @{" "}
          <a
            href={person.company.url}
            target="_blank"
            className="underline hover:no-underline hover:opacity-50"
          >
            {person.company.name}
          </a>
        </p>
      ) : (
        <ParsedParagraph>{children}</ParsedParagraph>
      )}
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
