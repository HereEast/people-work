import { notFound } from "next/navigation";

import { PersonPreview, Content, SidePeoplePanel } from "./person";
import { PageContainer } from "~/components/PageContainer";
import { ShareForm } from "~/components/ShareForm";

import { getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";

interface QAPageProps {
  slug: string;
}

export async function PersonQAPage({ slug }: QAPageProps) {
  const person = await getPerson(slug);
  const answers = await getAnswersByPersonSlug(slug);

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageContainer className="min-h-screen w-full max-w-full justify-between gap-10 pt-4 sm:pt-10 lg:flex">
      {answers && person && (
        <>
          <div className="w-full space-y-16">
            <div>
              <div className="grid gap-6 lg:grid-cols-[300px_auto]">
                <PersonPreview person={person} />

                <div className="max-w-3xl space-y-16">
                  <Content data={answers} />
                </div>
              </div>
            </div>

            {/* Side Panel — Mobile */}
            <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
              <p className="text-gradient w-fit text-center font-medium leading-tight">
                More awesome people:
              </p>

              <SidePeoplePanel slug={slug} />
            </div>

            {/* Form */}
            <div className="mb-10 max-w-7xl grid-cols-[300px_auto] gap-6 lg:grid">
              <div className="max-w-3xl md:col-start-2">
                <ShareForm />
              </div>
            </div>
          </div>

          {/* Side Panel — Desktop */}
          <aside className="relative hidden lg:block">
            <div className="sticky top-[56px]">
              <SidePeoplePanel slug={slug} />
            </div>
          </aside>
        </>
      )}
    </PageContainer>
  );
}
