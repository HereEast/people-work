"use client";

import { useEffect, useState } from "react";

export function useCookie() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [isCookieBanner, setIsCookieBanner] = useState(false);

  useEffect(() => {
    const savedConsentValue = localStorage.getItem("cookie_consent");

    if (savedConsentValue) {
      setConsent(JSON.parse(savedConsentValue));
      setIsCookieBanner(false);
    } else {
      setIsCookieBanner(true);
    }
  }, []);

  useEffect(() => {
    if (consent === null) {
      return;
    }

    const consentStatus = consent ? "granted" : "denied";

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: consentStatus,
      });
    }

    localStorage.setItem("cookie_consent", JSON.stringify(consent));
    setIsCookieBanner(false);
  }, [consent]);

  return { isCookieBanner, setConsent };
}
