import Link from "next/link";
import { notFound } from "next/navigation";

import { PageWrapper } from "~/components/PageWrapper";
import { Button } from "~/components/Button";
import { Subscribe } from "~/components/Subscribe";
import { QuestionTag } from "~/components/Tag";
import { GoToButton } from "~/components/Buttons";

import { getQuestions } from "~/api-client/questions";
import { QuestionData } from "~/schemas";
import { BASE_URL } from "~/utils/constants";

// PAGE
export default async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  return (
    <PageWrapper>
      <ul className="mb-10 pt-6">
        {questions.map((question, index) => (
          <li
            className="border-t border-stone-900/20 last:border-b"
            key={index}
          >
            <>
              <MobileQuestionItemView question={question} />
              <DesktopQuestionItemView question={question} />
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
  question: QuestionData;
}

function DesktopQuestionItemView({ question }: QuestionItemProps) {
  return (
    <Link
      href={`${BASE_URL}/questions/${question.slug}`}
      className="group hidden w-full py-5 md:block"
    >
      <div className="grid grid-cols-[2fr_1fr] items-center">
        <div className="mb-0.5 mr-24 transition">
          <h2 className="text-3xl font-semibold leading-[110%] opacity-95 group-hover:opacity-30 sm:tracking-[-0.025ch]">
            {question.body}
          </h2>
        </div>

        <div className="flex justify-between">
          <div className="w-[320px] lg:w-[400px]">
            <QuestionTag slug={question.slug} />
          </div>

          <GoToButton href={`/questions/${question.slug}`} />
        </div>
      </div>
    </Link>
  );
}

function MobileQuestionItemView({ question }: QuestionItemProps) {
  return (
    <Link
      href={`${BASE_URL}/questions/${question.slug}`}
      className="group inline-block w-full py-5 md:hidden"
    >
      <div className="flex w-full items-center justify-between gap-10">
        <div className="transition group-hover:opacity-30 sm:mb-0.5">
          <h2 className="text-xl font-semibold leading-[110%] sm:text-3xl md:leading-[110%]">
            {question.body}
          </h2>
        </div>

        <GoToButton href={`/questions/${question.slug}`} />
      </div>
    </Link>
  );
}
