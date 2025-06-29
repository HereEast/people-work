import { ButtonLink } from "~/components/ui";
import { EmojiImage } from "~/components/EmojiImage";
import { AccentText } from "~/components/AccentText";

export function HeroSection() {
  return (
    <section className="mb-10 mt-8 max-w-8xl sm:mb-16 sm:mt-12">
      <p className="text-3xl font-medium leading-[110%] sm:text-5xl sm:leading-[95%] lg:text-7xl lg:leading-[95%]">
        Real people,{" "}
        <AccentText className="hero-accent text-[116%]">real jobs</AccentText>.
        Brief Q&As that{" "}
        <AccentText className="hero-accent text-[116%]">
          demystify titles
        </AccentText>
        , share routines, and explore what keeps them going.
        <EmojiImage
          name="red-cat-face"
          classname="relative -top-px ml-1 mr-2 inline-block size-10 object-contain leading-none sm:ml-3 sm:mr-4 sm:size-14 lg:size-[68px]"
        />
        <ButtonLink
          href="#subscribe-form"
          variant="link"
          underline
          className="md:decoration-4 md:underline-offset-[6px]"
        >
          <AccentText className="text-[116%]">Subscribe</AccentText>
        </ButtonLink>
      </p>
    </section>
  );
}
