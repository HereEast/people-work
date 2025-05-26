import { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
  variant?: "sticky";
}

export function Column({ children, variant }: ColumnProps) {
  return variant === "sticky" ? (
    <div className="relative">
      <div className="top-16 hidden flex-col pt-4 lg:sticky lg:flex lg:h-[calc(100vh-105px)]">
        {children}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-2.5 pt-4">{children}</div>
  );
}
