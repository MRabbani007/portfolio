"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import Wrapper from "@/components/Wrapper";
import Slide from "@/components/animate/Slide";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Project Manager",
    text: "Mohamad is a talented developer who delivers on time and with exceptional quality. His attention to technical detail is unmatched.",
    avatar: "AJ",
  },
  {
    name: "John Doe",
    role: "Lead Designer",
    text: "Working with him was seamless—he translates complex design ideas into functional, high-performance products beautifully.",
    avatar: "JD",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="feedback"
      className="py-24 bg-slate-50 dark:bg-black transition-colors duration-500 overflow-hidden relative"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_70%)] pointer-events-none" />

      <Wrapper className="relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Slide from="top">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Trusted by <span className="text-sky-500">Collaborators</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Feedback from designers and managers I&apos;ve worked with to
              build impactful digital solutions.
            </p>
          </Slide>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <Slide key={t.name} delay={index * 0.1} from="bottom">
              <div className="relative h-full group p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-sky-500/30 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-sky-500/10">
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 dark:text-slate-800 group-hover:text-sky-500/10 transition-colors" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="space-y-6">
                    {/* Star Rating for visual trust */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-sky-500 text-sky-500"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
