"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { CONTACTS } from "@/lib/contacts";

const menuItems = [
  { label: "Projects", url: "/projects", desc: "View my latest builds" },
  { label: "Blog", url: "/blog", desc: "Insights & tutorials" },
  { label: "Roadmap", url: "/roadmap", desc: "My learning journey" },
  { label: "Resources", url: "/resources", desc: "Tools I recommend" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll with a modern approach
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* 2026 Trigger: Minimal & Tactile */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white md:hidden active:scale-90 transition-transform"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-white/90 dark:bg-[#030712]/95 flex flex-col"
          >
            {/* Header Area */}
            <div className="flex items-center justify-between p-6 h-24">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black tracking-tighter dark:text-white"
              >
                MR<span className="text-sky-500">.</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-full bg-slate-100 dark:bg-white/10 dark:text-white active:rotate-90 transition-transform"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Navigation: Staggered Entrance */}
            <nav className="flex-1 px-6 py-10 overflow-y-auto">
              <div className="space-y-8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.url}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between"
                    >
                      <div className="space-y-1">
                        <span className="text-4xl font-bold tracking-tight dark:text-white group-active:text-sky-500 transition-colors">
                          {item.label}
                        </span>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowRight className="text-slate-300 dark:text-slate-700 group-active:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Footer Area: Contacts & Utility */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-8 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]"
            >
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-6">
                Connect
              </p>
              <div className="flex items-center gap-6">
                {CONTACTS.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 active:scale-90 active:bg-sky-500 active:text-white transition-all"
                  >
                    <div className="w-6 h-6">{item.icon}</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
