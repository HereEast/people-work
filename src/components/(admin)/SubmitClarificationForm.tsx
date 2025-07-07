"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui";
import { submitClarification } from "~/_lib/admin";

const FormSchema = z.object({
  clarificationQuestion: z.string().min(1),
  clarificationAnswer: z.string().min(1),
});

type FormData = z.infer<typeof FormSchema>;

interface FormProps {
  answerId: string;
  personSlug: string;
  clarification: {
    question: string;
    answer: string;
  };
  onClose?: () => void;
}

// Form
export function SubmitClarificationForm({
  clarification,
  answerId,
  personSlug,
  onClose,
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      clarificationAnswer: clarification.answer || "",
      clarificationQuestion: clarification.question || "",
    },
  });

  const [previewAnswer, setPreviewAnswer] = useState(
    clarification.answer || "",
  );

  async function onSubmit(formData: FormData) {
    if (
      !answerId ||
      !personSlug ||
      !formData.clarificationQuestion ||
      !formData.clarificationAnswer
    ) {
      return;
    }

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

  // TODO: Delete clarification
  async function handleDelete() {
    if (!answerId || !personSlug) {
      return;
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

      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting}>
          Submit Clarification
        </Button>

        {onClose && <Button onClick={onClose}>Close</Button>}

        {clarification.answer && <Button onClick={handleDelete}>Delete</Button>}
      </div>
    </form>
  );
}
