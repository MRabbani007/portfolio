import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: Props) {
  return (
    <div className={"max-w-[1024px] mx-auto w-full " + (className || "")}>
      {children}
    </div>
  );
}
