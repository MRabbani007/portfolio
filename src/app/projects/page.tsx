"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Zap,
  Shield,
  Cpu,
  ArrowUpRight,
  Code2,
  MessageSquare,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import FeaturedProjectCard from "@/features/projects/FeaturedProjectCard";
import { FaGithub } from "react-icons/fa6";
import { featuredProject, PROJECTS } from "@/lib/data/projects";

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="pt-32 pb-20 bg-white dark:bg-[#030712] flex flex-col gap-8">
      {/* Header: Fluid Typography */}
      <Wrapper>
        <div className="w-full px-6 md:px-12 flex flex-col justify-center py-16 md:py-24 mb-20 gap-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter dark:text-white">
            Selected <span className="text-sky-500">Works.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-xl">
            Spatial exploration of engineered solutions and technical
            architectures.
          </p>
        </div>
      </Wrapper>

      {/* Featured Project */}
      <section className="min-h-screen flex justify-center items-center max-w-7xl mx-auto">
        <FeaturedProjectCard project={featuredProject} />
      </section>

      {/* The Grid: Dynamic & Offset */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">
        {PROJECTS.map((project) => (
          <motion.div
            layoutId={project.id}
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5"
          >
            {/* Card Image with Parallax-ready Scale */}
            <motion.div className="absolute inset-0 z-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
              <span className="text-sky-400 text-xs font-black uppercase tracking-widest mb-2">
                {project.tag}
              </span>
              <h3 className="text-4xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm max-w-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Spatial Expansion Overlay */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-2xl"
            />

            {/* Expanded Card */}
            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-6xl h-full max-h-[850px] bg-white dark:bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Visual Half */}
              <div className="relative w-full lg:w-1/2 h-64 lg:h-full">
                <Image
                  src={PROJECTS.find((p) => p.id === selectedId)?.image || ""}
                  alt="Project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay" />
              </div>

              {/* Data Half */}
              <div className="w-full lg:w-1/2 p-8 md:p-16 overflow-y-auto space-y-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-5xl font-black dark:text-white mb-2">
                      {PROJECTS.find((p) => p.id === selectedId)?.title}
                    </h2>
                    <span className="text-sky-500 font-bold uppercase tracking-tighter text-sm">
                      {PROJECTS.find((p) => p.id === selectedId)?.tag}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-4 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:rotate-90 transition-transform"
                  >
                    <X size={24} />
                  </button>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {PROJECTS.find((p) => p.id === selectedId)?.longDesc}
                </p>

                {/* 2026 Metric Block */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <Zap className="text-sky-500 mb-2" size={20} />
                    <p className="text-2xl font-black dark:text-white">
                      {PROJECTS.find((p) => p.id === selectedId)?.metrics.speed}
                    </p>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Latency
                    </p>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <Shield className="text-emerald-500 mb-2" size={20} />
                    <p className="text-2xl font-black dark:text-white">
                      {
                        PROJECTS.find((p) => p.id === selectedId)?.metrics
                          .uptime
                      }
                    </p>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Reliability
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="flex-1 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90">
                    Live Launch <ExternalLink size={18} />
                  </button>
                  <button className="px-6 py-4 border border-slate-200 dark:border-white/10 rounded-2xl dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <FaGithub size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden bg-white dark:bg-[#030712]">
        <Wrapper>
          <div className="relative group p-1 rounded-[3.5rem] bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-transparent transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(14,165,233,0.3)]">
            <div className="relative overflow-hidden rounded-[3.4rem] bg-slate-50 dark:bg-[#080808] px-8 py-20 md:px-16 md:py-24 text-center">
              {/* 2026 Background Detail: Radial "Core" Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-10">
                {/* Engineering Badge */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm"
                >
                  <Cpu size={16} className="text-sky-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Systems Ready for Deployment
                  </span>
                </motion.div>

                <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                  Let&apos;s build the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                    next generation.
                  </span>
                </h3>

                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                  Combining technical rigor with refined aesthetics to create
                  software that defines the future.
                </p>

                {/* Action Array */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                  <Link
                    href="/contact"
                    className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-3xl font-black text-sm transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-sky-500/10"
                  >
                    Initiate Project
                    <MessageSquare
                      size={18}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </Link>

                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-10 py-5 rounded-3xl font-black text-sm transition-all hover:bg-slate-100 dark:hover:bg-white/10"
                  >
                    Technical Resume
                    <FileText size={18} className="text-sky-500" />
                  </Link>
                </div>

                {/* Floating Tech Indicators */}
                <div className="pt-8 flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  <Code2 size={24} />
                  <div className="w-1 h-1 rounded-full bg-slate-400" />
                  <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
                    V.2026.04
                  </span>
                  <div className="w-1 h-1 rounded-full bg-slate-400" />
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Subtle Grid Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

// function ExpandedCard({
//   selectedId,
//   setSelectedId,
// }: {
//   selectedId: string;
//   setSelectedId: Dispatch<SetStateAction<string | null>>;
// }) {
//   return (
//     <motion.div
//       layoutId={selectedId}
//       className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white dark:bg-[#050505] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col lg:flex-row"
//     >
//       {/* Visual Half: Left Side */}
//       <div className="relative w-full lg:w-1/2 h-64 lg:h-full">
//         <Image
//           src={PROJECTS.find((p) => p.id === selectedId)?.image || ""}
//           alt="Project detail"
//           fill
//           className="object-cover"
//         />
//         {/* 2026 Overlay: Dynamic Grain & Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

//         {/* Floating Tag over Image */}
//         <div className="absolute top-8 left-8 flex gap-2">
//           {PROJECTS.find((p) => p.id === selectedId)?.tech.map((t) => (
//             <span
//               key={t}
//               className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold rounded-full uppercase"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Content Half: Right Side */}
//       <div className="w-full lg:w-1/2 p-8 md:p-12 overflow-y-auto space-y-8 flex flex-col">
//         <div className="flex justify-between items-start">
//           <div className="space-y-1">
//             <h2 className="text-4xl font-black dark:text-white leading-none">
//               {PROJECTS.find((p) => p.id === selectedId)?.title}
//             </h2>
//             <p className="text-sky-500 font-mono text-sm uppercase tracking-widest font-bold">
//               Deployment: STABLE 1.0.4
//             </p>
//           </div>
//           <button
//             onClick={() => setSelectedId(null)}
//             className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white active:scale-90 transition-all"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Project Stats Dashboard */}
//         <div className="grid grid-cols-3 gap-3">
//           {[
//             {
//               label: "Latency",
//               value: PROJECTS.find((p) => p.id === selectedId)?.metrics.speed,
//               icon: <Zap size={14} />,
//             },
//             {
//               label: "Reliability",
//               value: PROJECTS.find((p) => p.id === selectedId)?.metrics.uptime,
//               icon: <Shield size={14} />,
//             },
//             { label: "Core", value: "x64-Node", icon: <Cpu size={14} /> },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/5"
//             >
//               <div className="text-slate-400 mb-1">{stat.icon}</div>
//               <p className="text-lg font-black dark:text-white">{stat.value}</p>
//               <p className="text-[9px] font-bold text-slate-500 uppercase">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>

//         <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
//           {PROJECTS.find((p) => p.id === selectedId)?.longDesc}
//         </p>

//         {/* 2026 Feature: The "System Log" Terminal */}
//         <div className="mt-auto pt-6 space-y-4">
//           <div className="rounded-2xl bg-black p-5 font-mono text-[10px] leading-relaxed text-emerald-500/80 border border-emerald-500/10 shadow-inner">
//             <p className="flex gap-2">
//               <span className="text-emerald-500/30">12:00:01</span> [INFO]
//               Initializing Quantum engine...
//             </p>
//             <p className="flex gap-2">
//               <span className="text-emerald-500/30">12:00:02</span> [INFO]
//               Mounting {PROJECTS.find((p) => p.id === selectedId)?.tech[0]}{" "}
//               clusters...
//             </p>
//             <p className="flex gap-2 animate-pulse">
//               <span className="text-emerald-500">❯</span> System health optimal.
//               Listening on port 3000.
//             </p>
//           </div>

//           <div className="flex gap-3">
//             <Link
//               href="#"
//               className="flex-1 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20"
//             >
//               Explore Source <Github size={18} />
//             </Link>
//             <Link
//               href="#"
//               className="px-6 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl dark:text-white hover:bg-white/10"
//             >
//               <ExternalLink size={20} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
