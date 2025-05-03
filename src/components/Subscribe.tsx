"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { AccentText } from "./AccentText";

export function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-6 text-4xl font-medium">
      <Image
        src="/images/emojis/cat-01.png"
        alt="Emoji of a red cat"
        width={600}
        height={600}
        className="size-[70px] object-contain"
        priority
      />

      <div className="flex flex-col items-center gap-1">
        <span>More people are coming!</span>

        <span>
          <Button onClick={() => console.log("Subscribe.")}>
            <AccentText size="base" underline>
              Subscribe
            </AccentText>
          </Button>{" "}
          <span>to stay tuned.</span>
        </span>
      </div>
    </div>
  );
}
