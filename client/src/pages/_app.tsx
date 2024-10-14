import type { AppProps } from "next/app";

import localFont from "next/font/local";
import "~/styles/globals.css";

import { Layout } from "~/components/layouts/Layout";

export const InnovatorGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/InnovatorGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InnovatorGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InnovatorGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/InnovatorGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
