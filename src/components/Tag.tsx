import { ReactNode } from "react";

import { cn, getQuestionEmoji } from "~/utils/handlers";
import { Button, buttonVariants } from "./ui/Button";

interface TagProps {
  children: ReactNode;
  href?: string;
  size?: "icon" | "tag";
}

export function Tag({ children, size = "tag", href }: TagProps) {
  return href ? (
    <Button
      href={href}
      variant="outline"
      size={size}
      className="pb-0.5 text-sm tracking-[0.02ch] sm:text-xl"
    >
      {children}
    </Button>
  ) : (
    <div className={cn(buttonVariants({ size, variant: "tag" }))}>
      {children}
    </div>
  );
}

// Question Tag
interface QuestionTagProps {
  slug: string;
  href?: string;
}

export function QuestionTag({ href, slug }: QuestionTagProps) {
  const emoji = getQuestionEmoji(slug);

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      <Tag href={href ? `/questions/${slug}` : ""} size="icon">
        <span className={cn("inline-block sm:text-2xl", emoji.className)}>
          {emoji.value}
        </span>
      </Tag>

      <Tag href={href ? `/questions/${slug}` : ""}>#{slug}</Tag>
    </div>
  );
}
