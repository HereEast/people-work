import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface PageContainerProps {
  children: ReactNode;
  classes?: string;
}

export function PageContainer({ children, classes = "" }: PageContainerProps) {
  return <section className={cn("px-4 py-10", classes)}>{children}</section>;
}
