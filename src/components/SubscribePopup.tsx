"use client";

import { useState } from "react";

import { Popup } from "./Portal";
import { AccentText } from "./AccentText";
import { SubscribeSectionTitle } from "./SubscribeSection";
import { SubscribeForm } from "./SubscribeForm";
import { cn } from "~/utils/handlers";

interface SubscribePopupProps {
  handleClose: () => void;
}

export function SubscribePopup({ handleClose }: SubscribePopupProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <Popup
      handleClose={handleClose}
      className={cn("pt-12", isSubscribed && "p-10 sm:max-w-[460px]")}
    >
      {isSubscribed && (
        <div className="flex flex-col items-center gap-1">
          <p className="text-center leading-[110%]">You're on the list! </p>
          <p className="text-center leading-[110%]">
            <span>Lots of</span> <AccentText>good stuff is coming!</AccentText>
          </p>
        </div>
      )}

      {!isSubscribed && (
        <>
          <SubscribeSectionTitle />
          <SubscribeForm setIsSubscribed={setIsSubscribed} />
        </>
      )}
    </Popup>
  );
}
