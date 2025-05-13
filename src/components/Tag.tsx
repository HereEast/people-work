import Link from "next/link";

interface QuestionTagProps {
  questionSlug: string;
  from?: string;
}

export function QuestionTag({ questionSlug, from }: QuestionTagProps) {
  const href = from
    ? {
        pathname: `/questions/${questionSlug}`,
        query: { from },
      }
    : `/questions/${questionSlug}`;

  return (
    <Link
      href={href}
      className="flex h-8 w-fit max-w-full items-center rounded-full border border-stone-900 px-3 text-lg transition hover:border-stone-500 hover:bg-stone-500 md:h-10 md:px-4 md:text-xl"
    >
      <span className="block max-w-full truncate">#{questionSlug}</span>
    </Link>
  );
}
