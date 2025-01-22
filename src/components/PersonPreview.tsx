import Image from "next/image";

import { ICompany, IPerson } from "~/utils/types";
import { Label } from "./Label";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <div className="relative rounded-4xl bg-stone-950 md:rounded-5xl">
      <StickyLabel />

      <div className="flex w-full items-center gap-3 p-4 md:flex-col">
        <div className="size-[68px] shrink-0 overflow-hidden rounded-3xl md:size-full">
          <Image
            src={`/images/people/${person?.profileImageURL}` || ""}
            alt={`Image of ${person?.name}` || ""}
            width={800}
            height={800}
            className="object-cover"
            priority
          />
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

// Name
interface NameProps {
  children: string;
}

function Name({ children }: NameProps) {
  return (
    <div className="w-full overflow-hidden">
      {children.split(" ").map((item) => (
        <h4
          className="truncate text-4xl font-extrabold tracking-tighter md:text-center [&:not(:first-child)]:mt-[-8px]"
          key={item}
        >
          {item}
        </h4>
      ))}
    </div>
  );
}

// Job
interface JobProps {
  company: ICompany;
  title: string;
}

function Job({ company, title }: JobProps) {
  return (
    <div className="hidden flex-col items-center space-y-2 text-lg md:flex">
      <div className="rounded-full bg-stone-50 px-2.5 py-1 text-center">
        <span className="block font-medium leading-none tracking-tight text-stone-950">
          {company.name}
        </span>
      </div>
      <div className="text-center leading-tight">
        <p className="block">{title}</p>
      </div>
    </div>
  );
}
