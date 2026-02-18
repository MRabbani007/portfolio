import Slide from "@/components/animate/Slide";
import Wrapper from "@/components/Wrapper";
import { EXPERIENCE } from "@/lib/data/experience";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import React from "react";

export default function ExperienceTimeline() {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-[#030712]">
      <Wrapper>
        <Slide from="top" className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Roadmap
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From industrial automation and site engineering to full-stack
            software development. A journey defined by technical precision and
            large-scale systems.
          </p>
        </Slide>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line (The Circuit Trace) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-slate-300 dark:via-slate-800 to-transparent transform md:-translate-x-1/2" />

          {/* Education Entry (The Foundation) */}
          <TimelineItem
            side="right"
            icon={<GraduationCap className="text-white" size={18} />}
            title="Bachelor in Electrical and Computer Engineering"
            subtitle="Academic Foundation"
            period="Completed"
            isEducation
          />

          {/* Experience Entries */}
          {EXPERIENCE.map((item, index) => (
            <TimelineItem
              key={item.id}
              side={index % 2 === 0 ? "left" : "right"}
              icon={<Briefcase className="text-white" size={18} />}
              title={item.position}
              subtitle={item.company}
              project={item.project}
              period={item.period}
              description={item.responsibilities[0]} // Featured responsibility
              isLatest={index === 0}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

function TimelineItem({
  side,
  icon,
  title,
  subtitle,
  project,
  period,
  description,
  isLatest,
  isEducation,
}: any) {
  const isLeft = side === "left";

  return (
    <div
      className={`relative flex items-center justify-between mb-16 w-full ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Spacer for Desktop */}
      <div className="hidden md:block w-5/12" />

      {/* Center Icon */}
      <div
        className={`absolute left-4 md:left-1/2 w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#030712] z-10 transform -translate-x-1/2 flex items-center justify-center shadow-xl 
        ${isLatest ? "bg-sky-500 animate-pulse" : "bg-slate-900 dark:bg-slate-700"} 
        ${isEducation ? "bg-indigo-600" : ""}`}
      >
        {icon}
      </div>

      {/* Content Card */}
      <Slide
        from={isLeft ? "left" : "right"}
        className="w-full md:w-5/12 pl-12 md:pl-0"
      >
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-colors backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-mono text-xs mb-2">
            <Calendar size={12} />
            {period}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-3 uppercase tracking-wide">
            {subtitle}
          </p>

          {project && (
            <div className="flex items-start gap-2 text-xs text-slate-400 dark:text-slate-500 mb-4 italic">
              <MapPin size={12} className="mt-0.5 shrink-0" />
              {project}
            </div>
          )}

          {description && (
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Slide>
    </div>
  );
}
