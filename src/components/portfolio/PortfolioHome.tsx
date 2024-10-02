import Slide from "@/components/ui/Slide";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import MagicButton from "../ui/MagicButton";
import { IoStar } from "react-icons/io5";

export default function PortfolioHome() {
  const words = "Transform concepts into seamless experiences";
  return (
    <div
      id="home"
      className="min-h-[calc(100vh-5rem-1px)] flex items-center justify-center relative z-0 overflow-x-clip"
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
        <Slide from="bottom" delay={0} className="md:hidden text-xl">
          I'm a Software Engineer,
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
      {/* <Ring size={620} />
      <Ring size={820} />
      <Ring size={1020} />
      <Ring size={1220} /> */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className={`size-[620px] hero-ring`} />
        <div className={`size-[820px] hero-ring`} />
        <div className={`size-[1020px] hero-ring`} />
        <div className={`size-[1220px] hero-ring`} />
        <div className={`size-[1420px] hero-ring`} />

        <HeroOrbit size={600} rotation={20}>
          <IoStar
            size={8}
            className="text-yellow-400 animate-pulse [animation-duration:10s]"
          />
        </HeroOrbit>
        <HeroOrbit size={450} rotation={160}>
          <IoStar size={8} className="text-yellow-400/20" />
        </HeroOrbit>
        <HeroOrbit size={740} rotation={360 - 45}>
          <IoStar
            size={10}
            className="text-white animate-pulse [animation-duration:10s]"
          />
        </HeroOrbit>
        <HeroOrbit size={1020} rotation={180}>
          <IoStar size={6} className="text-yellow-400" />
        </HeroOrbit>
        <HeroOrbit size={880} rotation={120}>
          <IoStar size={12} className="text-white/90" />
        </HeroOrbit>
      </div>
    </div>
  );
}

function Ring({ size }: { size: number }) {
  return <div className={`size-[${"" + size}px] hero-ring`} />;
}

function HeroOrbit({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start animate-spin [animation-duration:30s]"
        style={{
          height: `${"" + size}px`,
          width: `${"" + size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className="inline-flex animate-none [animation-duration:5s]"
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
