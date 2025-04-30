import Link from "next/link";

import { ArrowRightFull } from "~/components/icons";
import { Card } from "~/components/Card";
import { PersonImage } from "~/components/PersonImage";

import { cn } from "~/utils/handlers";
import { PersonData, CompanyData } from "~/schemas";

interface PersonCardProps {
  person: PersonData;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Card className="h-full transition hover:scale-[101%] hover:shadow-xl hover:shadow-brand-blue-600">
      <Link href={`/people/${person?.slug}`}>
        {/* Arrow */}
        <div className="absolute right-10 top-10 z-10 flex size-16 items-center justify-center rounded-full bg-brand-blue-600">
          <ArrowRightFull className="w-4 text-stone-50" />
        </div>

        <div className="flex flex-col items-center gap-5 p-5 pb-8 text-stone-50">
          <div className="overflow-hidden rounded-4xl">
            <PersonImage name={person.name} slug={person.slug} />
          </div>

          <div className="w-full space-y-4">
            <Name>{person?.name}</Name>
            <Job company={person.company} title={person.jobTitle} />
          </div>
        </div>
      </Link>
    </Card>
  );
}

// Name
interface NameProps {
  children: string;
  className?: string;
}

export function Name({ children, className = "" }: NameProps) {
  return (
    <div className="w-full overflow-hidden">
      {children.split(" ").map((item) => (
        <h2
          className={cn(
            "truncate text-center text-4xl font-extrabold tracking-tighter [&:not(:first-child)]:mt-[-8px]",
            className,
          )}
          key={item}
        >
          {item}
        </h2>
      ))}
    </div>
  );
}

// Job
interface JobProps {
  company: CompanyData;
  title: string;
}

export function Job({ company, title }: JobProps) {
  return (
    <div className="flex flex-col items-center space-y-2 text-lg">
      <div className="rounded-full bg-stone-50 px-2.5 py-1 text-center">
        <h3 className="block leading-none tracking-tight text-stone-950">
          {company.name}
        </h3>
      </div>
      <div className="text-center leading-tight">
        <h4 className="block">{title}</h4>
      </div>
    </div>
  );
}
