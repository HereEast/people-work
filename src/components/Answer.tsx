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
        "answer font-medium leading-[115%] opacity-90 sm:font-normal md:text-3xl md:leading-[115%]",
        marked &&
          "featured-answer text-3xl font-medium leading-[100%] tracking-[-0.04ch] md:text-5xl md:font-medium md:leading-[100%]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
