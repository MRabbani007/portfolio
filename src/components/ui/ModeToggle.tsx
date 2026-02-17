"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all active:scale-90 hover:border-sky-500/50 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -40 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-sky-400"
          >
            <Moon size={20} strokeWidth={2.5} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-amber-500"
          >
            <Sun size={20} strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2026 Background Glow: Subtle light spill based on mode */}
      <div className="absolute inset-0 pointer-events-none transition-opacity opacity-0 group-hover:opacity-100">
        <div
          className={`absolute inset-0 blur-xl ${isDark ? "bg-sky-500/10" : "bg-amber-500/10"}`}
        />
      </div>
    </button>
  );
}
