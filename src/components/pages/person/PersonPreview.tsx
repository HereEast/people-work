import { ReactNode } from "react";

import { PersonImage } from "~/components/PersonImage";
import { Name, Job } from "~/components/PersonCard";

import { IPerson } from "~/models/Person";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <StickyContainer>
      <div className="relative rounded-4xl bg-stone-950 md:rounded-6xl">
        {/* Label */}
        <div className="absolute right-14 top-[-15px] z-50 md:top-[264px]">
          <Label>👋 Hey!</Label>
        </div>

        <div className="flex w-full items-center gap-5 p-5 md:flex-col md:pb-8">
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
    </StickyContainer>
  );
}

// Label
interface LabelProps {
  children: string;
}

function Label({ children }: LabelProps) {
  return (
    <div className="flex w-fit items-center justify-center rounded-full bg-brand-blue-600 py-0.5 pl-1.5 pr-2 text-base font-medium text-stone-50">
      {children}
    </div>
  );
}

// Sticky
function StickyContainer({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-[56px] rounded-b-4xl bg-white pt-[15px] md:static md:rounded-4xl md:pt-0">
      <div className="md:sticky md:top-[56px]">{children}</div>
    </div>
  );
}
