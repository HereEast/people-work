import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface PageContainerProps {
  children: ReactNode;
  classes?: string;
}

export function PageContainer({ children, classes = "" }: PageContainerProps) {
  return (
    <div className={cn("max-w-7xl px-4 pb-20 pt-10", classes)}>{children}</div>
  );
}
