import Image from "next/image";

import { AccentText } from "./AccentText";
import { PersonData } from "~/schemas";
import { getMetaDescription } from "~/utils/handlers";

interface PersonDetailsProps {
  person: PersonData;
}

export function PersonCardDetails({ person }: PersonDetailsProps) {
  const altText = getMetaDescription(person, "alt");

  return (
    <div className="flex items-end gap-3 sm:gap-4">
      <Image
        src={`/images/people/${person.slug}.jpg`}
        alt={altText}
        width={200}
        height={200}
        className="size-[72px] rounded-xs object-cover sm:size-[90px]"
        priority
      />

      <div className="flex flex-col gap-0.5 text-sm sm:text-xl">
        <h4 className="leading-none">
          <AccentText>{person.name}</AccentText>
        </h4>

        <div className="flex flex-col font-medium leading-[115%] tracking-[0ch]">
          <h5 className="font-medium">{person.work.title}</h5>
          <h5 className="font-medium">{person.work.company}</h5>
        </div>
      </div>
    </div>
  );
}
