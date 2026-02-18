"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Code2, Globe, Database, Layers, Zap, Rocket } from "lucide-react";
import Wrapper from "@/components/Wrapper";

const ROADMAP_STEPS = [
  {
    phase: "Phase 01",
    title: "The Core Foundations",
    desc: "Mastering the fundamental protocols of the modern web.",
    skills: [
      "HTML5 Semantics",
      "Modern CSS (Grid/Flex)",
      "JS Engine Internals",
      "DOM Manipulation",
    ],
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    phase: "Phase 02",
    title: "Logic & Scalability",
    desc: "Transitioning from scripts to robust, type-safe architectures.",
    skills: [
      "TypeScript Mastery",
      "Functional Programming",
      "Git / GitHub Flows",
      "NPM Ecosystem",
    ],
    icon: <Code2 className="w-6 h-6" />,
    color: "from-sky-500 to-indigo-500",
  },
  {
    phase: "Phase 03",
    title: "Frontend Excellence",
    desc: "Engineering high-fidelity user experiences with React & Next.js.",
    skills: [
      "Server Components",
      "Tailwind CSS",
      "Framer Motion",
      "State Management",
    ],
    icon: <Layers className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    phase: "Phase 04",
    title: "System Design & Data",
    desc: "Building the backbone: Databases, APIs, and cloud infrastructure.",
    skills: [
      "Node.js / Express",
      "PostgreSQL & Prisma",
      "NoSQL (MongoDB)",
      "REST & GraphQL",
    ],
    icon: <Database className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    phase: "Phase 05",
    title: "Production & Ops",
    desc: "Deploying and monitoring resilient, global-scale applications.",
    skills: [
      "Docker & Containers",
      "CI/CD Pipelines",
      "AWS / Vercel Deploy",
      "Security (Auth/JWT)",
    ],
    icon: <Rocket className="w-6 h-6" />,
    color: "from-orange-500 to-rose-600",
  },
];

export default function RoadmapPage() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white dark:bg-[#030712] overflow-hidden">
      <Wrapper>
        {/* 1. Spatial Header */}
        <div className="mb-32 max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px]"
          >
            Engineering Path v.2026
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter dark:text-white mt-4 leading-none">
            The Roadmap <span className="text-slate-400">.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-500 dark:text-slate-400">
            A strategic progression for building production-grade software in
            the modern ecosystem.
          </p>
        </div>

        {/* 2. The Neural Pipeline */}
        <div className="relative">
          {/* Central Animated Nerve Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-indigo-500 to-rose-500 -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-32">
            {ROADMAP_STEPS.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                {/* Connector Node */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-[#030712] border-2 border-slate-200 dark:border-slate-800 -translate-x-1/2 z-10 flex items-center justify-center shadow-xl group">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.color} animate-pulse`}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full md:w-[45%] ml-16 md:ml-0 group"
                >
                  <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 transition-all duration-500 hover:border-sky-500/30">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white`}
                      >
                        {step.icon}
                      </div>
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        {step.phase}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black dark:text-white mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-[10px] font-bold dark:text-slate-300 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Hidden spacer for desktop symmetry */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Final Call: Mentorship/Start */}
        <div className="mt-40 p-12 md:p-20 rounded-[3.5rem] bg-slate-900 dark:bg-white text-center">
          <Zap className="w-12 h-12 text-sky-500 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-black text-white dark:text-slate-950 tracking-tighter mb-8">
            Ready to deploy your <br /> future career?
          </h2>
          <button className="px-10 py-5 bg-sky-500 hover:bg-sky-400 text-white rounded-3xl font-black text-sm uppercase tracking-widest transition-all active:scale-95">
            Initiate Training
          </button>
        </div>
      </Wrapper>
    </main>
  );
}
