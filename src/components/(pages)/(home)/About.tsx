"use client";

import Image from "next/image";

import { Button } from "~/components/ui/Button";
import { AccentText } from "~/components/AccentText";

export function About() {
  return (
    <div className="w-full font-medium leading-[105%]">
      <span className="text-6xl">
        This project is for anyone curious about the different paths people take
        in their careers. It demystifies job titles, shares daily routines,
        highlights and aspirations in a{" "}
        <AccentText size="xl">simple Q&A format.</AccentText>
        <Image
          src="/images/emojis/cat-01.png"
          alt="Emoji of a red cat"
          width={600}
          height={600}
          className="relative -top-1 inline-block size-[70px] object-contain px-2"
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
