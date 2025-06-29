import Link from "next/link";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

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
        tag: "border border-stone-900/20 bg-transparent text-sm tracking-[0.02ch] hover:border-stone-900/40 sm:text-xl",
        link: "inline-block h-fit bg-transparent px-0 hover:bg-transparent hover:opacity-30 sm:h-fit sm:px-0",
      },
      size: {
        default: "",
        icon: "size-[44px] shrink-0 rounded-xs p-0 text-xl sm:size-14 sm:rounded-sm sm:px-0 sm:text-2xl",
      },
    },
    defaultVariants: {
      variant: "base",
      size: "default",
    },
  },
);

type BaseButtonProps = VariantProps<typeof buttonVariants> & {
  children?: ReactNode;
  underline?: boolean;
  className?: string;
};

// Button
type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isDisabled?: boolean;
  };

export function Button({
  children,
  isDisabled,
  onClick,
  variant = "base",
  size = "default",
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

  const disabled = isDisabled || props.disabled;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

// ButtonLink
type ButtonLinkProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string | URL;
  };

export function ButtonLink({
  children,
  href,
  onClick,
  variant = "base",
  size = "default",
  underline = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    buttonVariants({ variant, size }),
    underline &&
      "underline decoration-2 underline-offset-[3px] decoration-stone-900 hover:decoration-stone-900/0",
    className,
  );

  return (
    <Link href={href} className={classes} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
