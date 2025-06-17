import { AccentText } from "./AccentText";
import { EmojiImage } from "./EmojiImage";
import { SubscribeForm } from "./subscribe-form/SubscribeForm";

export function SubscribeSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-6">
        <EmojiImage name="popcorn" classname="size-32" />

        <div className="flex flex-col items-center text-xl font-medium leading-[120%] sm:text-3xl sm:font-normal">
          <h2 id="subscribe-form">There's more to come!</h2>
          <p>
            <AccentText>Subscribe</AccentText> <span>to stay tuned.</span>
          </p>
        </div>
      </div>

      <SubscribeForm />
    </div>
  );
}
