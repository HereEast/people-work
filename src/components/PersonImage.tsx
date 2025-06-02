import Image from "next/image";

import { cn } from "~/utils/handlers";

interface PersonImageProps {
  slug: string;
  name: string;
  classname?: string;
}

export function PersonImage({ name, slug, classname = "" }: PersonImageProps) {
  return (
    <div
      className={cn(
        "inline-block aspect-square size-16 shrink-0 overflow-hidden rounded-xs sm:size-24",
        classname,
      )}
    >
      <Image
        src={`/images/people/${slug}.jpg`}
        alt={`Image of ${name}`}
        width={600}
        height={600}
        className="object-cover"
        priority
      />
    </div>
  );
}
