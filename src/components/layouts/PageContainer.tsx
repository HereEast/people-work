import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface PageContainerProps {
  children: ReactNode;
  classes?: string;
}

export function PageContainer({ children, classes = "" }: PageContainerProps) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-10", classes)}>
      {children}
    </section>
  );
}
