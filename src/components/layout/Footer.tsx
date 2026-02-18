"use client";

import React from "react";
import Link from "next/link";
import { CONTACTS } from "@/lib/data/contacts";
import Wrapper from "@/components/Wrapper";

const footer_items = [
  {
    title: "MRabbani",
    text: "Full-stack developer focused on building polished, high-performance web applications.",
  },
  {
    title: "Sitemap",
    children: [
      { title: "Portfolio", url: "/portfolio" },
      { title: "Projects", url: "/projects" },
      { title: "Blog", url: "/blog" },
      { title: "About Me", url: "/about" },
    ],
  },
  {
    title: "Expertise",
    children: [
      { title: "Frontend Engineering", url: "#" },
      { title: "Backend Systems", url: "#" },
      { title: "Cloud Architecture", url: "#" },
      { title: "UI/UX Design", url: "#" },
    ],
  },
  {
    title: "Resources",
    children: [
      { title: "Send Message", url: "/contact" },
      { title: "Documentation", url: "#" },
      { title: "Style Guide", url: "#" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#030712] border-t border-slate-100 dark:border-slate-900 transition-colors duration-500">
      <Wrapper>
        {/* Top Section: Navigation Columns */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column - Wider than others */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white"
            >
              MR<span className="text-sky-500">.</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed text-sm md:text-base">
              {footer_items[0].text}
            </p>
          </div>

          {/* Dynamic Columns */}
          {footer_items.slice(1).map((group, idx) => (
            <div key={idx} className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.children?.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.url}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal & Social */}
        <div className="py-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500 order-2 md:order-1">
            &copy; {currentYear} Mohamad Rabbani.{" "}
            <span className="hidden sm:inline">
              Built with Next.js & Tailwind.
            </span>
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            {CONTACTS.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                target="_blank"
                className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={item.url}
              >
                {/* Ensure item.icon renders properly here */}
                <span className="w-5 h-5 block">{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
