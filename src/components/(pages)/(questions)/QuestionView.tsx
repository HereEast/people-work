import { Column } from "~/components/Column";
import { Button } from "~/components/ui/Button";
import { Tag } from "~/components/Tag";

import { QuestionData } from "~/schemas";
import { ROUTE } from "~/utils/constants";
import { Card, StickyMobileWrapper } from "~/components/Card";

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
  return (
    <Column variant="sticky">
      <div className="hidden h-full flex-col justify-between gap-10 md:flex">
        <div className="mb-10 space-y-6">
          <h1 className="text-5xl font-semibold leading-[95%] tracking-[-0.03ch]">
            {question.body}
          </h1>
          <Tag>{question.slug}</Tag>
        </div>

        <Button href={ROUTE.questions} underline className="text-3xl">
          <span>All questions</span>
        </Button>
      </div>
    </Column>
  );
}

// Mobile
function MobileQuestionView({ question }: QuestionViewProps) {
  return (
    <StickyMobileWrapper>
      <Card className="gap-1 bg-stone-800 p-2 pb-5 text-stone-50 sm:p-5">
        <span className="text-center text-sm opacity-50">#{question.slug}</span>
        <h1 className="text-center text-xl font-semibold leading-[100%]">
          {question.body}
        </h1>
      </Card>
    </StickyMobileWrapper>
  );
}
