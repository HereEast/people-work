import Link from "next/link";

import { Card } from "./Card";
import { PersonImage } from "./PersonImage";
import { ArrowRightFull } from "./icons";

import { IPerson, ICompany } from "~/models/Person";
import { cn } from "~/utils/handlers";

interface PersonCardProps {
  person: IPerson;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Card className="h-full transition hover:scale-[101%] hover:shadow-xl hover:shadow-brand-blue-600">
      <Link href={`/${person?.slug}`}>
        {/* Arrow */}
        <div className="absolute right-10 top-10 z-10 flex size-16 items-center justify-center rounded-full bg-brand-blue-600">
          <ArrowRightFull className="w-4 text-stone-50" />
        </div>

        <div className="flex flex-col items-center gap-5 p-5 pb-8 text-stone-50">
          <div className="overflow-hidden rounded-4xl">
            <PersonImage person={person} />
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
        <h4
          className={cn(
            "truncate text-center text-4xl font-extrabold tracking-tighter [&:not(:first-child)]:mt-[-8px]",
            className,
          )}
          key={item}
        >
          {item}
        </h4>
      ))}
    </div>
  );
}

// Job
interface JobProps {
  company: ICompany;
  title: string;
}

export function Job({ company, title }: JobProps) {
  return (
    <div className="flex flex-col items-center space-y-2 text-lg">
      <div className="rounded-full bg-stone-50 px-2.5 py-1 text-center">
        <span className="block leading-none tracking-tight text-stone-950">
          {company.name}
        </span>
      </div>
      <div className="text-center leading-tight">
        <p className="block">{title}</p>
      </div>
    </div>
  );
}
