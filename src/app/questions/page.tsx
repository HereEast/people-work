"use client";

import { FormEvent, useState } from "react";

import { PageContainer } from "~/components/layouts/PageContainer";

import { submitAnswers } from "~/api-client/answers";
import { useQuestions } from "~/hooks";
import { IQuestion } from "~/utils/types";

export default function QuestionsPage() {
  const { data: questions, isLoading } = useQuestions();

  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const emptyValuesExist = Array.from(formData.values()).some(
      (value) => String(value).trim().length === 0,
    );

    if (emptyValuesExist) {
      setError("All inputs are required.");
      return;
    }

    const answersData = Array.from(formData.entries()).map(
      ([questionId, answer]) => {
        return {
          questionId,
          answer: answer as string,
        };
      },
    );

    const result = await submitAnswers(answersData);
    console.log(result); // Console
  }

  return (
    <PageContainer classes="bg-stone-200 px-20">
      {isLoading && <div>Loading...</div>}

      {error && (
        <div className="mb-6 bg-red-600 px-4 py-3 text-base text-stone-50">
          {error}
        </div>
      )}

      {questions && questions.length > 0 && (
        <form onSubmit={handleSubmit} className="mb-20 space-y-10">
          {questions.map((question, index) => (
            <AnswerField question={question} key={index} />
          ))}

          <button type="submit" className="w-40 bg-black p-4 text-stone-50">
            Submit
          </button>
        </form>
      )}
    </PageContainer>
  );
}

// Answer Field
interface AnswerFormProps {
  question: IQuestion;
}

export function AnswerField({ question }: AnswerFormProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={String(question._id)}
        className="font-medium tracking-tight"
      >
        {`${question.order}. ${question.body}`}
      </label>

      <textarea
        id={String(question._id)}
        name={String(question._id)}
        rows={6}
        className="border border-stone-700 px-5 py-4 text-base outline-none focus:border-stone-400"
      />
    </div>
  );
}
