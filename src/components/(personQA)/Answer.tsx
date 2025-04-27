import { IAnswer } from "~/models/Answer";

import { parseMarkdown } from "~/utils/parseMarkdown";

interface AnswersProps {
  children: IAnswer;
}

export async function Answer({ children }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children.answer);

  return (
    <div
      className="answer text-2xl leading-[120%] md:text-3xl"
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
