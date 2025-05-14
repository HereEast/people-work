import { Column } from "~/components/Column";
import { Tag } from "~/components/Tag";
import { NavLinks } from "./NavLinks";

import { QuestionData } from "~/schemas";

interface QuestionViewProps {
  question: QuestionData;
}

export function QuestionView({ question }: QuestionViewProps) {
  return (
    <Column variant="left" className="pr-10">
      <div className="flex h-full flex-col justify-between">
        <div className="mb-10 space-y-6">
          <h1 className="text-5xl font-medium">{question.body}</h1>
          <Tag>{question.slug}</Tag>
        </div>

        <NavLinks />
      </div>
    </Column>
  );
}
