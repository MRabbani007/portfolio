"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Hero from "@/features/homepage/Hero";
import ProjectsSection from "@/features/homepage/ProjectsSection";
import WorkflowSection from "@/features/homepage/WorkFlowSection";
import CTASection from "@/features/homepage/CTASection";
import TestimonialsSection from "@/features/homepage/TestimonialsSection";
import ContactSections from "@/features/homepage/ContactSections";
import TechMarquee from "@/components/TechMarquee";
import FullStack from "@/features/homepage/FullStack";
import HighlightsSection from "@/features/homepage/HighlightsSection";
import PortfolioSideBar from "@/components/layout/PortfolioSideBar";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamad Rabbani",
    jobTitle: "Full-Stack Software Developer",
    url: "https://your-portfolio-domain.com",
    sameAs: ["https://github.com", "https://linkedin.com"],
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "System Architecture",
    ],
    description:
      "Professional Full-Stack Developer creating scalable and high-performance web solutions.",
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Injecting the JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex-1 flex flex-col bg-white dark:bg-[#030712] transition-colors duration-500">
        {/* 1. Global Reading Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-sky-500 origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* 2. Global Background Decor */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] dark:bg-sky-500/[0.02]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/[0.02]" />
        </div>

        <PortfolioSideBar />

        <main className="relative z-10 flex flex-col w-full">
          <Hero />

          <FullStack />
          <TechMarquee />

          <WorkflowSection />

          <HighlightsSection />

          <ProjectsSection />
          {/* Conversion Phase */}
          <div className="relative">
            {/* Subtle separator for CTA */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

            <CTASection />
            <TestimonialsSection />
            <ContactSections />
          </div>
        </main>
      </div>
    </>
  );
}
