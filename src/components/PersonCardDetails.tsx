import Link from "next/link";

import { PersonImage } from "~/components/PersonImage";
import { PersonData } from "~/schemas";

import { AccentText } from "./AccentText";

interface PersonDetailsProps {
  person: PersonData;
}

export function PersonCardDetails({ person }: PersonDetailsProps) {
  return (
    <div className="flex items-end gap-3 sm:gap-5">
      <PersonImage
        name={person.name}
        slug={person.slug}
        classname="md:size-24"
      />

      <div className="flex flex-col sm:gap-0.5">
        <AccentText size="s">{person.name}</AccentText>

        <div className="flex flex-col">
          <span className="text-lg font-medium leading-[105%] md:text-xl md:leading-[110%]">
            {person.jobTitle}
          </span>
          <span className="text-lg font-medium leading-[105%] md:text-xl md:leading-[110%]">
            {person.company.name}
          </span>
        </div>
      </div>
    </div>
  );
}
