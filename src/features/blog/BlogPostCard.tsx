"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, GitBranch } from "lucide-react";
import Link from "next/link";

export default function BlogPostCard({ post }: { post: any }) {
  return (
    <motion.div
      key={post.id}
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
            {post.summary}
          </p>
        </div>

        <Link
          href={`/blog/${post.id}`}
          className="flex items-center gap-2 text-sm font-bold dark:text-white group-hover:gap-4 transition-all"
        >
          Access Document <ArrowUpRight size={18} className="text-sky-500" />
        </Link>
      </div>

      {/* 2026 Innovation: The System-Log Sidebar */}
      <div className="lg:w-64 border-l border-slate-100 dark:border-white/5 lg:pl-8 space-y-6">
        <div className="space-y-4 font-mono text-[10px] text-slate-500">
          <div className="flex justify-between border-b border-dashed border-slate-200 dark:border-white/10 pb-2">
            <span className="flex items-center gap-1.5 uppercase">
              <Clock size={12} /> Read Time
            </span>
            {/* <span className="text-slate-900 dark:text-slate-300 font-bold">
              {post.readTime}
            </span> */}
          </div>
          <div className="flex justify-between border-b border-dashed border-slate-200 dark:border-white/10 pb-2">
            <span className="flex items-center gap-1.5 uppercase">
              <GitBranch size={12} /> Version
            </span>
            {/* <span className="text-sky-500 font-bold tracking-tighter">
              {post.version}
            </span> */}
          </div>
          <div className="flex justify-between border-b border-dashed border-slate-200 dark:border-white/10 pb-2">
            <span className="flex items-center gap-1.5 uppercase tracking-tighter">
              Updated
            </span>
            <span className="text-slate-900 dark:text-slate-300 font-bold">
              {post.updatedAt.toDateString()}
            </span>
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-sky-500 transition-colors cursor-pointer"
            >
              <Hash size={10} />{tag}
            </span>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
}
