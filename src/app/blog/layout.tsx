import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Mohamad's blog on web development topics",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">{children}</div>;
}
