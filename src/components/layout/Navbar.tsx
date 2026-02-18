"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "../ui/ModeToggle";
import MobileMenu from "./MobileMenu";

const items = [
  { label: "Projects", url: "/projects", id: "projects" },
  { label: "Blog", url: "/blog", id: "blog" },
  { label: "Roadmap", url: "/roadmap", id: "roadmap" },
  { label: "Resources", url: "/resources", id: "resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (url: string) => pathname.startsWith(url);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo - Refined Branding */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 font-black text-3xl tracking-tighter text-slate-900 dark:text-white"
        >
          MR<span className="text-sky-500 group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Navigation - Pill Shape Design */}
        <nav className="hidden md:flex items-center bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 px-1.5 py-1.5 rounded-full backdrop-blur-md">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`relative px-5 py-2 text-sm font-semibold transition-colors rounded-full ${
                isActive(item.url)
                  ? "text-white dark:text-slate-900"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {isActive(item.url) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <MobileMenu />
          </div>

          {/* "Let's Talk" Quick CTA (Desktop) */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center justify-center px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-sky-500/20"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
