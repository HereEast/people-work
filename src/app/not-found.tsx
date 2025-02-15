import Link from "next/link";

import { PageContainer } from "~/components/layouts/PageContainer";
import { PAGE } from "~/utils/constants";

export default function NotFound() {
  return (
    <PageContainer className="grow">
      <section className="flex h-full items-center justify-center">
        <div className="space-y-6 text-center">
          <h2 className="text-2xl">
            Oops!.. Something definitely went wrong 😬
          </h2>

          <Link
            href={PAGE.HOME}
            className="flex w-full items-center justify-center rounded-full bg-stone-950 px-10 py-6 text-stone-50 transition hover:shadow-lg hover:shadow-blue-600"
          >
            <span className="font-bold">back to home</span>
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
