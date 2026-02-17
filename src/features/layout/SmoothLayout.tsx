"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import Lenis from "lenis"; // Import core library
// Recommended for 2026 smooth scroll

export default function SmoothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 1. 2026 Progressive Scroll Logic (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 2. Global Progress Engine
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative selection:bg-sky-500/30 selection:text-sky-900 dark:selection:text-sky-200">
      {/* A. Global Progress Bar (Tactile Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-sky-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* B. Spatial Grain Overlay (2026 "Material" Aesthetic) */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] dark:opacity-[0.05] contrast-150 brightness-100">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* C. Page Transition Engine */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1], // Quintic out: the "Vercel" curve
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* D. Bottom-Right "System Status" (Optional 2026 Flex) */}
      <div className="fixed bottom-6 left-8 z-50 hidden lg:flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
        <span className="font-mono text-[9px] font-black uppercase tracking-tighter text-slate-400 dark:text-slate-600">
          Status: System Optimal // V.2026.4
        </span>
      </div>
    </div>
  );
}
