import { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { PageWrapper } from "~/components/PageWrapper";
import { Subscribe } from "~/components/Subscribe";
import { QuestionTag } from "~/components/Tag";
import { buttonVariants } from "~/components/Button";

import { getQuestions } from "~/api-client/questions";
import { QuestionData } from "~/schemas";
import { cn } from "~/utils/handlers";

export default async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  const goToButton = (
    <div
      className={cn(
        buttonVariants({ size: "icon", variant: "base" }),
        "group-hover:bg-stone-600/25",
      )}
    >
      <ArrowUpRightIcon className="w-5 shrink-0 sm:w-6" />
    </div>
  );

  return (
    <PageWrapper>
      <ul className="mb-10 pt-6">
        {questions.map((question, index) => (
          <li
            className="border-t border-stone-900/20 last:border-b"
            key={index}
          >
            <>
              <MobileQuestionItemView question={question}>
                {goToButton}
              </MobileQuestionItemView>

              <DesktopQuestionItemView question={question}>
                {goToButton}
              </DesktopQuestionItemView>
            </>
          </li>
        ))}
      </ul>

      <section className="mx-auto my-16 max-w-[640px]">
        <Subscribe />
      </section>
    </PageWrapper>
  );
}

// Question item
interface QuestionItemProps {
  children: ReactNode;
  question: QuestionData;
}

function DesktopQuestionItemView({ children, question }: QuestionItemProps) {
  return (
    <div className="group hidden md:block">
      <Link href={`questions/${question.slug}`} className="inline-block py-5">
        <div className="grid grid-cols-[2fr_1fr] items-center">
          <div className="mb-0.5 mr-24">
            <h2 className="text-3xl font-semibold leading-[110%] opacity-95 transition group-hover:opacity-30 sm:tracking-[-0.025ch]">
              {question.body}
            </h2>
          </div>

          <div className="flex justify-between">
            <div className="flex w-[320px] items-center gap-1.5 lg:w-[400px]">
              <QuestionTag
                slug={question.slug}
                className="group-hover:border-transparent group-hover:bg-stone-600/25"
              />
            </div>

            {children}
          </div>
        </div>
      </Link>
    </div>
  );
}

function MobileQuestionItemView({ children, question }: QuestionItemProps) {
  return (
    <div className="group md:hidden">
      <Link
        href={`/questions/${question.slug}`}
        className="group flex w-full items-center justify-between gap-10 py-4 md:hidden"
      >
        <div className="sm:mb-0.5">
          <h2 className="inline-block text-xl font-semibold leading-[115%] transition group-hover:opacity-30 sm:text-3xl md:leading-[110%]">
            {question.body}
          </h2>
        </div>

        {children}
      </Link>
    </div>
  );
}
