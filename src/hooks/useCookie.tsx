import { useEffect, useState } from "react";

export function useCookie() {
  const [isConsent, setIsConsent] = useState<boolean | null>(null);
  const [isCookieBanner, setIsCookieBanner] = useState(false);

  function handleConsent(value: boolean) {
    setIsConsent(value);
  }

  useEffect(() => {
    const savedConsentValue = localStorage.getItem("cookie_consent");

    if (savedConsentValue) {
      setIsConsent(JSON.parse(savedConsentValue));
    } else {
      setIsCookieBanner(true);
    }
  }, []);

  useEffect(() => {
    if (isConsent === null) {
      return;
    }

    const consentStatus = isConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: consentStatus,
    });

    // if (typeof window.gtag === "function") {
    //   window.gtag("consent", "update", {
    //     analytics_storage: consentStatus,
    //   });
    // } else {
    //   console.log("Google Analytics gtag function not loaded.");
    // }

    localStorage.setItem("cookie_consent", JSON.stringify(isConsent));
    setIsCookieBanner(false);
  }, [isConsent]);

  return { isCookieBanner, handleConsent };
}
