import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: string | ReactNode;
  onClick?: () => void;
  isSubmitting?: boolean;
  className?: string;
  isAnimated?: boolean;
}

const noop = (): void => {
  return;
};

export function Button({
  children,
  onClick = noop,
  type = "button",
  isSubmitting = false,
  className = "",
  isAnimated = false,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group/button relative z-10 flex h-14 w-full items-center justify-center rounded-full bg-white text-lg font-bold",
        isAnimated && "animate-anime bg-gradient-base bg-[length:600%]",
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
}
