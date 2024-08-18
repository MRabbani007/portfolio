"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Slide from "@/components/ui/Slide";

const items = [
  {
    title: "Objective",
    text: "Mission-driven engineer with a passion for thoughtful UI design and a futuristic user experience.",
  },
  {
    title: "Background",
    text: "8 years of experience in oil & gas mega projects and the skills to complete work in a well-organized and professional manner.",
  },
  {
    title: "Experience",
    text: "Well experienced in working with small and large teams of diverse backgrounds across multiple companies.",
  },
];

export default function PortfolioAbout() {
  return (
    <div id="about" className="section-container">
      <section className="px-8">
        <Slide from="left" delay={0}>
          <div className="flex items-center gap-4 mb-20 px-8">
            <div className="w-[100px] h-[100px] relative overflow-hidden shadow-md shadow-zinc-200 rounded-full">
              <Image
                width={686}
                height={717}
                alt="technology"
                src={"/assets/portfolio/tech.png"}
                className="absolute top-10 -left-2 scale-150"
              />
            </div>
            <p className="my-auto text-4xl font-bold text-accent">About Me</p>
          </div>
        </Slide>

        <div className="font-light mx-auto flex flex-col lg:flex-row items-center gap-4">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-10 flex-1 text-balance text-left text-lg sm:text-xl md:text-2xl font-light px-4">
            {items.map((item, index) => (
              <Reveal key={index} from="bottom" delay={index * 0.2}>
                <p className="text-2xl border-b-4 border-accent w-fit mb-2">
                  {item.title}
                </p>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
