"use client";

import { Loader } from "../Loader";
import { SharePersonCard } from "../SharePersonCard";
import { SidePanel } from "../SidePanel";
import { PersonPreview } from "../PersonPreview";
import { PageContainer } from "./PageContainer";
import { Content } from "../Content";
import { Label } from "../Label";

import { useAnswers } from "~/hooks";
import { ReactNode } from "react";

interface QAPageProps {
  slug: string;
}

export function QAPage({ slug }: QAPageProps) {
  const { data, isLoading } = useAnswers(slug);

  return (
    <PageContainer className="min-h-screen max-w-full gap-10 pt-6 lg:grid lg:grid-cols-[auto_80px]">
      {isLoading && <Loader />}

      <div>
        {!isLoading && data && (
          <section className="max-w-7xl">
            <div className="grid gap-4 pb-24 md:grid-cols-[340px_auto] md:pb-16">
              <StickyPersonPreview>
                <PersonPreview person={data.person} />
              </StickyPersonPreview>

              <div className="space-y-16">
                <Content data={data} />

                {/* Desktop */}
                <div className="hidden md:block">
                  <SharePersonCard />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Mobile */}
        <section className="mb-10 md:hidden">
          <SharePersonCard />
        </section>
      </div>

      <aside className="relative hidden lg:block">
        <div className="sticky top-16">
          <SidePanel />
        </div>
      </aside>
    </PageContainer>
  );
}

// Sticky Person Preview
interface StickyPersonPreviewProps {
  children: ReactNode;
}

function StickyPersonPreview({ children }: StickyPersonPreviewProps) {
  return (
    <div className="sticky top-12 rounded-b-4xl bg-white pt-4 sm:top-16 md:static md:rounded-4xl md:pt-0">
      <div className="md:sticky md:top-16">{children}</div>
    </div>
  );
}
