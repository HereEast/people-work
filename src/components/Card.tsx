"use client";

import { HTMLAttributes, ReactNode, useState } from "react";

import { FEATURED } from "~/utils/data/featured";
import { cn } from "~/utils/handlers";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  marked?: boolean;
}

export function Card({
  children,
  className = "",
  marked = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-xl bg-stone-50 transition sm:rounded-xxl lg:rounded-2xl",
        marked && "bg-stone-600/45",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

// Featured card
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

// Sticky Mobile Card
export function StickyMobileWrapper({ children }: CardProps) {
  return (
    <div className="sticky top-12 z-40 -mx-3 bg-stone-800 px-3 sm:top-16 sm:rounded-b-2xl lg:hidden">
      {children}
    </div>
  );
}
// export function StickyMobileWrapper({ children }: CardProps) {
//   return (
//     <div className="sticky top-12 z-40 rounded-b-xl bg-bg sm:top-16 sm:rounded-b-2xl lg:hidden">
//       {children}
//     </div>
//   );
// }
