import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function WidthWrapper({ children, className }: Props) {
  return <div className={"" + (className || "")}>{children}</div>;
}
