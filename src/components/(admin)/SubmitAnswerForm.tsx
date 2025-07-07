"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui";
import { EDITING_PERSON_SLUG } from "~/utils/data";

import { AnswerData, QuestionData } from "~/schemas";
import { submitAnswer } from "~/_lib/admin";

interface SubmitAnswerFormProps {
  questionData: QuestionData;
  answerData?: AnswerData;
}

const SubmitAnswerFormSchema = z.object({
  answer: z.string(),
});

type SubmitAnswerFormData = z.infer<typeof SubmitAnswerFormSchema>;

export function SubmitAnswerForm({
  questionData,
  answerData,
}: SubmitAnswerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SubmitAnswerFormData>({
    resolver: zodResolver(SubmitAnswerFormSchema),
    defaultValues: { answer: answerData?.answer || "" },
  });

  const [previewAnswer, setPreviewAnswer] = useState(answerData?.answer || "");

  async function onSubmit(formData: SubmitAnswerFormData) {
    const data = {
      answer: formData.answer,
      questionId: questionData.id,
      personSlug: EDITING_PERSON_SLUG,
    };

    const answer = await submitAnswer(data);

    if (answer) {
      setPreviewAnswer(answer.answer);
      console.log("✅", answer);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-6">
        <label className="inline-block max-w-[660px] text-3xl font-semibold leading-[1.1]">
          {`${questionData.order}. ${questionData.body}`}
        </label>

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
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
