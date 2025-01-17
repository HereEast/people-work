import { RatRightPixelIcon } from "../icons/Rat";

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
          <span>{formatDate}</span>
        </div>

        <div className="flex justify-end gap-2">
          <div className="w-20">
            <RatRightPixelIcon />
          </div>
          <span>this website in a wip</span>
        </div>
      </div>
    </footer>
  );
}
