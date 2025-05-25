import { PersonImage } from "~/components/PersonImage";
import { AccentText } from "./AccentText";

import { PersonData } from "~/schemas";

interface PersonDetailsProps {
  person: PersonData;
}

export function PersonCardDetails({ person }: PersonDetailsProps) {
  return (
    <div className="flex items-end gap-3 sm:gap-4">
      <PersonImage name={person.name} slug={person.slug} />

      <div className="flex flex-col gap-0.5 text-xl">
        <h3 className="leading-none">
          <AccentText>{person.name}</AccentText>
        </h3>

        <div className="flex flex-col">
          <h4 className="font-medium leading-[1.1]">{person.jobTitle}</h4>
          <h4 className="font-medium leading-[1.1]">{person.company.name}</h4>
        </div>
      </div>
    </div>
  );
}
