"use client";

import { useState } from "react";

import { Button } from "../ui";
import { SubmitClarificationForm } from "./SubmitClarificationForm";

import { AnswerData } from "~/schemas";

interface ClarificationFormsProps {
  answer: AnswerData;
}

export interface Clarification {
  question: string;
  answer: string;
}

export function ClarificationForms({ answer }: ClarificationFormsProps) {
  const [list, setList] = useState<Clarification[]>(answer.clarifications);

  // TODO: Delete clarification
  // async function handleDelete() {
  //   if (!answerId || !personSlug) {
  //     return;
  //   }
  // }

  // Success
  function handleSuccess(clarifications: Clarification[]) {
    setList(clarifications);
  }

  return (
    <>
      {list.length > 0 && (
        <div className="mt-10 space-y-16 rounded-xl border border-stone-200 p-10">
          {list.map((clarification, index) => (
            <div key={index}>
              <SubmitClarificationForm
                clarification={clarification}
                answerId={answer.id}
                personSlug={answer.person.slug}
                onSuccess={handleSuccess}
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10">
        <NewClarification
          answerId={answer?.id || ""}
          personSlug={answer?.person.slug || ""}
          onSuccess={handleSuccess}
        />
      </div>
    </>
  );
}

// New
interface NewClarificationProps {
  answerId: string;
  personSlug: string;
  onSuccess: (clarifications: Clarification[]) => void;
}

export function NewClarification({
  answerId,
  personSlug,
  onSuccess,
}: NewClarificationProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return <Button onClick={() => setIsOpen(true)}>Add Clarification</Button>;
  }

  return (
    <div>
      <SubmitClarificationForm
        answerId={answerId}
        personSlug={personSlug}
        clarification={{ question: "", answer: "" }}
        onClose={() => setIsOpen(false)}
        onSuccess={onSuccess}
      />
    </div>
  );
}
