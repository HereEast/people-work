import { ButtonLink } from "~/components/ui";
import { EmojiImage } from "~/components/EmojiImage";
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
        and explore what professionals actually do.
        <span className="relative ml-2 mr-3 inline-block size-5 shrink-0 sm:ml-4 sm:mr-5 sm:size-9 lg:size-[58px]">
          <EmojiImage
            name="red-cat-face"
            classname="absolute size-full top-0.5 scale-[1.25]"
          />
        </span>
        <ButtonLink
          href="#subscribe-form"
          variant="link"
          underline
          className="md:decoration-4 md:underline-offset-[6px]"
          aria-label="Subscribe to newsletter"
        >
          <AccentText>Subscribe</AccentText>
        </ButtonLink>
      </h1>
    </section>
  );
}
