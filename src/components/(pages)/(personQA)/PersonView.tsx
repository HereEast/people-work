import { AccentText } from "~/components/AccentText";
import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function PersonView({ person }: PersonViewProps) {
  return (
    <div className="relative z-50 flex items-center gap-4 rounded-2xl bg-stone-100 p-5 lg:flex-col lg:gap-10 lg:bg-transparent">
      <div className="size-20 shrink-0 overflow-hidden rounded-xl lg:size-[280px] lg:rounded-2xl">
        <PersonImage name={person.name} slug={person.slug} />
      </div>

      <div className="text-center lg:space-y-1">
        <h1 className="lg:text-center">
          <AccentText>{person.name}</AccentText>
        </h1>

        <div className="space-y-1">
          <h2 className="text-2xl font-medium leading-[100%] sm:text-4xl">
            {person.jobTitle}
          </h2>
          <h3 className="text-2xl font-medium leading-[100%] sm:text-4xl">
            {person.company.name}
          </h3>
        </div>
      </div>
    </div>
  );
}
