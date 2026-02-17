"use client";

import React from "react";
import { motion } from "framer-motion";
import SKILLS_TECHNICAL from "@/lib/skills";

interface Skill {
  name: string;
  icon?: React.ElementType;
  image?: string;
  color?: string;
}

type Props = {
  items: Skill[];
  speed?: number; // Lower is faster for this specific implementation
};

const speed = 40;

export default function TechMarquee() {
  // Duplicate items to ensure a seamless infinite loop
  const duplicatedItems = [
    ...SKILLS_TECHNICAL,
    ...SKILLS_TECHNICAL,
    ...SKILLS_TECHNICAL,
  ];

  return (
    <section className="py-12 bg-white dark:bg-[#030712] overflow-hidden">
      <div className="relative flex items-center">
        {/* Left & Right Gradient Fades for Depth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-20 bg-gradient-to-r from-white dark:from-[#030712] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-20 bg-gradient-to-l from-white dark:from-[#030712] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm group hover:border-sky-500/50 transition-colors duration-300"
            >
              <div
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  color:
                    item.name === "Next.js" || item.name === "GitHub"
                      ? "currentColor"
                      : item.color,
                }}
              >
                {item.icon ? (
                  <item.icon size={32} />
                ) : null
                // <img
                //   src={`/assets/skills/${item.image}`}
                //   alt={item.name}
                //   className="w-full h-full object-contain"
                // />
                }
              </div>
              <span className="text-slate-600 dark:text-slate-400 font-medium whitespace-nowrap text-sm md:text-base">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Subtle Label */}
      <div className="mt-8 flex justify-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 font-bold">
          Core Technologies & Ecosystem
        </p>
      </div>
    </section>
  );
}
