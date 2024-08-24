import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts",
  description: "Mohamad's blog on web development topics",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // dark:prose-invert
  return (
    <div className="min-h-screen shrink-0 min-w-full flex flex-col mx-auto">
      {children}
    </div>
  );
}
