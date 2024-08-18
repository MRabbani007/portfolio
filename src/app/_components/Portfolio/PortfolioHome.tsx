import Slide from "@/components/ui/Slide";
import Link from "next/link";
import React from "react";

export default function PortfolioHome() {
  const words = "Transform concepts into seamless experiences";
  return (
    <div
      id="home"
      className="min-h-[calc(100vh-5rem-1px)] flex items-center justify-center relative antialiased "
    >
      <section className="flex flex-row items-center justify-between lg:flex-nowrap flex-wrap gap-4 max-w-[1024px] ">
        <div className="flex flex-col gap-3 mx-auto p-4">
          <Slide from="bottom">
            <p className="text-6xl font-extrabold uppercase">
              Hi, I&apos;m
              <span className="text-accent"> Mohamad.</span>
            </p>
          </Slide>
          <div className="overflow-hidden hidden md:block">
            <div className="message-container flex-1 min-h-14">
              I'm a
              <div className="message">
                <div className="word1">Web Developer</div>
                <div className="word2">Software Engineer</div>
                <div className="word3">Full-Stack Developer</div>
              </div>
            </div>
          </div>
          <Slide from="bottom" delay={0}>
            <p className="text-3xl font-extralight text-wrap">
              <span>
                I Design, Develop & Deploy full-stack responsive
                web-applications.
              </span>
            </p>
          </Slide>
          {/* <p className="py-4 max-w-[700px] text-lg sm:text-xl md:text-2xl font-light text-zinc-700 duration-500">
            I<span>{"'"}</span>m a <strong>full stack developer</strong>{" "}
            specializing in building exceptional digital experiences. Currently
            I<span>{"'"}</span>m focused on building responsive full-stack web
            applications
          </p> */}
          <Slide from="left" delay={0.3} className="mt-4">
            {/* <MagicButton
              title="View Work"
              // icon={<IoIosArrowForward size={20} />}
              position="right"
            >
            </MagicButton> */}
            <Link
              href="#projects"
              className="border-2 border-accent/50 py-2 px-4 rounded-lg text-accent"
            >
              View Work
            </Link>
          </Slide>
        </div>
        {/* <div className=" w-[40%] h-auto">
          <Image
            src={"/assets/portfolio/laptop.jpg"}
            alt="laptop"
            width={3648}
            height={4560}
            quality={100}
            className=""
          />
        </div> */}
      </section>
    </div>
  );
}
