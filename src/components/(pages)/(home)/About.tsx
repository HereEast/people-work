"use client";

import Image from "next/image";

import { Button } from "~/components/ui/Button";
import { AccentText } from "~/components/AccentText";

// Real people, real jobs. Brief Q&As that demystify titles, share routines, and explore what keeps them going.

// Brief Q&As on roles, routines, and what keeps them going.

export function About() {
  return (
    <div className="w-full font-medium">
      <span className="text-6xl leading-[110%]">
        Real people, <AccentText size="xl">real jobs</AccentText>. Brief Q&As
        that <AccentText size="xl">demystify titles</AccentText>, share
        routines, and explore what keeps them going.
        <Image
          src="/images/emojis/cat-01.png"
          alt="Emoji of a red cat"
          width={600}
          height={600}
          className="relative -top-1 inline-block size-[74px] object-contain pl-2 pr-2.5"
          priority
        />
        <Button onClick={() => console.log("Subscribe.")}>
          <AccentText size="xl" underline>
            Subscribe
          </AccentText>
        </Button>
      </span>
    </div>
  );
}
