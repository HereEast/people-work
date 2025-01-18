import { ReactNode } from "react";

import { PageContainer } from "./PageContainer";
import { SideNavigation } from "./SideNavigation";

interface PersonPageLayoutProps {
  children: ReactNode;
}

export function PersonPageLayout({ children }: PersonPageLayoutProps) {
  return (
    <PageContainer classes="flex gap-10 relative">
      {children}
      <SideNavigation />
    </PageContainer>
  );
}
