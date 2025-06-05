import Link from "next/link";

import { QuestionData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";

interface AnswersProps {
  children: string;
  marked?: boolean;
}

export async function Answer({ children, marked }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children);

  return (
    <div
      className={cn(
        "answer text-xl leading-[120%] tracking-[0.025ch] opacity-95 sm:text-3xl sm:leading-[120%] [&_a]:transition",
        marked &&
          "featured-answer text-3xl font-semibold leading-[95%] tracking-[-0.02ch] sm:text-5xl sm:font-semibold sm:leading-[95%] sm:tracking-[-0.025ch] md:font-semibold [&_a]:transition",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}

// Borders
// export async function Answer({ children, marked }: AnswersProps) {
//   const parsedHTML = await parseMarkdown(children);

//   return (
//     <div
//       className={cn(
//         "answer text-xl leading-[115%] tracking-[0.015ch] opacity-95 sm:text-3xl sm:leading-[120%] [&_a]:transition",
//         marked &&
//           "featured-answer text-[34px] font-semibold leading-[95%] tracking-[-0.02ch] sm:text-5xl sm:font-semibold sm:leading-[95%] sm:tracking-[-0.025ch] md:font-semibold [&_a]:transition",
//       )}
//       dangerouslySetInnerHTML={{
//         __html: parsedHTML,
//       }}
//     />
//   );
// }

// Question
interface QuestionProps {
  children: QuestionData;
}

export function Question({ children }: QuestionProps) {
  return (
    <div>
      <Link
        href={`/questions/${children.slug}`}
        className="question inline-block text-xl font-semibold leading-[110%] transition sm:text-3xl sm:leading-[120%]"
      >
        {children.body}
      </Link>
    </div>
  );
}
