"use client";

import { ReactNode, useEffect, useState } from "react";
import { cn } from "~/utils/handlers";

interface StickyMobileWrapperProps {
  children: ReactNode;
}

export function StickyMobileWrapper({ children }: StickyMobileWrapperProps) {
  const [showPanel, setShowPanel] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideThreshold, setHideThreshold] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowPanel(false);
        setHideThreshold(currentScrollY);
      } else if (
        currentScrollY < lastScrollY &&
        currentScrollY < hideThreshold - 50
      ) {
        setShowPanel(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hideThreshold, showPanel]);

  return (
    <div
      className={cn(
        "sticky top-12 z-40 -mx-2.5 transform bg-stone-800 px-3 duration-100 sm:top-16 md:-mx-6 md:px-6 lg:hidden",
        showPanel ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  );
}
