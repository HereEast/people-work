import { AnswerData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";

interface AnswersProps {
  children: AnswerData;
}

export async function Answer({ children }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children.answer);

  return (
    <div
      className={`answer text-[22px] leading-[120%] md:text-3xl`}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
