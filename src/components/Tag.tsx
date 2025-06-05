import { ReactNode } from "react";
import Link from "next/link";

import { buttonVariants } from "./Button";
import { EMOJIS } from "~/utils/data/emojis";
import { cn } from "~/utils/handlers";

interface TagProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Tag({ children, href, className = "" }: TagProps) {
  return href ? (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: "tag" }), className)}
    >
      {children}
    </Link>
  ) : (
    <div
      className={cn(
        buttonVariants({ variant: "tag" }),
        "hover:border-stone-900/15",
        className,
      )}
    >
      {children}
    </div>
  );
}

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
        className={cn(buttonVariants({ size: "icon" }), className)}
      >
        <span className={cn("text-[15px] sm:text-[22px]", emoji.className)}>
          {emoji.value}
        </span>
      </Tag>

      <Tag href={href ? `/questions/${slug}` : ""} className={className}>
        <span className="mb-px opacity-90">#{slug}</span>
      </Tag>
    </div>
  );
}
