"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { QuestionData } from "~/schemas";
import { Button } from "../ui";
import { submitAnswer } from "~/_lib/admin";
import { useState } from "react";

interface SubmitAnswerFormProps {
  question: QuestionData;
  answer?: string;
}

const SubmitAnswerFormSchema = z.object({
  answer: z.string(),
});

type SubmitAnswerFormData = z.infer<typeof SubmitAnswerFormSchema>;

export const PERSON_SLUG = "bartek-hlawka";

export function SubmitAnswerForm({ question, answer }: SubmitAnswerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SubmitAnswerFormData>({
    resolver: zodResolver(SubmitAnswerFormSchema),
    defaultValues: { answer: answer || "" },
  });

  const [previewAnswer, setPreviewAnswer] = useState(answer);

  async function onSubmit(formData: SubmitAnswerFormData) {
    const data = {
      answer: formData.answer,
      questionId: question.id,
      personSlug: PERSON_SLUG,
    };

    const answer = await submitAnswer(data);

    if (answer) {
      setPreviewAnswer(answer.answer);
      console.log("✅", answer);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div>
        <span className="font-semibold">
          {`${question.order}. ${question.body}`}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {/* Input */}
        <textarea
          className="w-full rounded-md border border-stone-200 p-6"
          rows={8}
          {...register("answer")}
        />

        {/* Answer */}
        <textarea
          disabled
          className="w-full rounded-md border border-stone-200 p-6"
          rows={8}
          value={previewAnswer || "No answer."}
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
