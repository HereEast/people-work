"use client";

import { Button } from "~/components/ui/Button";
import { AccentText } from "~/components/AccentText";
import { EmojiImage } from "~/components/EmojiImage";

export function Hero() {
  return (
    <div className="mt-10 sm:my-20">
      <div className="w-full font-medium">
        <span className="text-[36px] leading-[115%] md:text-6xl">
          Real people, <AccentText size="xl">real jobs</AccentText>. Brief Q&As
          that <AccentText size="xl">demystify titles</AccentText>, share
          routines, and explore what keeps them going.
          <EmojiImage
            name="red-cat-face"
            classname="relative -top-0.5 ml-1 mr-2 inline-block size-10 object-contain leading-none md:ml-2 md:mr-3 md:size-[74px]"
          />
          <Button onClick={() => console.log("Subscribe.")}>
            <AccentText size="xl" underline>
              Subscribe
            </AccentText>
          </Button>
        </span>
      </div>
    </div>
  );
}
