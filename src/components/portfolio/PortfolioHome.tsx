import Slide from "@/components/ui/Slide";
import Link from "next/link";
import React from "react";
import MagicButton from "../ui/MagicButton";

export default function PortfolioHome() {
  const words = "Transform concepts into seamless experiences";
  return (
    <div
      id="home"
      className="min-h-[calc(100vh-5rem-1px)] flex items-center justify-center relative antialiased"
    >
      <section className="max-w-[1024px] mx-auto">
        <Slide from="bottom">
          <p className="text-6xl font-extrabold uppercase">
            Hi, I&apos;m
            <span className=" text-accent"> Mohamad.</span>
          </p>
        </Slide>
        <Slide from="bottom" className="overflow-hidden hidden md:block">
          <div className="message-container flex-1 min-h-14">
            I'm a
            <div className="message">
              <div className="word1">Web Developer</div>
              <div className="word2">Software Engineer</div>
              <div className="word3">Full-Stack Developer</div>
            </div>
          </div>
        </Slide>
        <Slide
          from="bottom"
          delay={0}
          className="text-xl font-extralight text-wrap"
        >
          {/* I Design, Develop & Deploy full-stack responsive web-applications. */}
          I build full-stack responsive web-applications
        </Slide>
        <Slide from="left" delay={0.3} className="mt-4">
          <MagicButton
            title="View Work"
            // icon={<IoIosArrowForward size={20} />}
            position="right"
          >
            <Link href="#projects" className="font-light">
              View Work
            </Link>
          </MagicButton>
        </Slide>
      </section>
    </div>
  );
}
