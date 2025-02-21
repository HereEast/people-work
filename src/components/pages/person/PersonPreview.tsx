import { PersonImage } from "~/components/PersonImage";
import { Name, Job } from "~/components/PersonCard";

import { IPerson } from "~/models/Person";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <>
      <MobilePersonPreview person={person} />
      <DesktopPersonPreview person={person} />
    </>
  );
}

// Mobile
export function MobilePersonPreview({ person }: PersonCardProps) {
  return (
    <div className="sticky top-[56px] z-10 w-full overflow-hidden rounded-b-2xl bg-white lg:hidden">
      <div className="relative rounded-2xl bg-stone-950">
        <div className="flex gap-4 p-4">
          <div className="size-[72px] shrink-0 overflow-hidden rounded-xl">
            <PersonImage person={person} />
          </div>

          <div className="space-y-1 overflow-hidden text-stone-50">
            <h2 className="truncate text-2xl font-extrabold tracking-tighter">
              {person.name}
            </h2>

            <div className="truncate text-left text-lg leading-none tracking-tight">
              <h3 className="truncate">{person.company.name}</h3>
              <h3 className="truncate">{person.jobTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop
export function DesktopPersonPreview({ person }: PersonCardProps) {
  return (
    <div className="hidden grow flex-col lg:flex">
      <div className="sticky top-[56px] rounded-6xl bg-stone-950">
        <div className="flex w-full items-center gap-4 p-5 md:flex-col md:pb-8">
          <div className="size-[68px] shrink-0 overflow-hidden rounded-xl md:size-full md:rounded-4xl">
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
    </div>
  );
}
