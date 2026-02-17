"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import Wrapper from "@/components/Wrapper";
import Slide from "@/components/animate/Slide";

export default function CTASection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mrabbani@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#030712]">
      <Wrapper>
        <Slide from="bottom">
          <div className="relative group rounded-[2.5rem] p-1 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent transition-all duration-500 hover:from-sky-500/50">
            <div className="relative rounded-[2.4rem] bg-slate-50 dark:bg-[#080C14] px-8 py-20 text-center overflow-hidden">
              {/* Subtle Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app')]" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
                  Let&apos;s bring your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                    vision to life.
                  </span>
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                  Currently accepting new projects and collaborations. Reach out
                  to start a conversation about your next move.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl dark:shadow-white/5"
                  >
                    Start a Project
                    <ArrowRight size={20} />
                  </Link>

                  <button
                    onClick={handleCopy}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  >
                    {copied ? (
                      <Check size={18} className="text-emerald-500" />
                    ) : (
                      <Copy size={18} />
                    )}
                    {copied ? "Email Copied" : "Copy Email"}
                  </button>
                </div>
              </div>

              {/* Decorative Background Glows */}
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/10 dark:bg-sky-500/5 blur-[100px] rounded-full" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full" />
            </div>
          </div>
        </Slide>
      </Wrapper>
    </section>
  );
}
