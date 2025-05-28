import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { PageWrapper } from "~/components/PageWrapper";
import { Button } from "~/components/ui/Button";
import { Subscribe } from "~/components/Subscribe";
import { Tag } from "~/components/Tag";

import { getQuestions } from "~/api-client/questions";
import { BASE_URL } from "~/utils/constants";
import { QuestionData } from "~/schemas";
import { cn, getQuestionEmoji } from "~/utils/handlers";

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
          <QuestionItem question={question} key={index} />
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

function QuestionItem({ question }: QuestionItemProps) {
  const emoji = getQuestionEmoji(question.slug);

  return (
    <li className="border-b border-stone-900 first:border-t">
      <Link
        href={`${BASE_URL}/questions/${question.slug}`}
        className="group grid items-center gap-6 py-6 pt-5 lg:grid-cols-[1fr_auto] lg:gap-10 lg:py-4"
      >
        <div className="transition group-hover:opacity-30 sm:mb-0.5">
          <h2 className="text-3xl font-semibold leading-[100%] tracking-[-0.03ch] sm:text-[36px] md:leading-[110%]">
            {question.body}
          </h2>
        </div>

        <div className="flex justify-between lg:w-[420px] lg:gap-10">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Tag>{question.slug}</Tag>
            <Tag size="icon">
              <span className={cn(emoji.className)}>{emoji.value}</span>
            </Tag>
          </div>

          <div className="flex justify-between gap-2">
            <Button href={`/questions/${question.slug}`} size="icon">
              <ArrowUpRightIcon className="w-6 shrink-0" />
            </Button>
          </div>
        </div>
      </Link>
    </li>
  );
}
