import { IAnswer } from "~/models/Answer";

import { parseMarkdown } from "~/utils/parseMarkdown";

interface AnswersProps {
  children: IAnswer;
}

export async function Answer({ children }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children.answer);

  return (
    <div
      className="answer text-2xl font-medium leading-[115%]"
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
