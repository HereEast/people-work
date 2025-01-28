import { IconProps } from "~/utils/types";

export function Logo() {
  return (
    <div className="flex h-8 items-center justify-between overflow-hidden rounded-full bg-stone-950 pl-3 pr-2 transition hover:shadow-lg hover:shadow-blue-600 sm:gap-10">
      <h1 className="text-nowrap text-[22px] font-bold text-stone-50 xs:text-2xl">
        PEOPLE–WORK.NET
      </h1>

      <div className="flex shrink-0 items-center">
        <LogoIcon className="h-[19px]" />
        {/* <span className="text-lg font-bold text-stone-50">(.NET)</span> */}
      </div>
    </div>
  );
}

function LogoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 32 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.26316 0H13.6842V2.10526H15.7895V4.21053H17.8947V6.31579H18.9474V13.6842H17.8947V15.7895H15.7895V17.8947H13.6842V20H5.26316V17.8947H3.15789V15.7895H1.05263V13.6842H0V6.31579H1.05263V4.21053H3.15789V2.10526H5.26316V0Z"
        fill="white"
      />
      <path
        d="M17.8946 0H26.3157V2.10526H28.4209V4.21053H30.5262V6.31579H31.5788V13.6842H30.5262V15.7895H28.4209V17.8947H26.3157V20H17.8946V17.8947H15.7894V15.7895H13.6841V13.6842H12.6315V6.31579H13.6841V4.21053H15.7894V2.10526H17.8946V0Z"
        fill="white"
      />
      <rect
        x="4.47363"
        y="11.5801"
        width="1.57895"
        height="1.57895"
        fill="black"
      />
      <rect
        x="25.5264"
        y="11.5801"
        width="1.57895"
        height="1.57895"
        fill="black"
      />
      <rect
        x="6.05273"
        y="13.1577"
        width="1.57895"
        height="1.57895"
        fill="black"
      />
      <rect
        x="23.9473"
        y="13.1577"
        width="1.57895"
        height="1.57895"
        fill="black"
      />
      <rect
        x="7.63147"
        y="14.7371"
        width="16.3158"
        height="1.57895"
        fill="black"
      />
      <rect x="5.52637" y="5" width="1.57895" height="5.26316" fill="black" />
      <rect
        x="4.47412"
        y="6.05273"
        width="3.68421"
        height="3.15789"
        fill="black"
      />
      <rect x="15" y="5" width="1.57895" height="5.26316" fill="black" />
      <rect
        x="13.9473"
        y="6.05273"
        width="3.68421"
        height="3.15789"
        fill="black"
      />
      <rect x="24.4741" y="5" width="1.57895" height="5.26316" fill="black" />
      <rect
        x="23.4211"
        y="6.05273"
        width="3.68421"
        height="3.15789"
        fill="black"
      />
    </svg>
  );
}
