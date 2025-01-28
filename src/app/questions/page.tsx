"use client";

import { FormEvent, useState } from "react";

import { PageContainer } from "~/components/layouts/PageContainer";

import { IFormDataProps, submitAnswers } from "~/api-client/answers";
import { useQuestions } from "~/hooks";

export default function QuestionsPage() {
  const { data: questions, isLoading } = useQuestions();

  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const isEmptyValue = Array.from(formData.values()).some(
      (value) => String(value).trim().length === 0,
    );

    if (isEmptyValue) {
      setError("All inputs are required.");
      return;
    }

    const answersData: IFormDataProps[] = Array.from(formData.entries()).map(
      ([questionId, answer], index) => {
        return {
          questionId,
          question: questions?.[index].body || "",
          answer: answer as string,
        };
      },
    );

    console.log(answersData);

    const result = await submitAnswers(answersData);
    console.log(result); // Console
  }

  return (
    <PageContainer className="bg-stone-200 px-20">
      {isLoading && <div>Loading...</div>}

      {error && (
        <div className="mb-6 bg-red-600 px-4 py-3 text-base text-stone-50">
          {error}
        </div>
      )}

      {questions && questions.length > 0 && (
        <form onSubmit={handleSubmit} className="mb-20 space-y-10">
          {questions.map((question, index) => (
            <div className="flex w-full flex-col gap-2" key={index}>
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
          ))}

          <button type="submit" className="w-40 bg-black p-4 text-stone-50">
            Submit
          </button>
        </form>
      )}
    </PageContainer>
  );
}
