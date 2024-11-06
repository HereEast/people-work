"use client";

import { FormEvent, useState } from "react";

import { AnswerField, QuestionsList } from "~/components";
import { PageContainer } from "~/components/layouts";

import { useQuestions } from "~/hooks";
import { submitAnswers } from "~/api-client/answers";

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

      <QuestionsList />
    </PageContainer>
  );
}
