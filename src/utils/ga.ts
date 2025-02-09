export function updatePagePath(GA_MEASUREMENT_ID: string, url: string) {
  if (typeof window !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } else {
    throw Error("Error 2 Func");
  }
}
