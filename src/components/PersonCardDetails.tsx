import Image from "next/image";

import { AccentText } from "./AccentText";
import { PersonData } from "~/schemas";

interface PersonDetailsProps {
  person: PersonData;
}

export function PersonCardDetails({ person }: PersonDetailsProps) {
  return (
    <div className="flex items-end gap-3 sm:gap-4">
      <Image
        src={`/images/people/${person.slug}.jpg`}
        alt={`Image of ${person.name}`}
        width={200}
        height={200}
        className="size-[70px] rounded-xs object-cover sm:size-[90px]"
        priority
      />

      <div className="flex flex-col gap-0.5 text-sm sm:text-xl">
        <h3 className="leading-none">
          <AccentText>{person.name}</AccentText>
        </h3>

        {person.work.map((work, index) => (
          <div className="flex flex-col font-medium leading-[115%]" key={index}>
            <h4>{work.title}</h4>
            <h4>{work.company}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
