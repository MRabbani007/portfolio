import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: Props) {
  return (
    <div
      className={
        "max-w-[1024px] mx-auto px-4 md:px-10 lg:mx-10 lg:max-w-[90vw]  " +
        (className || "")
      }
    >
      {children}
    </div>
  );
}
