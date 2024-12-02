import Image from "next/image";
import { SKILLS_TECHNICAL } from "@/lib/skills";
import { GrTechnology } from "react-icons/gr";
import Slide from "@/components/animate/Slide";
import Wrapper from "../Wrapper";
import Reveal from "../animate/Reveal";

export default function PortfolioSkills() {
  return (
    <div
      id="skills"
      className="section-container relative overflow-clip z-0 bg-gradient-to-b from-sky-950 to-sky-950 via-sky-800 dark:bg-gradient-to-b dark:from-black dark:to-black dark:via-sky-900"
    >
      {/* <div className="absolute left-0 right-0 top-0 h-[5vh] bg-gradient-to-b from-background to-transparent z-10" /> */}
      {/* <div className="absolute left-0 right-0 bottom-0 h-[5vh] bg-gradient-to-b from-transparent dark:to-background to-background" /> */}
      {/* <div className="-z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[2000px] h-[2px] bg-blue-500/30 shadow-[0_0_500px_100px] shadow-blue-500 opacity-60 animate-[spin_30s_linear_infinite]"></div>
        </div>
      </div> */}
      <section className="z-10 min-h-screen py-20">
        <Wrapper className="">
          <Slide from="left">
            <div className="relative overflow-hidden pb-[1px] z-0 mb-4">
              <div className="z-0">
                <h2 className="flex items-center gap-4 bg-inherit mb-0 pb-4">
                  <GrTechnology size={60} />
                  Skills
                </h2>
              </div>
              <div className="h-[2px] overflow-clip w-full relative z-10">
                {/* <div className="w-[200px] bg-sky-500 h-full animate-[pulse_2s_linear_infinite]"></div> */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-400 to-sky-400 -z-10 animate-[spin_1s_linear_infinite] origin-bottom-right"></div> */}
              </div>
            </div>
          </Slide>
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center skills-container">
              {SKILLS_TECHNICAL.map((skill, index) => {
                return (
                  <Reveal
                    key={index}
                    delay={0.5}
                    className="font-mono flex items-center gap-4 py-2 px-4 rounded-lg dark:bg-zinc-900 bg-zinc-200 hover:bg-yellow-400/20 z-10"
                  >
                    <Image
                      src={"/assets/skills/" + skill.image}
                      alt={skill.name}
                      width={100}
                      height={100}
                      className="size-16"
                    />
                    <div className="text-start">
                      <p className="font-semibold text-xl">{skill.name}</p>
                      <p className="text-zinc-500">{skill?.detail}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
