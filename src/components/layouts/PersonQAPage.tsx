import { notFound } from "next/navigation";

import { ShareForm } from "../ShareForm";
import { PageContainer } from "./PageContainer";
import { PersonPreview, SidePeoplePanel, Content } from "../pages/person";

import { getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";

interface PersonQAPageProps {
  slug: string;
}

export async function PersonQAPage({ slug }: PersonQAPageProps) {
  const person = await getPerson(slug);
  const answers = await getAnswersByPersonSlug(slug);

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageContainer className="min-h-screen max-w-full gap-10 pt-4 sm:pt-10 lg:grid lg:grid-cols-[auto_80px]">
      {answers && person && (
        <>
          <div className="space-y-16">
            <div className="max-w-7xl">
              <div className="grid gap-6 md:grid-cols-[300px_auto]">
                <PersonPreview person={person} />

                <div className="space-y-16">
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
              <div className="md:col-start-2">
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
