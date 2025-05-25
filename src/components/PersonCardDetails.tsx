import Link from "next/link";

import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";
import { AccentText } from "./AccentText";

interface PersonDetailsProps {
  person: PersonData;
  isLink?: boolean;
}

export function PersonCardDetails({ person, isLink }: PersonDetailsProps) {
  const content = (
    <div className="flex items-end gap-3 sm:gap-5">
      <PersonImage
        name={person.name}
        slug={person.slug}
        classname="md:size-20"
      />

      <div className="flex flex-col gap-1.5">
        <h3>
          <AccentText>{person.name}</AccentText>
        </h3>

        <div className="flex flex-col text-xl font-medium leading-[108%]">
          <h4>{person.jobTitle}</h4>
          <h4>{person.company.name}</h4>
        </div>
      </div>
    </div>
  );

  return isLink ? (
    <Link href={`/people/${person.slug}`}>{content}</Link>
  ) : (
    content
  );
}
