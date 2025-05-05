import { AccentText } from "~/components/AccentText";
import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function PersonView({ person }: PersonViewProps) {
  return (
    <div className="relative z-50 flex items-center gap-4 rounded-2xl bg-stone-100 p-5 lg:flex-col lg:gap-10 lg:bg-transparent">
      <div className="size-20 shrink-0 overflow-hidden rounded-md lg:size-[320px] lg:rounded-xl">
        <PersonImage name={person.name} slug={person.slug} />
      </div>

      <div className="lg:space-y-1">
        <h1 className="lg:text-center">
          <AccentText>{person.name}</AccentText>
        </h1>

        <h2 className="text-2xl font-medium leading-[100%] md:text-4xl">{`${person.jobTitle} at ${person.company.name}`}</h2>
      </div>
    </div>
  );
}
