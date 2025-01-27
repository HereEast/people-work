import { PersonImage } from "./PersonImage";
import { Job, Name } from "./PersonCard";
import { Label } from "./Label";

import { IPerson } from "~/utils/types";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <div className="relative rounded-4xl bg-stone-950 md:rounded-6xl">
      {/* Label */}
      <div className="absolute right-14 top-[-15px] z-20 md:top-[264px]">
        <Label>👋 Hey!</Label>
      </div>

      <div className="flex w-full items-center gap-5 p-5 pb-8 md:flex-col">
        <div className="size-[68px] shrink-0 overflow-hidden rounded-4xl md:size-full">
          <PersonImage person={person} />
        </div>

        <div className="space-y-4 overflow-hidden text-stone-50">
          <Name className="text-left md:text-center">{person?.name}</Name>
          <div className="hidden md:block">
            <Job company={person.company} title={person.jobTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
