import { ButtonLink } from "../ui";
import { AccentText } from "../AccentText";
import { Answer } from "../Answer";

import { CONTACT } from "~/utils/constants";

// About
export function About() {
  return (
    <div className="space-y-10">
      <LeadContent />
      <BodyContent />
      <ConnectContent />
    </div>
  );
}

// Lead
function LeadContent() {
  return (
    <div className="text-2xl font-semibold leading-[100%] sm:text-4xl sm:font-semibold sm:leading-[110%]">
      <p>
        <AccentText className="font-normal underline decoration-dotted decoration-[2.5px] underline-offset-4 sm:decoration-[3px] sm:underline-offset-[4px]">
          People Work
        </AccentText>{" "}
        is a small digital hustle on a mission to{" "}
        <AccentText className="font-normal underline decoration-dotted decoration-[2.5px] underline-offset-4 sm:decoration-[3px] sm:underline-offset-[4px]">
          demystify job titles
        </AccentText>{" "}
        and show the real people behind them. No fluff, no jargon — just{" "}
        <AccentText className="font-normal underline decoration-dotted decoration-[2.5px] underline-offset-4 sm:decoration-[3px] sm:underline-offset-[4px]">
          honest Q&As
        </AccentText>{" "}
        about real work.
      </p>
    </div>
  );
}

// Body
function BodyContent() {
  return (
    <div className="flex flex-col gap-10 text-xl leading-[120%] opacity-95 sm:text-3xl sm:leading-[120%]">
      <div>
        <Answer>
          It’s for anyone curious about the *diverse paths people take in their
          careers* — because let's be honest, most job titles are confusing as
          hell 😬🫠🤯
        </Answer>
      </div>

      <div>
        <h2 className="mb-3 font-semibold">What we do</h2>

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
            We feature people from *all kinds of backgrounds* and *industries*
            because career paths are rarely linear, and that's what makes them
            interesting.
          </Answer>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-3 font-semibold">How we do</h2>
        <Answer>
          Everything's structured in a *clean Q&A format* that makes it *easy to
          explore* and *compare* different voices side by side. You get
          authentic stories, diverse perspectives, and real takeaways to help
          you navigate your own path. It's *career insight* without the
          corporate nonsense.
        </Answer>
      </div>

      <div className="flex flex-col gap-2">
        <p>More is coming!</p>
        <p>xx PW 🍪🥛</p>
      </div>
    </div>
  );
}

// Connect
export function ConnectContent() {
  return (
    <div className="border-t border-stone-900/15 pt-16">
      <div className="mb-6 space-y-1 text-3xl">
        <Answer>
          *We'd love to hear from you!* Whether it's about our services,
          potential collaborations, or business opportunities.
        </Answer>
      </div>

      <ButtonLink
        href={CONTACT.email}
        className="h-16 w-full rounded-md bg-stone-800 pb-px text-xl tracking-[0.04ch] text-stone-50 hover:bg-stone-900 sm:h-52 sm:rounded-lg sm:text-3xl"
      >
        Drop an Email
      </ButtonLink>
    </div>
  );
}
