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
      className={(cn("pb-0.5 text-sm tracking-[0.02ch] sm:text-xl"), className)}
    >
      {children}
    </Button>
  ) : (
    <div className={cn(buttonVariants({ size, variant: "tag" }), className)}>
      {children}
    </div>
  );
}

// Question Tag
interface QuestionTagProps {
  slug: string;
  href?: string;
  className?: string;
}

export function QuestionTag({ href, slug, className = "" }: QuestionTagProps) {
  const emoji = EMOJIS[slug];

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      <Tag
        href={href ? `/questions/${slug}` : ""}
        size="icon"
        className={className}
      >
        <span className={cn("inline-block sm:text-2xl", emoji.className)}>
          {emoji.value}
        </span>
      </Tag>

      <Tag href={href ? `/questions/${slug}` : ""} className={className}>
        #{slug}
      </Tag>
    </div>
  );
}
