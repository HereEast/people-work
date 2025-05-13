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
        "answer text-xl leading-[114%] opacity-90 md:text-4xl md:leading-[115%]",
        marked &&
          "featured-answer text-4xl font-medium leading-[98%] tracking-[-0.04ch] md:text-5xl md:leading-[100%]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
