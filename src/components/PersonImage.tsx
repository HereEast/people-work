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
        "inline-block size-[72px] shrink-0 overflow-hidden rounded-sm",
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
