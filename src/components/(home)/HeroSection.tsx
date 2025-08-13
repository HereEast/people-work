import { ButtonLink } from "~/components/ui";
import { AccentText } from "~/components/AccentText";

export function HeroSection() {
  return (
    <section className="mb-10 mt-8 max-w-hero sm:mb-16 sm:mt-12">
      <h1 className="text-2xl font-medium leading-[115%] sm:text-5xl sm:leading-[95%] lg:text-7xl lg:leading-[95%]">
        Real people,{" "}
        <AccentText underline className="sm:underline-offset-[0.08em]">
          real jobs
        </AccentText>
        . Simple Q&As that{" "}
        <AccentText underline className="sm:underline-offset-[0.08em]">
          demystify titles
        </AccentText>{" "}
        and explore what professionals actually do.{" "}
        <ButtonLink
          href="#subscribe-form"
          variant="link"
          underline
          className="md:decoration-4 md:underline-offset-[6px]"
        >
          <AccentText>Subscribe</AccentText>
        </ButtonLink>
      </h1>
    </section>
  );
}
