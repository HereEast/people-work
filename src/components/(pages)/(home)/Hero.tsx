"use client";

import { Button } from "~/components/ui/Button";
import { AccentText } from "~/components/AccentText";
import { EmojiImage } from "~/components/EmojiImage";

export function Hero() {
  return (
    <div className="mt-10 max-w-9xl sm:my-16">
      <div className="w-full font-medium">
        <p className="text-4xl leading-[110%] sm:text-7xl">
          Real people, <AccentText size="xl">real jobs</AccentText>. Brief Q&As
          that <AccentText size="xl">demystify titles</AccentText>, share
          routines, and explore what keeps them going.
          <EmojiImage
            name="red-cat-face"
            classname="relative -top-0.5 ml-1 mr-2 inline-block size-10 object-contain leading-none sm:ml-2 sm:mr-3.5 sm:size-[74px]"
          />
          <Button onClick={() => console.log("Subscribe.")}>
            <AccentText size="xl" underline>
              Subscribe
            </AccentText>
          </Button>
        </p>
      </div>
    </div>
  );
}
