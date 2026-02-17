"use client";

import React from "react";
import Wrapper from "@/components/Wrapper";
import Slide from "@/components/animate/Slide";
import { Cpu, Database, Layout } from "lucide-react";

const EXPERTISE = [
  {
    title: "Frontend Engineering",
    desc: "Building performant, accessible, and type-safe interfaces using modern frameworks.",
    icon: <Layout className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Backend Systems",
    desc: "Designing robust microservices, specialized APIs, and optimized database schemas.",
    icon: <Database className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "System Architecture",
    desc: "An engineer’s approach to scalable infrastructure and clean, maintainable codebases.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#030712]">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Expertise & Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Combining technical depth with creative execution to deliver
              high-impact software solutions.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-200 dark:bg-slate-800 mx-10 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERTISE.map((item, index) => (
            <Slide key={item.title} delay={index * 0.1} from="bottom">
              <div className="group relative p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-sky-500/50 transition-all hover:shadow-xl dark:hover:shadow-sky-500/5">
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </Slide>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
