"use client";

import { useState } from "react";

import { Button, ButtonLink } from "./ui";
import { EmojiImage } from "./EmojiImage";
import { SubscribePopup } from "./SubscribePopup";

import { ROUTE } from "~/utils/constants";

const FOOTER_LINKS = [
  { path: ROUTE.about, label: "About" },
  // { path: ROUTE.questions, label: "Questions" },
  // { path: ROUTE.people, label: "People" },
];

export function Footer() {
  const [showSubscribe, setShowSubscribe] = useState(false);

  return (
    <footer className="w-full px-2.5 py-4 md:px-6">
      <nav className="flex w-full flex-col-reverse justify-between text-xl sm:flex-row sm:text-3xl">
        <div className="flex gap-1 sm:gap-2">
          <ButtonLink href={ROUTE.index} variant="link">
            people-work.net
          </ButtonLink>
          <span>( 2025 )</span>
        </div>

        <ul className="flex flex-col-reverse sm:flex-row sm:gap-2">
          <li className="group/footer-link flex items-center gap-1">
            <Button
              variant="link"
              className="flex items-center gap-1"
              onClick={() => setShowSubscribe(true)}
            >
              <span>Subscribe</span>
              <EmojiImage name="mouse-cursor" classname="size-6 sm:size-8" />
            </Button>

            <span className="hidden transition group-hover/footer-link:opacity-30 sm:inline-block">
              ,
            </span>
          </li>

          {FOOTER_LINKS.map((link, index) => (
            <li className="group/footer-link" key={link.label}>
              <ButtonLink href={link.path} variant="link">
                {link.label}
              </ButtonLink>

              {index < FOOTER_LINKS.length - 1 && (
                <span className="transition group-hover/footer-link:opacity-30">
                  ,
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {showSubscribe && (
        <SubscribePopup handleClose={() => setShowSubscribe(false)} />
      )}
    </footer>
  );
}
