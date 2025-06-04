import { ReactNode } from "react";
import Link from "next/link";

import { buttonVariants } from "./Button";

import { cn } from "~/utils/handlers";
import { EMOJIS } from "~/utils/data/emojis";

interface TagProps {
  children: ReactNode;
  href?: string;
  size?: "icon" | "base";
  className?: string;
}

export function Tag({
  children,
  size = "base",
  href,
  className = "",
}: TagProps) {
  const classes = cn(
    buttonVariants({ size, variant: "outline" }),
    "text-sm sm:text-xl tracking-[0.02ch]",
    !href && "hover:border-stone-900/20 hover:bg-transparent",
    size !== "icon" && "pb-0.5",
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <div className={classes}>{children}</div>
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
        size="icon"
        className={className}
      >
        <span className={cn("inline-block", emoji.className)}>
          {emoji.value}
        </span>
      </Tag>

      <Tag href={href ? `/questions/${slug}` : ""} className={className}>
        #{slug}
      </Tag>
    </div>
  );
}
