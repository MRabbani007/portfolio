import Link from "next/link";
import React from "react";

export default function MagicButton({
  title,
  icon,
  position,
  handleClick,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}) {
  // inset-[-1000%]
  return (
    <div className="relative block overflow-hidden min-h-12 w-fit p-[1px] focus:outline-none my-4 mx-2 z-0">
      <div className="z-10 block h-full w-full cursor-pointer items-center justify-center bg-zinc-950 hover:bg-zinc-950 py-4 px-8 text-sm font-medium text-white backdrop-blur-3xl">
        {position === "left" && icon}
        {/* <Link href="#projects">{title}</Link> */}
        {children}
        {position === "right" && icon}
      </div>{" "}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 to-white -z-10 animate-[spin_2s_linear_infinite]"></div>
    </div>
  );
}

// bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#facc15_50%,#E2CBFF_100%)]
