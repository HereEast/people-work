"use client";

import { useState } from "react";
import { Button } from "../ui";
import { SubmitClarificationForm } from "./SubmitClarificationForm";
import { AnswerData } from "~/schemas";
import { deleteClarification } from "~/_lib/admin";

interface ClarificationFormsProps {
  answer: AnswerData;
}

export interface Clarification {
  question: string;
  answer: string;
}

export function Clarifications({ answer }: ClarificationFormsProps) {
  const [clarifications, setClarifications] = useState<Clarification[]>(
    answer.clarifications,
  );
  const [isOpen, setIsOpen] = useState(false);

  // Add
  function updateListOnAdd(clarification: Clarification) {
    setClarifications((prev) => [...prev, clarification]);
    setIsOpen(false);
  }

  // Delete
  async function handleDelete(clarification: Clarification) {
    const result = await deleteClarification({
      answerId: answer.id,
      personSlug: answer.person.slug,
      question: clarification.question,
    });

    if (result) {
      setClarifications((prev) =>
        prev.filter((c) => c.question !== clarification.question),
      );
    }
  }

  return (
    <>
      {clarifications.length > 0 && (
        <div className="mt-10 space-y-16 rounded-xl border border-stone-200 p-10">
          {clarifications.map((clarification, index) => (
            <SubmitClarificationForm
              key={`${clarification.question}-${index}`}
              clarification={clarification}
              answerId={answer.id}
              personSlug={answer.person.slug}
              updateListOnAdd={updateListOnAdd}
            >
              <Button onClick={() => handleDelete(clarification)}>
                Delete
              </Button>
            </SubmitClarificationForm>
          ))}
        </div>
      )}

      <div className="mt-10">
        {isOpen ? (
          <SubmitClarificationForm
            answerId={answer.id}
            personSlug={answer.person.slug}
            clarification={{ question: "", answer: "" }}
            updateListOnAdd={updateListOnAdd}
          >
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </SubmitClarificationForm>
        ) : (
          <Button onClick={() => setIsOpen(true)}>Add Clarification</Button>
        )}
      </div>
    </>
  );
}
