import Slide from "@/components/animate/Slide";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import MagicButton from "../ui/MagicButton";
import Wrapper from "../Wrapper";
import Image from "next/image";

export default function PortfolioHome() {
  const words = "Transform concepts into seamless experiences";
  return (
    <div
      id="home"
      className="pt-20 min-h-screen flex items-center justify-center relative z-0 overflow-x-clip"
    >
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[10vh] size-[5000px] rounded-full -z-10 flex flex-col overflow-clip">
        <div className="mt-auto h-[20%] bg-gradient-to-br from-sky-950 via-sky-800 to-sky-900"></div>
      </div>
      <div>
        <Image src="/wave.png" fill alt="wave" className="opacity-20" />
      </div>
      <div className="absolute top-0 left-1/3 size-[4px] shadow-indigo-900 rounded-full shadow-[0_0_200px_150px]"></div>
      <div className="absolute top-1/3 right-0 size-[4px] shadow-indigo-800/50 rounded-full shadow-[0_0_200px_150px]"></div>
      <div className="absolute bottom-0 right-1/4 size-[4px] shadow-white/70 rounded-full shadow-[0_0_200px_150px]"></div>
      <section className="text-white">
        <Wrapper className="items-stretch lg:w-[80vw]">
          <Slide from="bottom">
            <p className="text-6xl font-extrabold uppercase">
              Hi, I&apos;m
              <span className=" text-accent"> Mohamad</span>
            </p>
          </Slide>
          <Slide from="bottom" className="overflow-y-hidden hidden md:block">
            <div className="message-container flex-1">
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
          <Slide from="bottom" delay={0} className="text-xl font-light">
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
        </Wrapper>
      </section>
      {/* <Ring size={620} />
      <Ring size={820} />
      <Ring size={1020} />
      <Ring size={1220} /> */}
      {/* <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
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
      </div> */}
      {/* <div className="absolute inset-0 border-2 border-red-500"><div></div></div> */}
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
