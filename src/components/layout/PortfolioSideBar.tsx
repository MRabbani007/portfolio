"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  LayoutGrid,
  Cpu,
  Zap,
  Terminal,
  MessageSquare,
  Share2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

const navSections = [
  { id: "hero", label: "Intro", icon: LayoutGrid },
  { id: "stack", label: "Stack", icon: Cpu },
  { id: "workflow", label: "Pipeline", icon: Terminal },
  { id: "projects", label: "Projects", icon: Zap },
  { id: "contact", label: "Connect", icon: MessageSquare },
];

export default function PortfolioSideBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // 1. Scroll Progress Logic (The "Circle's" brain)
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]); // Hide until user starts scrolling

  // 2. Share Functionality
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 3. Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger highlight if the section is 20% visible
          // or if it's large and covering the top of the viewport
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        // 0.2 means it highlights as soon as 20% of the project section appears
        threshold: 0.2,
        // rootMargin 'grows' the detection area to catch sections earlier
        rootMargin: "-10% 0px -40% 0px",
      },
    );

    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (typeof window === "undefined") return null;

  return createPortal(
    <motion.aside
      style={{ opacity }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-6"
    >
      {/* Progress Ring: Visualizing "Reading Depth" */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-slate-200 dark:stroke-slate-800"
            strokeWidth="2"
            fill="transparent"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-sky-500"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="0 1"
            style={{ pathLength }}
          />
        </svg>
        <span className="absolute text-[10px] font-black text-slate-400">
          {Math.round(scrollYProgress.get() * 100)}%
        </span>
      </div>

      {/* Main Navigation Dock */}
      <div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={cn(
          "flex flex-col gap-2 p-2 rounded-[2rem] border transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          "bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl border-slate-200/50 dark:border-white/10 shadow-2xl",
          isExpanded ? "w-44" : "w-14",
        )}
      >
        {navSections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={cn(
                "relative flex items-center h-10 rounded-full transition-all duration-300 group",
                isActive
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg"
                  : "text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5",
              )}
            >
              <div className="flex items-center justify-center min-w-[40px] h-10">
                <section.icon size={18} />
              </div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    className="text-[11px] font-bold uppercase tracking-wider pr-4"
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Utility: Share Button */}
      <button
        onClick={handleShare}
        className={cn(
          "group w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-xl",
          copied
            ? "bg-emerald-500 text-white"
            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-sky-500",
        )}
      >
        {copied ? (
          <Check size={20} />
        ) : (
          <Share2
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
        )}

        {/* Tooltip for Copy Success */}
        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: -60 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-0 px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-lg shadow-lg"
            >
              COPIED
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.aside>,
    document.body,
  );
}
