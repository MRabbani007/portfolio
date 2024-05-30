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
    <main className="min-h-screen pt-20 px-4 md:px-6 prose prose-base prose-slate mx-auto">
      {children}
    </main>
  );
}
