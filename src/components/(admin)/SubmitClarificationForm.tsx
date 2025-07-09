"use client";

import { ReactNode } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui";
import { Clarification } from "./Clarifications";
import { submitClarification } from "~/_lib/admin";
import { cn } from "~/utils/handlers";

const FormSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

type FormData = z.infer<typeof FormSchema>;

interface FormProps {
  children: ReactNode;
  answerId: string;
  personSlug: string;
  clarification: Clarification;
  updateListOnAdd: (clarification: Clarification) => void;
}

export function SubmitClarificationForm({ children, ...props }: FormProps) {
  const { clarification, answerId, personSlug, updateListOnAdd } = props;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, dirtyFields },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answer: clarification.answer || "",
      question: clarification.question || "",
    },
  });

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
      updateListOnAdd({
        question: formData.question,
        answer: formData.answer,
      });
      reset({ answer: formData.answer, question: formData.question });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-1">
        <textarea
          className={cn(
            "w-full rounded-md border border-stone-200 px-6 py-4 text-2xl font-semibold leading-[1.1] outline-none",
            dirtyFields.question && "border-red-600",
          )}
          {...register("question")}
          rows={1}
        />

        <div className="grid grid-cols-2 gap-10 text-lg">
          <textarea
            className={cn(
              "w-full rounded-md border border-stone-200 p-6 outline-none",
              dirtyFields.answer && "border-red-600",
            )}
            rows={8}
            {...register("answer")}
          />

          <textarea
            className="w-full rounded-md border border-stone-200 p-6"
            rows={8}
            value={clarification.answer || "No answer."}
            disabled
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting}>
          Submit Clarification
        </Button>

        {children}
      </div>
    </form>
  );
}
