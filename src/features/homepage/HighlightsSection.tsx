"use client";

import React from "react";
import { motion } from "framer-motion";
import Wrapper from "@/components/Wrapper";

const highlights = [
  { value: "5+", label: "Years Experience" },
  { value: "25+", label: "Projects Built" },
  { value: "10+", label: "Global Clients" },
  { value: "100%", label: "Quality Score" },
];

export default function HighlightsSection() {
  return (
    <section
      id="stats"
      className="py-20 bg-white dark:bg-[#030712] border-y border-slate-100 dark:border-slate-900/50"
    >
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-x-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center px-4 space-y-2 group"
            >
              {/* Minimalist Tech Typography */}
              <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white transition-transform duration-300 group-hover:-translate-y-1">
                {item.value}
              </span>

              <div className="flex flex-col items-center">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 text-center">
                  {item.label}
                </span>
                {/* Subtle Indicator */}
                <div className="mt-2 h-[2px] w-4 bg-sky-500 opacity-0 group-hover:opacity-100 group-hover:w-8 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
