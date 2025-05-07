"use client";

import { Button } from "./ui/Button";
import { AccentText } from "./AccentText";
import { EmojiImage } from "./EmojiImage";

export function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-6 text-2xl font-medium md:text-4xl">
      <EmojiImage name="cool-goat" classname="size-40" />

      <div className="flex flex-col items-center leading-[120%]">
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
