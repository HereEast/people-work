"use client";

import { ReactNode, useState } from "react";
import { FEATURED } from "~/utils/data/featured";
import { Card } from "./Card";

interface FeaturedCardProps {
  children: ReactNode;
  slug: string;
}

export function FeaturedCard({ children, slug }: FeaturedCardProps) {
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
