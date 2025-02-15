"use client";

import Link from "next/link";

import { IQuestion } from "~/models/Question";
import { BASE_URL } from "~/utils/constants";

// Questions Nav
interface QuestionsNavProps {
  currentIndex: number;
  questions: IQuestion[];
}

export function QuestionsNav({ questions, currentIndex }: QuestionsNavProps) {
  const lastIndex = questions.length - 1;

  const prevQuestion =
    currentIndex === 0 ? questions[lastIndex] : questions[currentIndex - 1];
  const nextQuestion =
    currentIndex === lastIndex ? questions[0] : questions[currentIndex + 1];

  return (
    <div className="flex justify-between">
      <Link
        href={`${BASE_URL}/questions/${prevQuestion.slug}`}
        className="underline hover:no-underline hover:opacity-50"
      >
        Prev
      </Link>
      <Link
        href={`${BASE_URL}/questions/${nextQuestion.slug}`}
        className="underline hover:no-underline hover:opacity-50"
      >
        Next
      </Link>
    </div>
  );
}
