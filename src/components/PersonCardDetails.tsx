import Image from "next/image";

import { AccentText } from "./AccentText";
import { PersonData } from "~/schemas";

interface PersonDetailsProps {
  person: PersonData;
}

export function PersonCardDetails({ person }: PersonDetailsProps) {
  const work = person.work[0];

  const isFreelance =
    work.company === "freelance" || work.company === "self-employed";

  const altText = isFreelance
    ? `${person.name}, ${work.title}`
    : `${person.name}, ${work.title} at ${work.company}`;

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

        {person.work.map((work, index) => (
          <div
            className="flex flex-col font-medium leading-[115%] tracking-[0ch]"
            key={index}
          >
            <h4>{work.title}</h4>
            <h4>{work.company || "Freelance"}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
