import Slide from "@/components/animate/Slide";
import ClipWave from "@/components/ClipWave";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Wrapper from "@/components/Wrapper";
import { ArrowRight, Code2, Cpu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-500"
    >
      {/* 1. Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-500/20 blur-[120px] animate-pulse dark:bg-sky-600/10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-600/10" />

        {/* Subtle Grid Pattern for "Engineer" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Wrapper className="relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Column: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          {/* Badge: Bridging the Gap */}
          <Slide from="top">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50/50 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400 text-sm font-medium backdrop-blur-sm">
              <Cpu size={14} className="animate-spin-slow" />
              <span>Full-Stack Developer</span>
            </div>
          </Slide>

          <div className="space-y-4 max-w-2xl">
            <TextGenerateEffect
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
              words={"Engineering Digital Experiences."}
            />
            <Slide from="bottom" delay={0.2}>
              {/* <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                I leverage my background in{" "}
                <span className="text-sky-600 font-medium">
                  Computer Engineering
                </span>{" "}
                to build high-performance, scalable web applications with a
                focus on system architecture and clean code.
              </p> */}
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Full-stack developer focused on building scalable systems with
                <span className="text-slate-900 dark:text-white font-medium">
                  {" "}
                  technical rigor{" "}
                </span>
                and polished user interfaces.
              </p>
            </Slide>
          </div>

          {/* Action Buttons */}
          <Slide
            from="bottom"
            delay={0.4}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-sky-500/25 transition-all active:scale-95"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="group flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              My Journey
            </Link>
          </Slide>
        </div>

        {/* Right Column: Visual Component */}
        <Slide from="right" className="hidden lg:flex justify-center relative">
          {/* Glassmorphism Card for Code Preview/Hardware Mockup */}
          <div className="relative w-full max-w-[500px] aspect-square group">
            {/* Decorative Rings */}
            <div className="absolute inset-0 border-2 border-dashed border-sky-500/20 rounded-full animate-[spin_20s_linear_infinite]" />

            {/* Hero Image Container */}
            <div className="absolute inset-4 rounded-3xl overflow-hidden bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-center justify-center">
                <Code2
                  size={120}
                  className="text-sky-500/20 absolute animate-pulse"
                />
                {/* <Image
                  src="/computer.png"
                  alt="System Architecture Illustration"
                  fill
                  className="object-contain drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-105"
                /> */}
              </div>
            </div>
          </div>
        </Slide>
      </Wrapper>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full rotate-180 opacity-50 dark:opacity-20 pointer-events-none">
        <ClipWave />
      </div>
    </section>
  );
}
