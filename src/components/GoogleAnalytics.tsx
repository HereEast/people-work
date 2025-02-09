"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

import { GA_MEASUREMENT_ID } from "~/utils/constants";

export function GoogleAnalytics() {
  const pathname = usePathname();

  // Add searchParams
  const searchParams = "";

  // Track page view change
  useEffect(() => {
    const url = pathname + searchParams;

    if (typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return (
    GA_MEASUREMENT_ID && (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
                
            gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
            });
            `,
          }}
        />
      </>
    )
  );
}
