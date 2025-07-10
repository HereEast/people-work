"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "~/utils/handlers";

interface EmojiImageProps {
  name: string;
  classname?: string;
}

export function EmojiImage({ name, classname }: EmojiImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

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
      onError={() => setError(true)}
      role="img"
      aria-hidden="true"
    />
  );
}
