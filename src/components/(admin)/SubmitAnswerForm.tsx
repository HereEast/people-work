"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui";

import { AnswerData, QuestionData } from "~/schemas";
import { submitAnswer } from "~/_lib/admin";
import { EDITING_PERSON_SLUG } from "~/utils/data";
import { cn } from "~/utils/handlers";

const SubmitAnswerFormSchema = z.object({
  answer: z.string(),
});

type SubmitAnswerFormData = z.infer<typeof SubmitAnswerFormSchema>;

interface SubmitAnswerFormProps {
  questionData: QuestionData;
  answerData?: AnswerData;
}

export function SubmitAnswerForm({
  questionData,
  answerData,
}: SubmitAnswerFormProps) {
  const [prevAnswer, setPrevAnswer] = useState(answerData?.answer || "");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty },
    reset,
  } = useForm<SubmitAnswerFormData>({
    resolver: zodResolver(SubmitAnswerFormSchema),
    defaultValues: { answer: prevAnswer },
  });

  async function onSubmit(formData: SubmitAnswerFormData) {
    const answer = await submitAnswer({
      answer: formData.answer,
      questionId: questionData.id,
      personSlug: EDITING_PERSON_SLUG,
    });

    if (answer) {
      setPrevAnswer(answer.answer);
      reset({ answer: formData.answer });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-6">
        <label className="inline-block max-w-[660px] text-3xl font-semibold leading-[1.1]">
          {`${questionData.order}. ${questionData.body}`}
        </label>

        <div className="grid grid-cols-2 gap-10 text-lg">
          {/* Input */}
          <textarea
            className={cn(
              "w-full rounded-md border border-stone-200 p-6 outline-none",
              isDirty && "border-red-600",
            )}
            rows={8}
            {...register("answer")}
          />

          {/* Answer */}
          <textarea
            disabled
            className="w-full rounded-md border border-stone-200 p-6"
            rows={8}
            value={prevAnswer || "No answer."}
          />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
