import { forwardRef, ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface ButtonProps {
  children: string | ReactNode;
  disabled?: boolean;
  className?: string;
  isAnimated?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      isAnimated = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          "group/button relative z-10 flex h-14 w-full items-center justify-center rounded-full bg-white text-lg font-bold",
          isAnimated && "animate-anime bg-gradient-base bg-[length:600%]",
          disabled && "opacity-50",
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
