import Image from "next/image";

import { cn } from "~/utils/handlers";

interface EmojiImageProps {
  name: string;
  classname?: string;
}

export function EmojiImage({ name, classname }: EmojiImageProps) {
  const str = name.split("-").join(" ");
  const description = `${str[0].toUpperCase() + str.slice(1)}`;

  return (
    <Image
      src={`/images/emojis/${name}.png`}
      alt={description}
      width={400}
      height={400}
      className={cn("object-contain", classname)}
      priority
    />
  );
}
