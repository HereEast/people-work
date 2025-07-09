"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui";
import { Clarification } from "./Clarifications";
import { submitClarification } from "~/_lib/admin";

const FormSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

type FormData = z.infer<typeof FormSchema>;

interface FormProps {
  answerId: string;
  personSlug: string;
  clarification: Clarification;
  onClose?: () => void;
  onDelete?: () => void;
  onSuccess: (clarifications: Clarification[]) => void;
}

// Form
export function SubmitClarificationForm(props: FormProps) {
  const { clarification, answerId, personSlug, onClose, onDelete, onSuccess } =
    props;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answer: clarification.answer || "",
      question: clarification.question || "",
    },
  });

  const [prevAnswer, setPrevAnswer] = useState(clarification.answer || "");

  // Submit
  async function onSubmit(formData: FormData) {
    if (!answerId || !personSlug || !formData.question || !formData.answer) {
      return;
    }

    const answer = await submitClarification({
      answer: formData.answer,
      question: formData.question,
      answerId,
      personSlug,
    });

    if (answer) {
      setPrevAnswer(formData.answer);
      onSuccess(answer.clarifications);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-1">
        <textarea
          className="w-full rounded-md border border-stone-200 px-6 py-4 text-2xl font-semibold leading-[1.1]"
          {...register("question")}
          rows={1}
        />

        <div className="grid grid-cols-2 gap-10">
          <textarea
            className="w-full rounded-md border border-stone-200 p-6"
            rows={8}
            {...register("answer")}
          />

          <textarea
            className="w-full rounded-md border border-stone-200 p-6"
            rows={8}
            value={prevAnswer || "No answer."}
            disabled
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting}>
          Submit Clarification
        </Button>

        {onClose && <Button onClick={onClose}>Close</Button>}
        {onDelete && <Button onClick={onDelete}>Delete</Button>}
      </div>
    </form>
  );
}
