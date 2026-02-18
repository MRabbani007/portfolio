"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Bookmark,
  Wrench,
  BookOpen,
  Library,
  Layout,
  Sparkles,
} from "lucide-react";
import Wrapper from "@/components/Wrapper";

const CATEGORIES = ["All", "Tools", "Learning", "Libraries", "Design"];

const RESOURCES = [
  {
    id: "res-01",
    title: "BuiltWith",
    category: "Tools",
    desc: "Instant insight into the technology stack of any website.",
    url: "https://builtwith.com",
    tags: ["OSINT", "DevOps"],
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    id: "res-02",
    title: "One Page Love",
    category: "Design",
    desc: "High-end inspiration for single-page website architectures.",
    url: "https://onepagelove.com/",
    tags: ["UI/UX", "Inspiration"],
    icon: <Layout className="w-5 h-5" />,
  },
  {
    id: "res-03",
    title: "Roadmap.sh",
    category: "Learning",
    desc: "Community-driven visual roadmaps for modern software roles.",
    url: "https://roadmap.sh",
    tags: ["Career", "Fullstack"],
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: "res-04",
    title: "Framer Motion",
    category: "Libraries",
    desc: "The gold standard for production-ready animations in React.",
    url: "https://www.framer.com",
    tags: ["Animation", "React"],
    icon: <Library className="w-5 h-5" />,
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = RESOURCES.filter(
    (res) =>
      (activeCategory === "All" || res.category === activeCategory) &&
      res.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white dark:bg-[#030712]">
      <Wrapper>
        {/* 1. Spatial Header & Search Hub */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter dark:text-white leading-none">
              Resources <span className="text-sky-500">.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400">
              A curated collection of tools and intelligence for building the
              future.
            </p>
          </div>

          <div className="w-full lg:w-96 relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-sky-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search resource..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all dark:text-white"
            />
          </div>
        </div>

        {/* 2. Tactical Filtering */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950"
                  : "bg-slate-50 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Fluid Resource Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredResources.map((res) => (
              <motion.a
                key={res.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                href={res.url}
                target="_blank"
                className="group relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/5 hover:border-sky-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 rounded-2xl bg-white dark:bg-white/5 text-sky-500 border border-slate-100 dark:border-white/5 shadow-sm group-hover:scale-110 transition-transform">
                    {res.icon}
                  </div>
                  <Bookmark
                    className="text-slate-300 dark:text-slate-700 group-hover:text-sky-500 transition-colors"
                    size={20}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black dark:text-white leading-none">
                      {res.title}
                    </h3>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                    {res.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {res.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-sky-500/5 text-sky-600 dark:text-sky-400 text-[10px] font-black uppercase tracking-widest rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2026 Interaction: Floating "Launch" Indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  <ExternalLink size={18} className="text-sky-500" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 4. Zero State */}
        {filteredResources.length === 0 && (
          <div className="py-32 text-center space-y-4">
            <Sparkles className="mx-auto w-12 h-12 text-slate-200 dark:text-slate-800" />
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              No resources found in this frequency
            </p>
          </div>
        )}
      </Wrapper>
    </main>
  );
}
