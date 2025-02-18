import { Metadata } from "next";

import { SEO_DATA } from "./data/seo-data";

interface MetadataInput {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export function getMetadata(input: MetadataInput = {}): Metadata {
  const title = input.title || SEO_DATA.index.title;
  const description = input.description || SEO_DATA.index.description;
  const imageUrl = input.imageUrl || SEO_DATA.index.imageUrl;

  return {
    title,
    description,
    metadataBase: new URL(SEO_DATA.index.url),
    openGraph: {
      title: SEO_DATA.index.title,
      description: SEO_DATA.index.description,
      url: SEO_DATA.index.url,
      siteName: "people-work.net",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-EN",
      type: "website",
    },
  };
}
