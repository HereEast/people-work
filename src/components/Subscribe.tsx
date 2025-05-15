"use client";

import { Button } from "./ui/Button";
import { AccentText } from "./AccentText";
import { EmojiImage } from "./EmojiImage";

export function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-6 text-2xl sm:text-3xl">
      <EmojiImage name="popcorn" classname="size-24" />

      <div className="flex flex-col items-center gap-0.5">
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
