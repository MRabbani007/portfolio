"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Terminal,
  Hash,
  Clock,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import Wrapper from "@/components/Wrapper";

const POSTS = [
  {
    id: "01",
    title: "The Shift to Local-First Architectures",
    excerpt:
      "Exploring why synchronization is the new hard problem in web development and how to solve it.",
    category: "Architecture",
    date: "Feb 12, 2026",
    readTime: "8 min",
    version: "v1.0.4",
    tags: ["Distributed Systems", "Sync", "React"],
  },
  {
    id: "02",
    title: "Optimizing Next.js 15 for LCP",
    excerpt:
      "A deep dive into server-side image processing and its impact on Core Web Vitals.",
    category: "Performance",
    date: "Jan 28, 2026",
    readTime: "12 min",
    version: "v2.1.0",
    tags: ["Next.js", "Performance", "Web-Vitals"],
  },
];

export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white dark:bg-[#030712]">
      <Wrapper>
        {/* 1. Technical Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-24 border-b border-slate-100 dark:border-white/5 pb-12">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-sky-500 font-mono text-xs font-black uppercase tracking-widest">
              <Terminal size={14} />
              <span>{"//MRABBANI/KNOWLEDGE_BASE"}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter dark:text-white leading-none">
              The Feed <span className="text-slate-400">.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              Technical insights on system design, performance, and modern web
              engineering.
            </p>
          </div>

          {/* Integrated Search Command Palette Style */}
          <div className="w-full lg:w-96 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400">
              <Search size={18} />
              <span className="text-[10px] font-bold border border-slate-200 dark:border-white/10 px-1.5 py-0.5 rounded uppercase">
                Cmd + K
              </span>
            </div>
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-24 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-sky-500 outline-none transition-all dark:text-white text-sm"
            />
          </div>
        </div>

        {/* 2. Article Feed: High-Density Documentation Style */}
        <div className="space-y-6">
          {POSTS.map((post) => (
            <motion.div
              key={post.id}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col lg:flex-row gap-8 p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#080808] border border-slate-200 dark:border-white/5 hover:border-sky-500/30 transition-all duration-500"
            >
              {/* Main Content Area */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-sky-500/10 text-sky-500 text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {post.category}
                  </span>
                  <div className="h-px flex-1 bg-slate-100 dark:bg-white/5" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black dark:text-white leading-tight group-hover:text-sky-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>

                <button className="flex items-center gap-2 text-sm font-bold dark:text-white group-hover:gap-4 transition-all">
                  Access Document{" "}
                  <ArrowUpRight size={18} className="text-sky-500" />
                </button>
              </div>

              {/* 2026 Innovation: The System-Log Sidebar */}
              <div className="lg:w-64 border-l border-slate-100 dark:border-white/5 lg:pl-8 space-y-6">
                <div className="space-y-4 font-mono text-[10px] text-slate-500">
                  <div className="flex justify-between border-b border-dashed border-slate-200 dark:border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 uppercase">
                      <Clock size={12} /> Read Time
                    </span>
                    <span className="text-slate-900 dark:text-slate-300 font-bold">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-slate-200 dark:border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 uppercase">
                      <GitBranch size={12} /> Version
                    </span>
                    <span className="text-sky-500 font-bold tracking-tighter">
                      {post.version}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-slate-200 dark:border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 uppercase tracking-tighter">
                      Updated
                    </span>
                    <span className="text-slate-900 dark:text-slate-300 font-bold">
                      {post.date}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-sky-500 transition-colors cursor-pointer"
                    >
                      <Hash size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

{
  /* <div className="">
      <header className="pt-20 bg-gradient-to-br from-sky-900 via-blue-950 to-indigo-950/90 dark:from-zinc-800 dark:to-black dark:via-zinc-900 rounded-br-[100px] overflow-hidden">
        <div className="h-[30vh] md:h-[50vh] relative flex items-center justify-center m-0 lg:m-0 lg:p-0 lg:max-w-none">
          <BlogBanner />
        </div>
      </header>
      <main className="p-4 md:p-6 lg:p-8 max-w-[1024px] mx-auto">
        <div>
          <h1>Blog</h1>
          <p>
            Welcome to my corner of the web, where I share insights, tips, and
            tutorials on all things web development
          </p>
        </div>
        <FeaturedPosts />
        <CategoriesList />
        <SearchBlog />
        <div className="flex items-center gap-4">
          <Link
            href={"/blog"}
            className={
              (category || search ? "" : "bg-zinc-400 dark:bg-zinc-800") +
              " py-2 px-4  w-fit hover:bg-zinc-300 duration-200"
            }
          >
            Latest Posts
          </Link>
          {category && (
            <p className="py-2 px-4 bg-zinc-400 dark:bg-zinc-800 w-fit">
              {`Category: ${category}`}
            </p>
          )}
          {search && (
            <p className="py-2 px-4 bg-zinc-400 dark:bg-zinc-800 w-fit">
              {`Search: ${search}`}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {blogs.map((blog, idx) => (
            <CardBlog key={idx} blog={blog} />
          ))}
        </div>
        <div>
          <Pagination count={count} activePage={page} />
        </div>
      </main>
    </div> */
}
