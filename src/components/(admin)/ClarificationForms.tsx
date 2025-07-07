import { AnswerData } from "~/schemas";
import { NewClarification } from "./NewClarification";
import { SubmitClarificationForm } from "./SubmitClarificationForm";

interface ClarificationFormsProps {
  answer: AnswerData;
}

export function ClarificationForms({ answer }: ClarificationFormsProps) {
  return (
    <>
      {answer?.clarifications && answer?.clarifications?.length > 0 && (
        <div className="mt-10 space-y-16 rounded-xl border border-stone-200 p-10">
          {answer?.clarifications?.map((clarification, index) => (
            <div key={index}>
              <SubmitClarificationForm
                clarification={clarification}
                answerId={answer.id}
                personSlug={answer.person.slug}
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10">
        <NewClarification
          answerId={answer?.id || ""}
          personSlug={answer?.person.slug || ""}
        />
      </div>
    </>
  );
}
