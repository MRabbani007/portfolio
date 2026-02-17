"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Zap, Database } from "lucide-react";
import Wrapper from "@/components/Wrapper";
import Slide from "@/components/animate/Slide";

const PROJECTS = [
  {
    title: "E-Commerce Engine",
    category: "Full-Stack Development",
    problem:
      "Legacy platform suffered from slow checkout and poor mobile conversion rates.",
    solution:
      "Built a headless architecture using Next.js 15 with server-side caching and Stripe integration.",
    impact: "40% faster page loads; 15% increase in mobile conversion.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project1.png",
    links: { github: "#", live: "#" },
    metric: {
      label: "Performance Score",
      value: "98/100",
      icon: <Zap size={16} />,
    },
  },
  {
    title: "Real-time Analytics Dashboard",
    category: "System Architecture",
    problem:
      "Data processing bottlenecks caused 5-second delays in live monitoring.",
    solution:
      "Implemented WebSocket clusters and Redis caching for sub-100ms data synchronization.",
    impact: "Scale-ready for 10k+ concurrent users with zero latency spikes.",
    tech: ["Node.js", "Socket.io", "Redis", "Tailwind"],
    image: "/project2.png",
    links: { github: "#", live: "#" },
    metric: {
      label: "Sync Speed",
      value: "<100ms",
      icon: <Database size={16} />,
    },
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-black transition-colors duration-500"
    >
      <Wrapper>
        <div className="mb-20">
          <Slide from="left">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              A collection of systems I&apos;ve engineered, focusing on
              performance, scalability, and solving real-world technical
              bottlenecks.
            </p>
          </Slide>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <Slide
              key={project.title}
              from={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                {/* 1. Visual Side */}
                <div className="w-full lg:w-1/2 group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 dark:border-slate-800 aspect-video bg-white dark:bg-slate-900 shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* 2. Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="text-sky-500 font-semibold tracking-widest uppercase text-xs">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Engineering Context: Problem/Solution/Impact */}
                  <div className="grid gap-4 border-l-2 border-slate-200 dark:border-slate-800 pl-6 py-2">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">
                        Problem
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-sky-500/80 uppercase tracking-tighter mb-1">
                        Solution
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div className="bg-sky-500/5 p-3 rounded-xl border border-sky-500/10 inline-block">
                      <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-tighter mb-1">
                        Key Impact
                      </p>
                      <p className="text-slate-900 dark:text-white font-medium italic">
                        &quot;{project.impact}&quot;
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags & Performance Metric */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg border border-transparent hover:border-sky-500/30 transition-all cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
                    <div className="flex items-center gap-1.5 text-emerald-500 font-bold text-xs">
                      {project.metric.icon}
                      {project.metric.label}: {project.metric.value}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-6 pt-4">
                    <Link
                      href={project.links.live}
                      className="flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:text-sky-500 transition-colors"
                    >
                      <ExternalLink size={18} /> Live Site
                    </Link>
                    <Link
                      href={project.links.github}
                      className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={18} /> Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
