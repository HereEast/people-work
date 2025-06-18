import { ReactNode } from "react";

interface StickyColumnProps {
  children: ReactNode;
}

export function StickyColumn({ children }: StickyColumnProps) {
  return (
    <aside className="relative">
      <div className="top-16 hidden flex-col pt-4 lg:sticky lg:flex lg:h-[calc(100vh-90px)]">
        {children}
      </div>
    </aside>
  );
}
