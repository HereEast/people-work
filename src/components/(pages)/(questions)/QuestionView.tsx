import { ReactNode } from "react";

import { Column } from "~/components/Column";
import { NavLinks } from "./NavLinks";

interface QuestionViewProps {
  children: ReactNode;
}

export function QuestionView({ children }: QuestionViewProps) {
  return (
    <Column variant="left">
      <div className="hidden flex-col gap-8 pb-10 md:flex">
        <div className="mb-10">
          <h1 className="text-5xl font-medium">{children}</h1>
        </div>
      </div>

      <NavLinks />
    </Column>
  );
}
