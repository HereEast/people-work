import { Html, Head, Main, NextScript } from "next/document";
import { InnovatorGrotesk } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={InnovatorGrotesk.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
