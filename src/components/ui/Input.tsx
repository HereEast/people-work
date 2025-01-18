import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

import { cn } from "~/utils/handlers";

interface InputProps {
  placeholder: string;
  error?: FieldError;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, error, className = "", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={cn(
            "h-14 w-full rounded-full border border-stone-600 bg-stone-950 px-5 text-base font-light text-stone-50 outline-none placeholder:font-light placeholder:text-stone-600 focus:border-stone-50",
            className,
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
