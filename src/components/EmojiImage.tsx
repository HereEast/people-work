import Image from "next/image";

import { cn } from "~/utils/handlers";

interface EmojiImageProps {
  name: string;
  size: string;
  description?: string;
}

export function EmojiImage({ name, size, description }: EmojiImageProps) {
  const str = name.split("-").join(" ");
  const alt = `${str[0].toUpperCase() + str.slice(1)}`;

  return (
    <Image
      src={`/images/emojis/${name}.png`}
      alt={description || alt}
      width={600}
      height={600}
      className={cn(
        "object-contain",
        isFinite(Number(size)) ? `size-${size}` : `size-[${size}]`,
      )}
      priority
    />
  );
}
