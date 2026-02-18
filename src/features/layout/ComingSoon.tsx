import Slide from "@/components/animate/Slide";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Wrapper from "@/components/Wrapper";
import { Rocket, Mail, Github, Linkedin } from "lucide-react";
import React from "react";

export default function ComingSoon() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
      {/* Background Elements synced with Hero.tsx */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-500/20 blur-[120px] animate-pulse dark:bg-sky-600/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Wrapper className="relative z-10 max-w-4xl w-full px-6 py-20 flex flex-col items-center text-center">
        {/* Status Badge */}
        <Slide from="top">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50/50 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400 text-sm font-semibold backdrop-blur-sm mb-8">
            <Rocket size={16} className="animate-bounce" />
            <span>Deployment in Progress</span>
          </div>
        </Slide>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <TextGenerateEffect
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white"
            words={"Something Great is Building."}
          />
          <Slide from="bottom" delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Refining the architecture and polishing the interface. We're
              <span className="text-sky-600 dark:text-sky-400 font-medium">
                {" "}
                currently optimizing{" "}
              </span>
              the experience for you.
            </p>
          </Slide>
        </div>

        {/* Glassmorphism Action Card */}
        <Slide from="bottom" delay={0.4} className="w-full max-w-lg">
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">
              Get Notified on Launch
            </h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="engineer@domain.com"
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                />
              </div>
              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95 whitespace-nowrap">
                Notify Me
              </button>
            </form>
          </div>
        </Slide>

        {/* Social Bridge */}
        <Slide
          from="bottom"
          delay={0.6}
          className="mt-12 flex items-center gap-6 text-slate-400 dark:text-slate-500"
        >
          <a href="#" className="hover:text-sky-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-sky-500 transition-colors">
            <Linkedin size={24} />
          </a>
        </Slide>
      </Wrapper>
    </section>
  );
}
