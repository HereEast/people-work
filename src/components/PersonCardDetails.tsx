import Image from "next/image";

import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { AccentText } from "./AccentText";

import { PersonData } from "~/schemas";
import { getAttributeDescription } from "~/utils/handlers";

interface PersonDetailsProps {
  person: PersonData;
}

export function PersonCardDetails({ person }: PersonDetailsProps) {
  const altText = getAttributeDescription(person, "alt");

  return (
    <div className="flex items-end gap-3 sm:gap-4">
      {/* Image */}
      <div className="relative size-[70px] shrink-0 overflow-hidden rounded-xs sm:size-[90px]">
        <ImagePlaceholder />
        <Image
          src={`/images/people/${person.slug}.jpg`}
          alt={altText}
          width={200}
          height={200}
          className="relative object-cover"
          priority
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-sm sm:text-xl">
        <h4 className="leading-none">
          <AccentText>{person.name}</AccentText>
        </h4>

        <div className="font-medium leading-[115%] tracking-normal">
          <h5 className="font-medium">{person.work.title}</h5>
          <h5 className="truncate font-medium">{person.work.company}</h5>
        </div>
      </div>
    </div>
  );
}
