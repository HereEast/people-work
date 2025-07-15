import Image from "next/image";

import { ButtonLink, StickyColumn } from "~/components/ui";
import { MetadataDetails } from "~/components/MetadataDetails";
import { ContactLinks } from "~/components/ContactLinks";
import { Answer } from "~/components/Answer";
import { AccentText } from "~/components/AccentText";

import { CONTACT } from "~/utils/constants";

export default async function AboutPage() {
  const links = {
    linkedin: CONTACT.linkedin,
    email: CONTACT.email,
  };

  const metadata = [
    { label: "Name", value: "People Work" },
    { label: "Space", value: "Takeaway Archive, Media" },
    { label: "Created", value: "2025" },
    {
      label: "Contacts",
      value: <ContactLinks links={links} />,
    },
  ];

  const altText =
    "People Work - Real people, real jobs. Career insights via simple Q&As";

  return (
    <div className="mb-4 grid lg:grid-cols-2 lg:gap-4">
      <StickyColumn>
        <div className="flex h-full flex-col justify-between">
          <Image
            src={`/images/about.jpg`}
            alt={altText}
            width={600}
            height={600}
            className="size-60 rounded-md object-cover"
            priority
          />

          <MetadataDetails metadata={metadata} />
        </div>
      </StickyColumn>

      <div className="mb-8 mt-4 sm:mb-10 lg:hidden">
        <Image
          src={`/images/about.jpg`}
          alt={altText}
          width={600}
          height={600}
          className="size-32 rounded-md object-cover sm:size-52"
          priority
        />
      </div>

      <div className="space-y-20 lg:pr-10 lg:pt-4">
        <About />
      </div>
    </div>
  );
}

// About
function About() {
  return (
    <article>
      <section className="mb-10 sm:mb-16">
        <LeadContent />
      </section>

      <section className="mb-10 sm:mb-16">
        <BodyContent />
      </section>

      <section className="border-t border-stone-900/15 pt-10 sm:pt-16">
        <ConnectContent />
      </section>
    </article>
  );
}

// Lead
function LeadContent() {
  return (
    <div className="text-2xl font-semibold leading-[100%] sm:text-4xl sm:font-semibold sm:leading-[110%]">
      <h1>
        <AccentText className="font-normal underline decoration-dotted decoration-2 underline-offset-[3px] sm:decoration-[3px] sm:underline-offset-4">
          People Work
        </AccentText>{" "}
        is a small digital hustle on a mission to{" "}
        <AccentText className="font-normal underline decoration-dotted decoration-2 underline-offset-[3px] sm:decoration-[3px] sm:underline-offset-4">
          demystify job titles
        </AccentText>{" "}
        and show the real people behind them through simple Q&As. No fluff, no
        jargon — just honest{" "}
        <AccentText className="font-normal underline decoration-dotted decoration-2 underline-offset-[3px] sm:decoration-[3px] sm:underline-offset-4">
          career insights
        </AccentText>{" "}
        from professionals actually doing the work.
      </h1>
    </div>
  );
}

// Body
function BodyContent() {
  return (
    <div className="flex flex-col text-xl leading-[120%] opacity-95 sm:text-3xl sm:leading-[120%]">
      <div className="mb-10">
        <Answer>
          It’s for anyone curious about the *diverse paths people take in their
          careers* — because let's be honest, most job titles are confusing as
          hell 😬🫠🤯
        </Answer>
      </div>

      <div className="mb-10">
        <h4 className="mb-3 font-semibold">What we do</h4>

        <div className="space-y-10">
          <Answer>
            We ask everyone the *same thoughtful questions* and get wildly
            different (or wildly similar), refreshingly *human responses*.
          </Answer>
          <Answer>
            Whether you're figuring out your first job, planning your next move,
            or just curious about how other people spend their 9-to-5 (or let's
            be real, 9-to-9), this is the place to explore *how others got where
            they are* — and what their *work actually looks like* day to day.
          </Answer>
          <Answer>
            We feature *all kinds of professionals* — Creative Directors, Data
            Scientists, AI Engineers, CEOs, Health Coaches, startup founders,
            marketing professionals, and more. Every career path is unique, and
            that's what makes every story interesting.
          </Answer>
        </div>
      </div>

      <div className="mb-16">
        <h4 className="mb-3 font-semibold">How we do</h4>
        <Answer>
          Everything's structured in a *clean Q&A format* that makes it *easy to
          explore* and *compare* different voices side by side. You get
          authentic insights, diverse perspectives, and real takeaways to help
          you navigate your own professional path.
        </Answer>
      </div>

      <div className="flex flex-col">
        <p>More is coming!</p>
        <p>xx PW 🍪🥛</p>
      </div>
    </div>
  );
}

// Connect
function ConnectContent() {
  return (
    <div>
      <div className="mb-6 space-y-1 text-3xl">
        <Answer>
          *We'd love to hear from you!* Whether it's about our services,
          potential collaborations, or business opportunities.
        </Answer>
      </div>

      <ButtonLink
        href={CONTACT.email}
        className="h-32 w-full rounded-md pb-px text-xl tracking-[0.04ch] sm:h-52 sm:rounded-lg sm:text-3xl"
      >
        Drop an Email
      </ButtonLink>
    </div>
  );
}
