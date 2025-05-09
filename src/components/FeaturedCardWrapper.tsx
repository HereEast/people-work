"use client";

import { ReactNode, useState } from "react";
import { FEATURED } from "~/utils/data/featured";

interface FeaturedCardWrapperProps {
  children: ReactNode;
  slug: string;
}
export function FeaturedCardWrapper({
  children,
  slug,
}: FeaturedCardWrapperProps) {
  const [isHovered, setIsHovered] = useState(false);

  const featuredItem = FEATURED.find((item) => item.slug === slug);
  const featuredId = featuredItem?.id || 0;

  return (
    <div
      className="rounded-xl transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered
          ? `var(--featured-hover-${featuredId})`
          : `var(--featured-${featuredId})`,
      }}
    >
      {children}
    </div>
  );
}
