import Image from "next/image";

import { cn } from "~/utils/handlers";

interface ImageThumbnailProps {
  src: string;
  alt: string;
  classes?: string;
}

export function ImageThumbnail({ src, alt, classes }: ImageThumbnailProps) {
  return (
    <div
      className={cn(
        "size-40 shrink-0 overflow-hidden rounded-[40px]",
        classes || "",
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="object-cover"
      />
    </div>
  );
}
