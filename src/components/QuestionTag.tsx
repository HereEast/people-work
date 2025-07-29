import { Tag } from "./Tag";

import { EMOJIS } from "~/utils/emojis";

interface QuestionTagProps {
  slug: string;
  href?: string;
}

export function QuestionTag({ href, slug }: QuestionTagProps) {
  const emoji = EMOJIS[slug];
  const tagHref = href ? `/questions/${slug}` : "";

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      {emoji && (
        <Tag href={tagHref} size="icon" className="group-hover:opacity-45">
          <span className="text-[14px] sm:text-[22px]">{emoji.value}</span>
        </Tag>
      )}

      <Tag href={tagHref} className="group-hover:opacity-45">
        <span className="mb-px">#{slug}</span>
      </Tag>
    </div>
  );
}
