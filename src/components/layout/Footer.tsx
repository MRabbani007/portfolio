import { CONTACTS } from "@/lib/contacts";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-start sm:items-center sm:flex-row flex-col flex-wrap sm:justify-between gap-4 p-4 sm:p-8 bg-gradient-to-b from-sky-900 to-sky-950">
      <div className="space-y-4">
        <h4 className="uppercase tracking-wide">Contacts</h4>
        <div className="flex items-center gap-4">
          {CONTACTS.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              target="_blank"
              className="p-2 sm:p-3 shrink rounded-full bg-zinc-300 dark:bg-zinc-800 hover:scale-105 transition ease-in duration-200"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-white">
        <h4 className="uppercase tracking-wide">Quick Links</h4>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      {/* <div className="">
          <h4 className="text-accent uppercase tracking-wide text-xl font-bold">
            Site Map
          </h4>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div> */}
    </div>
  );
}
