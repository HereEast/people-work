"use client";

import { useState } from "react";

import { Button } from "../ui";
import { SubmitClarificationForm } from "./SubmitClarificationForm";

interface NewClarificationProps {
  answerId: string;
  personSlug: string;
}

export function NewClarification({
  answerId,
  personSlug,
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
      />
    </div>
  );
}
