import Slide from "@/components/animate/Slide";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Wrapper from "@/components/Wrapper";
import ExperienceTimeline from "@/features/about/ExperienceTimeline";
import { User, Code, BookOpen, Layers, ExternalLink } from "lucide-react";
import React from "react";

export default function About() {
  const skills = [
    { category: "Frontend", tools: "React, Next.js, Tailwind, TypeScript" },
    { category: "Backend", tools: "Node.js, PostgreSQL, Prisma, Redis" },
    { category: "Tools", tools: "Docker, AWS, Git, Figma" },
  ];

  return (
    <main>
      <section className="relative min-h-screen w-full bg-slate-50 dark:bg-[#030712] transition-colors duration-500 overflow-hidden">
        {/* Visual Identity Background elements synced with Hero.tsx */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-600/5" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <Wrapper className="relative z-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: The Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <Slide from="top">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50/50 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400 text-sm font-medium backdrop-blur-sm">
                  <User size={14} />
                  <span>The Developer Behind the Code</span>
                </div>
              </Slide>

              <div className="space-y-6">
                <TextGenerateEffect
                  className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
                  words={"Bridging Logic and Creativity."}
                />
                <Slide from="bottom" delay={0.2}>
                  <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    <p>
                      My journey started at the intersection of{" "}
                      <span className="text-sky-600 font-medium">
                        system architecture
                      </span>{" "}
                      and human-centric design. I believe that code isn't just
                      about solving problems; it's about engineering experiences
                      that feel intuitive and performant.
                    </p>
                    <p>
                      With a background in Computer Engineering, I approach
                      every project with technical rigor—ensuring that the
                      underlying systems are as polished as the user interface
                      on top.
                    </p>
                  </div>
                </Slide>
              </div>

              {/* Quick Stats/Links */}
              <Slide from="bottom" delay={0.4} className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-sky-500/20 transition-all"
                >
                  Download Resume <ExternalLink size={16} />
                </a>
              </Slide>
            </div>

            {/* Right Column: Technical Stack (Using Glassmorphism from Hero) */}
            <div className="lg:col-span-5">
              <Slide from="right" className="space-y-6">
                <div className="relative p-8 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layers size={80} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                    <Code className="text-sky-500" size={20} />
                    Tech Stack
                  </h3>

                  <div className="space-y-6">
                    {skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <p className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                          {skill.category}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.tools}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education/Focus Card */}
                <div className="p-8 rounded-3xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800/50">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                    <BookOpen className="text-sky-500" size={18} />
                    Current Focus
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Currently exploring Distributed Systems and
                    Micro-interactions to build more resilient and engaging web
                    applications.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </Wrapper>
      </section>
      <ExperienceTimeline />
    </main>
  );
}
