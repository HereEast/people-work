import { ButtonLink, StickyColumn } from "../ui";
import { StickyMobileWrapper } from "~/components/ui/StickyMobileWrapper";
import { ButtonBack } from "./ButtonBack";
import { QuestionTag } from "../QuestionTag";

import { QuestionData } from "~/schemas";
import { ROUTE } from "~/utils/constants";

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
export function DesktopQuestionView({ question }: QuestionViewProps) {
  return (
    <StickyColumn>
      <div className="hidden h-full flex-col justify-between gap-10 pr-10 md:flex">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <ButtonBack aria-label="Back to all questions">Back</ButtonBack>

            <h1 className="text-5xl font-semibold leading-[100%] tracking-[-0.02ch]">
              {question.body}
            </h1>
          </div>

          <QuestionTag slug={question.slug} />
        </div>

        <ButtonLink
          href={ROUTE.questions}
          variant="link"
          underline
          className="text-3xl"
        >
          All questions
        </ButtonLink>
      </div>
    </StickyColumn>
  );
}

// Mobile
function MobileQuestionView({ question }: QuestionViewProps) {
  return (
    <StickyMobileWrapper>
      <div className="py-3.5 text-stone-50 sm:py-5">
        <h1 className="text-lg font-semibold leading-[115%] sm:text-3xl">
          <span className="mr-1 opacity-50">Q:</span>
          <span>{question.body}</span>
        </h1>
      </div>
    </StickyMobileWrapper>
  );
}
