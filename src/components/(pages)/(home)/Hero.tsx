"use client";

import Image from "next/image";

import { AccentText } from "~/components/AccentText";
import { Button } from "~/components/ui/Button";

// Real people, real jobs. Brief Q&As that demystify titles, share routines, and explore what keeps them going.
// Brief Q&As on roles, routines, and what keeps them going.

export function Hero() {
  return (
    <div className="mt-10 sm:my-20">
      <div className="w-full font-medium">
        <span className="text-[36px] leading-[115%] md:text-6xl">
          Real people, <AccentText size="xl">real jobs</AccentText>. Brief Q&As
          that <AccentText size="xl">demystify titles</AccentText>, share
          routines, and explore what keeps them going.
          <Image
            src="/images/emojis/cat-01.png"
            alt="Emoji of a red cat"
            width={600}
            height={600}
            className="relative -top-0.5 ml-1 mr-2 inline-block size-10 object-contain leading-none md:ml-2 md:mr-3 md:size-[74px]"
            priority
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
