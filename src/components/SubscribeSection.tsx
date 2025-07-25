"use client";

import { useState } from "react";

import { AccentText } from "./AccentText";
import { EmojiImage } from "./EmojiImage";
import { SubscribeForm } from "./SubscribeForm";

// Subscribe Section
export function SubscribeSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <section
      id="subscribe-form"
      className="flex flex-col gap-8"
      aria-labelledby="subscribe-heading"
    >
      <h2 id="subscribe-heading" className="sr-only">
        Subscribe to Updates
      </h2>

      <SubscribeSectionTitle />

      <div className="flex flex-col items-center justify-center gap-6">
        <SubscribeForm setIsSubscribed={setIsSubscribed} />

        {isSubscribed && (
          <p className="text-center leading-[110%]">
            You're on the list! <AccentText>Good stuff is coming!</AccentText>
          </p>
        )}
      </div>
    </section>
  );
}

// Subscribe Header
export function SubscribeSectionTitle() {
  return (
    <div className="flex flex-col items-center gap-6">
      <EmojiImage name="popcorn" classname="size-32" />

      <div className="flex flex-col items-center text-xl font-medium leading-[120%] sm:text-3xl sm:font-normal">
        <p>There's more to come!</p>
        <p>
          <AccentText underline>Subscribe</AccentText>{" "}
          <span>to stay tuned.</span>
        </p>
      </div>
    </div>
  );
}
