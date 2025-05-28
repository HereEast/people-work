import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

import { cn } from "~/utils/handlers";

export const buttonClasses = {
  view: {
    base: "transition flex justify-center items-center gap-2 hover:bg-stone-500/60 bg-stone-600/10 tracking-[0.02ch]",
    accent: "font-accent",
    outline:
      "border flex justify-center items-center border-stone-900/20 bg-transparent hover:bg-stone-600/10 hover:border-transparent",
    link: "h-fit inline-block p-0 sm:p-0 bg-transparent hover:bg-transparent hover:opacity-30",
  },
  size: {
    base: "w-fit h-10 sm:h-[52px] rounded-xs sm:rounded-sm px-3 pb-px sm:px-5",
    tile: "size-10 sm:size-[52px] shrink-0 p-0 text-sm px-0 sm:px-0 sm:text-2xl",
  },
};

type ButtonProps = {
  children: ReactNode;
  href?: string | URL;
  target?: "_blank" | "_self";
  isDisabled?: boolean;
  view?: keyof typeof buttonClasses.view;
  size?: keyof typeof buttonClasses.size;
  underline?: boolean;
  rel?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
  className = "",
  href,
  children,
  isDisabled,
  onClick,
  view,
  size,
  underline = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    // buttonClasses.view.base,
    // buttonClasses.size.base,
    view && buttonClasses.view[view],
    size && buttonClasses.size[size],
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
