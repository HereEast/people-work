import { ReactNode } from "react";

import { RatRightPixelIcon } from "./icons";
import { cn } from "~/utils/handlers";

export function Logo() {
  return (
    <div className="group flex items-center gap-0.5 text-2xl font-bold text-stone-50">
      {/* <LogoBlock label="people" /> */}
      {/* <LogoBlock label="-" classes="px-1.5" /> */}
      <LogoBlock label="people—work.co">
        <RatRightPixelIcon className="w-16 text-stone-50" />
      </LogoBlock>
    </div>
  );
}

// Logo Block
interface LogoBlockProps {
  children?: ReactNode;
  label?: string;
  classes?: string;
}

export function LogoBlock({ label, children, classes = "" }: LogoBlockProps) {
  return (
    <div
      className={cn(
        "flex h-8 gap-1 overflow-hidden rounded-full bg-stone-950 px-2.5 transition group-hover:shadow-lg group-hover:shadow-blue-600",
        classes && classes,
      )}
    >
      {label && <span className="relative top-[-1.5px]">{label}</span>}
      {children && <div className="flex items-center">{children}</div>}
    </div>
  );
}
