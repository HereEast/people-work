"use client";

import { useRouter } from "next/navigation";

import { Column } from "~/components/Column";
import { Button } from "~/components/ui/Button";
import { Tag } from "~/components/Tag";
import { Card, StickyMobileWrapper } from "~/components/Card";

import { QuestionData } from "~/schemas";
import { ROUTE } from "~/utils/constants";
import { cn, getQuestionEmoji } from "~/utils/handlers";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface QuestionViewProps {
  question: QuestionData;
}

export function QuestionView({ question }: QuestionViewProps) {
  return (
    <>
      <DesktopQuestionView question={question} />
      <MobileQuestionView question={question} />
    </>
  );
}

// Desktop
function DesktopQuestionView({ question }: QuestionViewProps) {
  const router = useRouter();

  const emoji = getQuestionEmoji(question.slug);

  return (
    <Column variant="sticky">
      <div className="hidden h-full flex-col justify-between gap-10 pr-10 md:flex">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <Button
              variant="link"
              onClick={() => router.back()}
              className="flex gap-2 text-3xl"
            >
              <ArrowLeftIcon className="size-8 shrink-0" />
              <span>Back</span>
            </Button>

            <h1 className="text-5xl font-semibold leading-[95%] tracking-[-0.03ch]">
              {question.body}
            </h1>
          </div>

          <div className="flex gap-1.5">
            <Tag>{question.slug}</Tag>
            <Tag size="icon">
              <span className={cn("inline-block sm:text-2xl", emoji.className)}>
                {emoji.value}
              </span>
            </Tag>
          </div>
        </div>

        <Button
          href={ROUTE.questions}
          variant="link"
          underline
          className="text-3xl"
        >
          All questions
        </Button>
      </div>
    </Column>
  );
}

// Mobile
function MobileQuestionView({ question }: QuestionViewProps) {
  return (
    <StickyMobileWrapper>
      <Card className="gap-2 bg-stone-800 p-3 pb-4 text-stone-50 sm:gap-3 sm:p-6 sm:pt-5">
        <span className="inline-block text-center text-sm leading-[110%] opacity-50 sm:text-xl">
          #{question.slug}
        </span>
        <h1 className="text-center text-xl font-semibold leading-[100%] sm:text-3xl">
          {question.body}
        </h1>
      </Card>
    </StickyMobileWrapper>
  );
}
