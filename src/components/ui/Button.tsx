import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: string | ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const noop = (): void => {
  return;
};

export function Button({
  children,
  onClick = noop,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group/button relative flex h-14 w-full items-center justify-center rounded-full bg-white text-lg font-bold transition",
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
