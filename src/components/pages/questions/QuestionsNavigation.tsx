"use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";

import { IQuestion } from "~/models/Question";
import { BASE_URL } from "~/utils/constants";
import { cn } from "~/utils/handlers";

interface QuestionsNavProps {
  currentIndex: number;
  questions: IQuestion[];
}

export function QuestionsNavigation({
  questions,
  currentIndex,
}: QuestionsNavProps) {
  // const router = useRouter();

  const lastIndex = questions.length - 1;

  const prevQuestion =
    currentIndex === 0 ? questions[lastIndex] : questions[currentIndex - 1];
  const nextQuestion =
    currentIndex === lastIndex ? questions[0] : questions[currentIndex + 1];

  // function handleClick(path: string) {
  //   router.push(`${path}`, { scroll: false });
  // }

  return (
    <div className="grid grid-cols-2 justify-between gap-6">
      <NavLink
        url={`${BASE_URL}/questions/${prevQuestion.slug}`}
        question={prevQuestion.body}
        direction="prev"
      />

      <NavLink
        url={`${BASE_URL}/questions/${nextQuestion.slug}`}
        question={nextQuestion.body}
        direction="next"
      />

      {/* <NavButton
        onClick={() => handleClick(`/questions/${prevQuestion.slug}`)}
        question={prevQuestion.body}
        direction="prev"
      />

      <NavButton
        onClick={() => handleClick(`/questions/${nextQuestion.slug}`)}
        question={nextQuestion.body}
        direction="next"
      /> */}
    </div>
  );
}

// Nav Link
// interface NavButtonProps {
//   onClick: () => void;
//   direction: "prev" | "next";
//   question: string;
// }

// function NavButton({ onClick, direction, question }: NavButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="group/questions-nav rounded-xl border p-6"
//     >
//       <span
//         className={cn(
//           "flex flex-col gap-1",
//           direction === "prev" ? "text-left" : "text-right",
//         )}
//       >
//         <span className="text-xs uppercase text-stone-400">
//           {direction === "prev" ? "Prev" : "Next"}
//         </span>
//         <span className="text-base leading-tight underline group-hover/questions-nav:no-underline group-hover/questions-nav:opacity-50">
//           {question}
//         </span>
//       </span>
//     </button>
//   );
// }

interface NavLinkProps {
  url: string;
  direction: "prev" | "next";
  question: string;
}

function NavLink({ url, direction, question }: NavLinkProps) {
  return (
    <Link
      href={url}
      className="group/questions-nav rounded-xl border p-6"
      scroll={false}
    >
      <span
        className={cn(
          "flex flex-col gap-1",
          direction === "next" && "text-right",
        )}
      >
        <span className="text-xs uppercase text-stone-400">
          {direction === "prev" ? "Prev" : "Next"}
        </span>
        <span className="text-base leading-tight underline group-hover/questions-nav:no-underline group-hover/questions-nav:opacity-50">
          {question}
        </span>
      </span>
    </Link>
  );
}
