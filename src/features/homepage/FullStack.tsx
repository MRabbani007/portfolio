"use client";

import React from "react";
import Wrapper from "@/components/Wrapper";
import Slide from "@/components/animate/Slide";
import { Server, Globe, Cpu, Layers } from "lucide-react";

export default function FullStack() {
  return (
    <section
      id="stack"
      className="py-24 bg-slate-50/50 dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      <Wrapper>
        {/* Header with Engineer-specific context */}
        <div className="mb-16 text-center">
          <Slide from="top">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Full-Stack <span className="text-sky-500">Architecture</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Applying electrical engineering precision to software development.
              I build resilient systems from the database layer to the user
              interface.
            </p>
          </Slide>
        </div>

        {/* 2025 Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 grid-rows-2 gap-4 auto-rows-[250px]">
          {/* 1. Front-End: Large Feature Card */}
          <div className="md:col-span-3 lg:col-span-7 row-span-2 group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0A0A] p-8 transition-all hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={180} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-3">
                  Front-End Engineering
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                  Modern, responsive, and performance-first interfaces built
                  with React, Next.js, and Tailwind CSS.
                </p>
              </div>
              {/* Floating Tech Stack Bubbles */}
              <div className="flex gap-2 flex-wrap">
                {["React", "Next.js", "Typescript", "Framer"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Back-End: Vertical Tall Card */}
          <div className="md:col-span-3 lg:col-span-5 row-span-1 group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0A0A] p-8 transition-all hover:border-indigo-500/50">
            <div className="flex items-start justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-2">
                  Scalable Back-End
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  RESTful APIs and Cloud infrastructure designed for
                  reliability.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Engineering Specialty: Custom "Hardware-to-Web" highlight */}
          <div className="md:col-span-6 lg:col-span-5 row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white">
            <div className="relative z-10">
              <Cpu size={32} className="mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Systems Mindset</h3>
              <p className="text-sky-50 opacity-90">
                Leveraging my Computer Engineering roots to optimize memory
                management and system architecture.
              </p>
            </div>
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
