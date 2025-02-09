export function updatePagePath(GA_MEASUREMENT_ID: string, url: string) {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// export function getLocalStorage(key: string, defaultValue: any) {
//   const stickyValue = localStorage.getItem(key);

//   return stickyValue !== null && stickyValue !== "undefined"
//     ? JSON.parse(stickyValue)
//     : defaultValue;
// }

// export function setLocalStorage(key: string, value: any) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
