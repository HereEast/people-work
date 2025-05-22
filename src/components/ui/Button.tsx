import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

import { cn } from "~/utils/handlers";

export const buttonClasses = {
  view: {
    base: "transition hover:bg-stone-500 bg-stone-600/10",
    accent: "font-accent",
    outline: "border border-stone-900/20 bg-transparent",
    link: "h-fit p-0 sm:p-0 bg-transparent hover:bg-transparent hover:opacity-40",
  },
  size: {
    base: "w-fit h-10 sm:h-12 rounded-xs sm:rounded-sm px-3 sm:px-6 flex justify-center items-center",
    tile: "size-10 sm:size-12 shrink-0 p-0 text-sm",
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
    buttonClasses.view.base,
    buttonClasses.size.base,
    view && buttonClasses.view[view],
    size && buttonClasses.size[size],
    underline &&
      "underline decoration-2 underline-offset-[3px] hover:no-underline",
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
