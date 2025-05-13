"use client";

import { useCookie } from "~/hooks/useCookie";

export function CookieBanner() {
  const { isCookieBanner, setConsent } = useCookie();

  if (!isCookieBanner) {
    return null;
  }

  return (
    <div className="fixed inset-x-2 bottom-2 z-30 mx-auto sm:inset-x-4 sm:bottom-6">
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl p-6 text-stone-50 md:flex-row">
        <div className="w-full text-center md:text-left">
          <p>🍪 We use cookies on our website.</p>
        </div>

        <div className="flex w-full justify-center gap-2 md:justify-end">
          <button
            onClick={() => setConsent(false)}
            className="w-full rounded-[16px] border border-stone-50 px-10 py-4 transition hover:opacity-75 md:w-fit"
          >
            Decline
          </button>

          <button
            onClick={() => setConsent(true)}
            className="w-full rounded-[16px] bg-stone-50 px-10 py-4 font-medium text-stone-900 transition hover:opacity-75 md:w-fit"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
