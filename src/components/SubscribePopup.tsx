"use client";

import { useState } from "react";

import { PortalPopup } from "./Portal";
import { AccentText } from "./AccentText";
import { SubscribeHeader } from "./SubscribeSection";
import { SubscribeForm } from "./SubscribeForm";

interface SubscribePopupProps {
  handleClose: () => void;
}

export function SubscribePopup({ handleClose }: SubscribePopupProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (isSubscribed) {
    return (
      <PortalPopup handleClose={handleClose} className="p-10 sm:max-w-[460px]">
        <div className="flex flex-col items-center gap-1">
          <p className="text-center leading-[110%]">You're on the list! </p>
          <p className="text-center leading-[110%]">
            <span>Lots of</span>{" "}
            <AccentText className="text-[112%]">
              good stuff is coming!
            </AccentText>
          </p>
        </div>
      </PortalPopup>
    );
  }

  return (
    <PortalPopup handleClose={handleClose} className="pt-12">
      <SubscribeHeader />
      <SubscribeForm setIsSubscribed={setIsSubscribed} />
    </PortalPopup>
  );
}
