"use client";

import { ReactNode, useState } from "react";

import { Card } from "./Card";
import { FEATURED } from "~/utils/data";

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
    <Card
      className="cursor-pointer"
      style={{
        backgroundColor: isHovered
          ? `var(--featured-hover-${featuredId})`
          : `var(--featured-${featuredId})`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Card>
  );
}
