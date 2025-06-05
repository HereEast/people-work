import Link from "next/link";

import { QuestionTag } from "~/components/Tag";
import { QuestionData } from "~/schemas";

interface QuestionItemProps {
  question: QuestionData;
}

export function QuestionItem({ question }: QuestionItemProps) {
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
