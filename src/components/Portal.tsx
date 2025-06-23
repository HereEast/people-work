"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

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
}

export function PortalPopup({ children, handleClose }: PortalPopupProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleClose ? () => handleClose() : undefined}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
