"use client";

import { useState } from "react";

import { AccentText } from "./AccentText";
import { EmojiImage } from "./EmojiImage";
import { SubscribeForm } from "./SubscribeForm";

export function SubscribeSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-6">
        <EmojiImage name="popcorn" classname="size-32" />

        <div className="flex flex-col items-center text-xl font-medium leading-[120%] sm:text-3xl sm:font-normal">
          <h2 id="subscribe-form">There's more to come!</h2>
          <p>
            <AccentText>Subscribe</AccentText> <span>to stay tuned.</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <SubscribeForm setIsSubscribed={setIsSubscribed} />

        {isSubscribed && (
          <p className="text-center leading-[110%]">
            Yay! You're on the list.{" "}
            <AccentText className="text-[112%]">
              Good things are coming.
            </AccentText>
          </p>
        )}
      </div>
    </section>
  );
}
