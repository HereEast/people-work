import { ReactNode } from "react";

import { Button, buttonVariants } from "./Button";

import { cn } from "~/utils/handlers";
import { EMOJIS } from "~/utils/data/emojis";

interface TagProps {
  children: ReactNode;
  href?: string;
  size?: "icon" | "tag";
  className?: string;
}

export function Tag({
  children,
  size = "tag",
  href,
  className = "",
}: TagProps) {
  return href ? (
    <Button
      href={href}
      variant="outline"
      size={size}
      className={(cn("tracking-[0.02ch]"), className)}
    >
      {children}
    </Button>
  ) : (
    <div className={cn(buttonVariants({ size, variant: "tag" }), className)}>
      {children}
    </div>
  );
}

interface QuestionTagProps {
  slug: string;
  href?: string;
}

export function QuestionTag({ href, slug }: QuestionTagProps) {
  const emoji = EMOJIS[slug];

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      <Tag
        href={href ? `/questions/${slug}` : ""}
        size="icon"
        className="text-sm group-hover:border-transparent group-hover:bg-stone-600/25 sm:text-2xl"
      >
        <span className={cn("inline-block", emoji.className)}>
          {emoji.value}
        </span>
      </Tag>

      <Tag
        href={href ? `/questions/${slug}` : ""}
        className="text-sm group-hover:border-transparent group-hover:bg-stone-600/25 sm:text-xl"
      >
        #{slug}
      </Tag>
    </div>
  );
}
