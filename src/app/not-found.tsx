import Slide from "@/components/animate/Slide";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Wrapper from "@/components/Wrapper";
import { Home, Terminal, AlertTriangle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
      {/* Background elements synced with Hero.tsx */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-500/10 blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Wrapper className="relative z-10 flex flex-col items-center text-center space-y-8">
        <Slide from="top">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50/50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400 text-sm font-medium backdrop-blur-sm">
            <AlertTriangle size={14} />
            <span>Error 404: Resource_Not_Found</span>
          </div>
        </Slide>

        <div className="space-y-4">
          <TextGenerateEffect
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white"
            words={"Lost in Space?"}
          />
          <Slide from="bottom" delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              The endpoint you are trying to fetch returned a{" "}
              <span className="font-mono text-red-500">null</span> value. Let's
              get you back to the main branch.
            </p>
          </Slide>
        </div>

        {/* Re-using your Hero button style */}
        <Slide from="bottom" delay={0.4} className="flex gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-sky-500/25 transition-all active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </Slide>

        {/* Subtle Visual Placeholder */}
        <div className="mt-12 opacity-20 dark:opacity-10">
          <Terminal size={120} className="animate-bounce" />
        </div>
      </Wrapper>
    </section>
  );
}
