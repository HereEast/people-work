import { Tag } from "./Tag";

import { EMOJIS } from "~/utils/constants";
import { cn } from "~/utils/handlers";

interface QuestionTagProps {
  slug: string;
  href?: string;
  className?: string;
}

export function QuestionTag({ href, slug, className = "" }: QuestionTagProps) {
  const emoji = EMOJIS[slug];
  const tagHref = href ? `/questions/${slug}` : "";

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      <Tag href={tagHref} size="icon" className={className}>
        <span className={cn("text-[15px] sm:text-[22px]", emoji.className)}>
          {emoji.value}
        </span>
      </Tag>

      <Tag href={tagHref} className={className}>
        <span className="mb-px opacity-90">#{slug}</span>
      </Tag>
    </div>
  );
}
