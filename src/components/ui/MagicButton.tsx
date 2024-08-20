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
      <div className="absolute inset-[0] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#facc15_50%,#E2CBFF_100%)] z-0" />
      <div className="block h-full w-full cursor-pointer items-center justify-center bg-zinc-950/70 hover:bg-zinc-950/95 py-4 px-8 text-sm font-medium text-white backdrop-blur-3xl z-10">
        {position === "left" && icon}
        {/* <Link href="#projects">{title}</Link> */}
        {children}
        {position === "right" && icon}
      </div>
    </div>
  );
}
