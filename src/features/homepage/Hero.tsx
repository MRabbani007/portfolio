import Slide from "@/components/animate/Slide";
import ClipWave from "@/components/ClipWave";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Wrapper from "@/components/Wrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-gradient-to-b from-sky-800 to-sky-950 dark:from-zinc-800 dark:to-zinc-900 flex items-center">
      {/* Decorative gradient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/30 blur-3xl opacity-40 dark:bg-sky-400/20" />

      <div className="absolute bottom-0 left-0 right-0 h-[20vh] flex justify-center items-end overflow-x-clip">
        <ClipWave />
      </div>

      <Wrapper className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:max-w-[90vw]">
        <div className="max-w-xl text-center lg:text-left relative z-10">
          <TextGenerateEffect
            words={"Transform concepts into seamless experiences"}
          />
          <Slide from="bottom" className="mt-4">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              I’m a full-stack developer specializing in creating performant,
              visually appealing, and accessible digital experiences.
            </p>
          </Slide>
          <Slide from="bottom" className="mt-6">
            {/* <Button
              asChild
              variant="default"
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6"
            >
              <Link href="/portfolio">View My Work</Link>
            </Button> */}
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/15 hover:border-white/20"
            >
              {/* animated beam (uses animate-shine from tailwind.config) */}
              <span className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shine pointer-events-none" />

              <span className="relative z-10 flex items-center gap-2">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Slide>
        </div>

        <div className="relative w-[300px] h-[250px] hidden lg:block">
          <Image
            src="/computer.png"
            alt="Laptop illustration"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </Wrapper>
    </section>
  );
}
