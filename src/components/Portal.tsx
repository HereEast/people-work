"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import { ClosePopupButton } from "./ui";
import { cn } from "~/utils/handlers";

interface PortalProps {
  children: ReactNode;
}

export function Portal({ children }: PortalProps) {
  if (typeof window === "undefined") {
    return null;
  }

  const portalRoot = document.getElementById("portal-root");

  return portalRoot ? createPortal(children, portalRoot) : null;
}

// Portal Popup
interface PortalPopupProps extends PortalProps {
  handleClose: () => void;
  className?: string;
}

export function PortalPopup({
  children,
  handleClose,
  className = "",
}: PortalPopupProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-600/30 backdrop-blur-2xl"
      onClick={handleClose ? () => handleClose() : undefined}
    >
      <div
        className={cn(
          "relative flex w-full max-w-[95vw] flex-col gap-8 rounded-2xl bg-bg p-6 sm:w-[640px] sm:p-10",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <ClosePopupButton handleClose={handleClose} />
        {children}
      </div>
    </div>
  );
}
