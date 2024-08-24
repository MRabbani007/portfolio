import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Mohamad's blog on web development topics",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
