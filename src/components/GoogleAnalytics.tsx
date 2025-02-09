"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import { updatePagePath } from "~/utils/ga";

interface GoogleAnalyticsProps {
  gaID: string;
}

export function GoogleAnalytics({ gaID }: GoogleAnalyticsProps) {
  console.log(gaID);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    updatePagePath(gaID, url);
  }, [pathname, searchParams, gaID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
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
                
            gtag('config', '${gaID}', {
                page_path: window.location.pathname,
            });
            `,
        }}
      />
    </>
  );
}
