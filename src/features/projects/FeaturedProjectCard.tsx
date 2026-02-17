"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Layers, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function FeaturedProject({ project }: { project: any }) {
  return (
    <section className="relative w-full mb-32 group">
      {/* 1. Background Depth Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative overflow-hidden rounded-[3.5rem] bg-slate-50 dark:bg-[#080808] border border-slate-200 dark:border-white/5 shadow-2xl">
        <div className="flex flex-col lg:flex-row min-h-[600px] max-h-[80vh]">
          {/* Visual Side: Left (60% width) */}
          <div className="relative w-full lg:w-[60%] overflow-hidden bg-slate-200 dark:bg-slate-900">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full min-h-[400px]"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-opacity duration-700 group-hover:opacity-80"
                priority
              />
              {/* Overlay: Technical Scrim */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-50 dark:to-[#080808] hidden lg:block" />
            </motion.div>

            {/* Float Badge over Image */}
            <div className="absolute bottom-8 left-8 flex gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white text-xs font-black uppercase tracking-tighter flex items-center gap-2">
                <Monitor size={14} className="text-sky-400" />
                Live Architecture
              </div>
            </div>
          </div>

          {/* Content Side: Right (40% width) */}
          <div className="w-full lg:w-[50%] p-8 lg:p-16 flex flex-col justify-center relative">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-sky-500" />
                  <span className="text-sky-500 font-black uppercase text-[10px] tracking-[0.3em]">
                    Flagship Implementation
                  </span>
                </div>
                <h2 className="text-5xl lg:text-5xl font-black tracking-tighter dark:text-white leading-none">
                  {project.title}
                </h2>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Engineering Specs Block */}
              <div className="grid grid-cols-2 gap-6 p-6 rounded-3xl bg-slate-100/50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-widest">
                    Logic Tier
                  </p>
                  <p className="text-sm font-bold dark:text-slate-200 flex items-center gap-2">
                    <Layers size={14} className="text-sky-500" /> Distributed
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-widest">
                    Security
                  </p>
                  <p className="text-sm font-bold dark:text-slate-200 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-500" />{" "}
                    AES-256
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex-1 min-w-[160px] h-14 flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-sky-500/10"
                >
                  Inspect Live <ExternalLink size={18} />
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="w-14 h-14 flex items-center justify-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
                >
                  <FaGithub size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
