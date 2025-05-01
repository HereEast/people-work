import Image from "next/image";

export function LinkHoverIcon() {
  return (
    <div className="absolute -top-2.5 left-[105%] hidden size-6 rotate-[40deg] group-hover:block">
      <Image
        src="/images/emojis/pointing-finger.png"
        alt="Link"
        width={28}
        height={28}
        className="absolute top-0.5 object-cover"
        priority
      />
    </div>
  );
}
