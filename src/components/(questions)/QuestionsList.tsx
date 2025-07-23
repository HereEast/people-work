import Link from "next/link";

import { QuestionTag } from "../QuestionTag";
import { QuestionData } from "~/schemas";
import { GoToButton } from "../ui";

interface QuestionsListProps {
  questions: QuestionData[];
}

export function QuestionsList({ questions }: QuestionsListProps) {
  return (
    <div>
      <ul aria-label="List of career questions">
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
    <li className="group border-t border-stone-900/15 px-px last:border-b">
      <Link
        href={`/questions/${question.slug}`}
        className="grid grid-cols-[1fr_auto] items-center gap-6 py-4 transition lg:grid-cols-2 lg:gap-4 lg:py-5"
        aria-label={`View answers to: ${question.body}`}
      >
        <div className="lg:pr-10">
          <h2 className="text-xl font-semibold leading-[120%] tracking-[-0.02ch] transition group-hover:opacity-30 sm:text-3xl lg:text-5xl lg:leading-[100%]">
            {question.body}
          </h2>
        </div>

        <div className="grid w-full grid-cols-[1fr_auto] lg:ml-auto lg:min-w-[380px] lg:max-w-[480px] lg:gap-4">
          <div className="hidden lg:block">
            <QuestionTag
              slug={question.slug}
              className="group-hover:opacity-45"
            />
          </div>

          <div className="">
            <GoToButton className="group-hover:bg-stone-600/15" />
          </div>
        </div>
      </Link>
    </li>
  );
}
