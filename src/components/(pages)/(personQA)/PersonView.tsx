import { AccentText } from "~/components/AccentText";
import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function PersonView({ person }: PersonViewProps) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="size-[320px] overflow-hidden rounded-xl">
        <PersonImage name={person.name} slug={person.slug} />
      </div>

      <div className="space-y-1">
        <h1 className="text-center">
          <AccentText>{person.name}</AccentText>
        </h1>

        <h2 className="text-4xl font-medium">{`${person.jobTitle} at ${person.company.name}`}</h2>
      </div>
    </div>
  );
}
