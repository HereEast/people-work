import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { QuestionTag } from "~/components/Tag";
import { buttonVariants } from "~/components/Button";

import { QuestionData } from "~/schemas";
import { cn } from "~/utils/handlers";

interface QuestionItemProps {
  question: QuestionData;
}

export function QuestionItem({ question }: QuestionItemProps) {
  return (
    <div className="group">
      <Link
        href={`/questions/${question.slug}`}
        className={cn(
          "inline-block w-full py-4 transition group-hover:opacity-100",
          "lg:py-5",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-10",
            "lg:grid lg:grid-cols-[2fr_1fr] lg:items-center",
          )}
        >
          <div className={cn("sm:mb-0.5", "lg:mb-0 lg:mr-24")}>
            <h2
              className={cn(
                "text-xl font-semibold leading-[115%] transition group-hover:opacity-30",
                "sm:text-3xl sm:tracking-[-0.025ch] md:leading-[110%] lg:text-3xl lg:leading-[110%]",
              )}
            >
              {question.body}
            </h2>
          </div>

          {/* Footer */}
          <div className="flex justify-between">
            <div className="hidden w-[320px] items-center gap-1.5 lg:flex lg:w-[400px]">
              <QuestionTag
                slug={question.slug}
                className="group-hover:border-transparent group-hover:bg-stone-600/25"
              />
            </div>

            <div
              className={cn(
                buttonVariants({ size: "icon", variant: "base" }),
                "group-hover:bg-stone-600/25",
              )}
            >
              <ArrowUpRightIcon className="w-5 shrink-0 sm:w-6" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
