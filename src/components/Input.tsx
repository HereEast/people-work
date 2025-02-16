import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

import { cn } from "~/utils/handlers";

interface InputProps {
  placeholder: string;
  error?: FieldError;
  disabled?: boolean;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, error, className = "", disabled = false, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={cn(
            "h-12 w-full rounded-full border border-stone-600 bg-stone-950 px-4 text-base font-light text-stone-50 outline-none placeholder:text-base placeholder:font-light placeholder:text-stone-600 focus:border-stone-50",
            className,
          )}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
