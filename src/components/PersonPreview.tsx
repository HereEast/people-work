import { PersonImage } from "./PersonImage";
import { Label } from "./Label";
import { Job, Name } from "./PersonCard";

import { IPerson } from "~/utils/types";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <div className="relative rounded-4xl bg-stone-950 md:rounded-6xl">
      <StickyLabel />

      <div className="flex w-full items-center gap-3 p-5 md:flex-col">
        <div className="size-[68px] shrink-0 overflow-hidden rounded-4xl md:size-full">
          <PersonImage person={person} />
        </div>

        <div className="space-y-3 overflow-hidden text-stone-50">
          <Name>{person?.name}</Name>
          <Job company={person.company} title={person.jobTitle} />
        </div>
      </div>
    </div>
  );
}

// Sticky Label
function StickyLabel() {
  return (
    <div className="absolute right-14 top-[-15px] z-20 md:right-10 md:top-8">
      <Label>👋 Hey!</Label>
    </div>
  );
}
