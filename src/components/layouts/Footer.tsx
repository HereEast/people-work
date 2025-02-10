import Image from "next/image";

export function Footer() {
  const date = new Date();

  const formatDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

  return (
    <footer className="w-full p-4 text-2xl font-bold">
      <div className="w-full items-center sm:flex sm:justify-between">
        <div className="text-right">
          <span className="leading-none">{formatDate}</span>
        </div>

        <div className="flex items-center justify-end gap-1">
          <div className="relative h-8 w-20">
            {/* <Image
              src="/gifs/rat.gif"
              width={400}
              height={400}
              alt="A running rat"
              className="absolute inset-0 m-auto object-contain"
            /> */}
          </div>
          <span className="leading-none">this website in a wip</span>
        </div>
      </div>
    </footer>
  );
}
