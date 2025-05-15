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
        "answer text-xl font-medium leading-[105%] md:text-3xl md:leading-[100%]",
        marked &&
          "featured-answer text-4xl font-bold leading-[90%] tracking-[-0.03ch] md:text-5xl md:leading-[88%]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
