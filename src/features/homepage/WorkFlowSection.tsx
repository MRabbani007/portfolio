"use client";

import React from "react";
import { motion } from "framer-motion";
import Wrapper from "@/components/Wrapper";
import { Search, PenTool, Terminal, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "Analyzing technical requirements and system constraints to align with business goals.",
    icon: <Search className="w-6 h-6" />,
    color: "group-hover:text-blue-500",
  },
  {
    title: "Architecture",
    desc: "Designing scalable schemas and component hierarchies before a single line of code.",
    icon: <PenTool className="w-6 h-6" />,
    color: "group-hover:text-purple-500",
  },
  {
    title: "Development",
    desc: "Writing type-safe, modular code with integrated unit testing and peer reviews.",
    icon: <Terminal className="w-6 h-6" />,
    color: "group-hover:text-emerald-500",
  },
  {
    title: "Deployment",
    desc: "Automated CI/CD pipelines, performance monitoring, and iterative optimization.",
    icon: <Rocket className="w-6 h-6" />,
    color: "group-hover:text-sky-500",
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="py-32 bg-white dark:bg-[#030712] relative overflow-hidden"
    >
      <Wrapper>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">
            The <span className="text-sky-500">Engineering</span> Lifecycle
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My methodology prioritizes long-term maintainability over quick
            hacks, ensuring your product scales as fast as your user base.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Animated Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-100 dark:bg-slate-800 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-sky-500 to-transparent w-1/3"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative z-10 flex flex-col items-center"
            >
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-8 transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(14,165,233,0.3)] relative">
                <div
                  className={`transition-colors duration-300 ${step.color} text-slate-400`}
                >
                  {step.icon}
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 dark:bg-sky-500 text-white text-[10px] font-bold flex items-center justify-center">
                  0{index + 1}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold dark:text-white mb-3 group-hover:text-sky-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>

              {/* Checkmark indicator for "Finished" feel on mobile */}
              <div className="mt-6 md:hidden">
                <CheckCircle2 className="w-5 h-5 text-slate-200 dark:text-slate-800" />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03),transparent_70%)] pointer-events-none" />
    </section>
  );
}
