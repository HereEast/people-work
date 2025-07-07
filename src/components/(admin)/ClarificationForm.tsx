"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui";
import { submitClarification } from "~/_lib/admin";

const ClarificationFormSchema = z.object({
  clarificationQuestion: z.string(),
  clarificationAnswer: z.string(),
});

type ClarificationFormData = z.infer<typeof ClarificationFormSchema>;

interface ClarificationFormProps {
  answerId: string;
  personSlug: string;
  clarification: {
    question: string;
    answer: string;
  };
}

// Form
export function ClarificationForm({
  clarification,
  answerId,
  personSlug,
}: ClarificationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ClarificationFormData>({
    resolver: zodResolver(ClarificationFormSchema),
    defaultValues: {
      clarificationAnswer: clarification.answer || "",
      clarificationQuestion: clarification.question || "",
    },
  });

  const [previewAnswer, setPreviewAnswer] = useState(
    clarification.answer || "",
  );

  async function onSubmit(formData: ClarificationFormData) {
    const data = {
      clarificationAnswer: formData.clarificationAnswer,
      clarificationQuestion: formData.clarificationQuestion,
      answerId,
      personSlug,
    };

    const answer = await submitClarification(data);

    if (answer) {
      setPreviewAnswer(formData.clarificationAnswer);
      console.log("✅", answer);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-1">
        <textarea
          className="w-full rounded-md border border-stone-200 px-6 py-4 text-2xl font-semibold leading-[1.1]"
          {...register("clarificationQuestion")}
          rows={1}
        />

        <div className="grid grid-cols-2 gap-10">
          {/* Input */}
          <textarea
            className="w-full rounded-md border border-stone-200 p-6"
            rows={8}
            {...register("clarificationAnswer")}
          />

          {/* Answer */}
          <textarea
            disabled
            className="w-full rounded-md border border-stone-200 p-6"
            rows={8}
            value={previewAnswer || "No answer."}
          />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Submit Clarification
      </Button>
    </form>
  );
}
