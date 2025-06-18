import Link from "next/link";
import { notFound } from "next/navigation";

import { SubscribeSection } from "~/components/SubscribeSection";
import { QuestionTag } from "~/components/QuestionTag";

import { getQuestions } from "~/_lib";
import { QuestionData } from "~/schemas";

export default async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions?.length) {
    notFound();
  }

  return (
    <div className="pt-6">
      <QuestionsList questions={questions} />

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}

// Questions List
function QuestionsList({ questions }: { questions: QuestionData[] }) {
  return (
    <div>
      <ul>
        {questions.map((question) => (
          <QuestionItem question={question} key={question.id} />
        ))}
      </ul>
    </div>
  );
}

// Question Item
interface QuestionItemProps {
  question: QuestionData;
}

function QuestionItem({ question }: QuestionItemProps) {
  return (
    <li className="group border-t border-stone-900/15 last:border-b">
      <Link
        href={`/questions/${question.slug}`}
        className="mx-px flex w-full flex-col-reverse gap-5 pb-5 pt-4 transition group-hover:opacity-100 md:grid md:grid-cols-2 md:items-center md:gap-10"
      >
        <QuestionTag
          slug={question.slug}
          className="group-hover:border-stone-900/20"
        />

        <div className="mr-6">
          <h2 className="text-3xl font-semibold leading-[100%] tracking-[-0.03ch] transition group-hover:opacity-30 sm:text-3xl md:leading-[110%] lg:text-5xl lg:leading-[100%]">
            {question.body}
          </h2>
        </div>
      </Link>
    </li>
  );
}
