import Image from "next/image";

import { IPerson } from "~/models/Person";

interface PersonImageProps {
  person: IPerson;
}

export function PersonImage({ person }: PersonImageProps) {
  return (
    <Image
      src={`/images/people/${person?.slug}.jpg`}
      alt={`Image of ${person?.name}`}
      width={600}
      height={600}
      className="object-cover"
      priority
    />
  );
}
