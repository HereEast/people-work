import { forwardRef } from "react";
// import { FieldError } from "react-hook-form";

import { cn } from "~/utils/handlers";

interface InputProps {
  placeholder: string;
  // error?: FieldError;
  name: string;
  disabled?: boolean;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={cn(
            "h-16 w-full rounded-md border border-stone-400 bg-transparent px-5 pb-px text-xl outline-none placeholder:text-xl placeholder:text-stone-600/30 focus:border-stone-900 sm:h-20 sm:rounded-lg sm:text-3xl sm:placeholder:text-3xl",
            className,
          )}
          // placeholder={placeholder}
          // disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ placeholder, error, className = "", disabled = false, ...props }, ref) => {
//     return (
//       <div className="relative w-full">
//         <input
//           className={cn(
//             "h-16 w-full rounded-md border border-stone-400 bg-transparent px-5 pb-px text-xl outline-none placeholder:text-xl placeholder:text-stone-600/30 focus:border-stone-900 sm:h-20 sm:rounded-lg sm:text-3xl sm:placeholder:text-3xl",
//             className,
//           )}
//           placeholder={placeholder}
//           disabled={disabled}
//           ref={ref}
//           {...props}
//         />
//       </div>
//     );
//   },
// );

Input.displayName = "Input";
