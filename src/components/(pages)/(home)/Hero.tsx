import { Button } from "~/components/ui/Button";
import { EmojiImage } from "~/components/EmojiImage";
import { AccentText } from "~/components/AccentText";

export function Hero() {
  return (
    <div className="max-w-9xl">
      <p className="text-3xl font-medium leading-[110%] sm:text-5xl sm:leading-[110%] lg:text-7xl">
        Real people, <AccentText className="text-[116%]">real jobs</AccentText>.
        Brief Q&As that{" "}
        <AccentText className="text-[116%]">demystify titles</AccentText>
        , share routines, and explore what keeps them going.
        <EmojiImage
          name="red-cat-face"
          classname="relative -top-0.5 ml-1 mr-2 inline-block size-10 object-contain leading-none sm:ml-3 sm:mr-4 sm:size-14 md:size-[68px]"
        />
        <Button
          href="#subscribe-form"
          view="link"
          underline
          className="md:decoration-4 md:underline-offset-[6px]"
        >
          <AccentText className="text-[116%]">Subscribe</AccentText>
        </Button>
      </p>
    </div>
  );
}
