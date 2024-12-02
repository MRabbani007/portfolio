"use client";

import Image from "next/image";
import React from "react";
import Slide from "@/components/animate/Slide";
import Wrapper from "../Wrapper";

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
    <div
      id="about"
      className="bg-gradient-to-b from-background dark:from-black dark:via-sky-950/50 dark:to-black relative"
    >
      {/* <div className="absolute left-0 right-0 top-0 h-[20vh] bg-gradient-to-b from-background to-transparent" /> */}
      {/* <div className="absolute left-0 right-0 bottom-0 h-[20vh] bg-gradient-to-b from-transparent to-background" /> */}
      <section className="min-h-screen">
        <Wrapper>
          <Slide
            from="left"
            delay={0}
            className="flex items-center gap-4 mb-4 md:mb-20 md:px-8"
          >
            <div className="w-[100px] h-[100px] relative overflow-hidden shadow-md shadow-zinc-950 rounded-full">
              <Image
                width={686}
                height={717}
                alt="technology"
                src={"/assets/portfolio/tech.png"}
                className="absolute top-10 -left-2 scale-150"
              />
            </div>
            <p className="my-auto text-4xl font-bold text-accent">About Me</p>
          </Slide>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 flex-1 text-balance text-center text-lg sm:text-xl md:text-2xl font-light">
            {items.map((item, index) => (
              <Slide
                key={index}
                from="bottom"
                delay={index * 0.2}
                className="p-4 shadow-lg shadow-sky-950 dark:bg-zinc-900 bg-zinc-100 rounded-lg"
              >
                <p className="text-2xl border-b-4 mx-auto w-fit border-accent mb-2">
                  {item.title}
                </p>
                <p className="text-base">{item.text}</p>
              </Slide>
            ))}
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
