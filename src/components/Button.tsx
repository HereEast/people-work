import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import { cva } from "class-variance-authority";

import { cn } from "~/utils/handlers";

export const buttonVariants = cva(
  "inline-flex h-[44px] w-fit items-center justify-center whitespace-nowrap rounded-xs px-3 pb-px transition disabled:pointer-events-none disabled:opacity-50 sm:h-14 sm:rounded-sm sm:px-5",
  {
    variants: {
      variant: {
        base: "bg-stone-600/10 hover:bg-stone-600/25",
        accent: "font-accent",
        outline:
          "border border-stone-900/15 bg-transparent hover:border-stone-900/25",
        tag: "border border-stone-900/15 bg-transparent text-sm tracking-[0.02ch] hover:border-stone-900/25 sm:text-xl",
        link: "inline-block h-fit bg-transparent px-0 hover:bg-transparent hover:opacity-30 sm:h-fit sm:px-0",
      },
      size: {
        icon: "size-[44px] shrink-0 rounded-xs p-0 text-xl sm:size-14 sm:rounded-sm sm:px-0 sm:text-2xl",
      },
    },
  },
);

type ButtonProps = {
  children?: ReactNode;
  href?: string | URL;
  target?: "_blank" | "_self";
  isDisabled?: boolean;
  variant?: "base" | "accent" | "outline" | "link" | "tag";
  size?: "icon";
  underline?: boolean;
  rel?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
  href,
  children,
  isDisabled,
  onClick = () => {},
  variant = "base",
  size,
  underline = false,
  className = "",
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants({ variant, size }),
    underline &&
      "underline decoration-2 underline-offset-[3px] decoration-stone-900 hover:decoration-stone-900/0",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={isDisabled}
      onClick={(e: MouseEvent<HTMLButtonElement>) => onClick?.(e)}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
