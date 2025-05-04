import Link from "next/link";

import { PersonImage } from "./PersonImage";
import { QuoteIcon } from "./icons/QuoteIcon";

import { PersonData } from "~/schemas";
import { getAnswersByPersonSlug } from "~/api-client/answers";

interface FeaturedCardProps {
  person: PersonData;
}

export async function FeaturedCard({ person }: FeaturedCardProps) {
  const answers = await getAnswersByPersonSlug(person.slug);
  const featuredAnswer = answers?.find((a) => a.featured);

  if (!featuredAnswer) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-stone-100 p-8 transition hover:bg-stone-100/50">
      <Link href={`/people/${person.slug}`}>
        <div className="mb-10 space-y-5">
          <div className="size-8">
            <QuoteIcon />
          </div>
          <p className="text-4xl font-medium leading-[120%]">
            {featuredAnswer?.answer}
          </p>
        </div>

        <div className="flex items-end gap-6">
          <div className="size-24 overflow-hidden rounded-md">
            <PersonImage name={person.name} slug={person.slug} />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-medium">{`${person.jobTitle} at ${person.company.name}`}</span>
            <span className="font-accent text-2xl leading-[100%]">
              {person.name}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
