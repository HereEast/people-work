"use client";

import { useCookie } from "~/hooks/useCookie";
import { Button } from "./Button";

export function CookieBanner() {
  const { isCookieBanner, setConsent } = useCookie();

  if (!isCookieBanner) {
    return null;
  }

  return (
    <div className="fixed inset-x-2.5 bottom-2.5 z-30 max-w-[620px] sm:bottom-6 sm:m-auto">
      <div className="flex flex-col items-center justify-between gap-2 rounded-md bg-stone-300 p-4 pt-3 text-lg sm:flex-row sm:p-4 sm:pl-5 sm:text-xl">
        <p>🍪 This website uses Cookies.</p>

        <div className="flex w-full gap-2 sm:w-fit">
          <Button
            variant="outline"
            size="base"
            onClick={() => setConsent(false)}
            className="w-full sm:w-fit"
          >
            Decline
          </Button>

          <Button
            size="base"
            onClick={() => setConsent(true)}
            className="w-full sm:w-fit"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
