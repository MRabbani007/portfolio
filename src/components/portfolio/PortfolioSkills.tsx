"use client";

import Image from "next/image";
import { skills_technical } from "@/app/_lib/skills";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Skill } from "../../../types";
import { useInView } from "framer-motion";
import Carousel from "@/components/Carousel";
import { GrTechnology } from "react-icons/gr";
import Slide from "@/components/ui/Slide";

export default function PortfolioSkills() {
  const group1 = skills_technical.filter((item) => item.group === 1);
  const group2 = skills_technical.filter((item) => item.group === 2);
  const group3 = skills_technical.filter((item) => item.group === 3);

  return (
    <div id="skills" className="section-container">
      <section>
        {/* Container */}
        <Slide from="left">
          <h2 className="flex items-center gap-4 mb-10 lg:mb-20">
            <GrTechnology size={60} />
            Skills
          </h2>
        </Slide>
        <Carousel
          animationDuration="60s"
          items={[...skills_technical, ...skills_technical]}
        />
        {/* <Carousel
          animationDuration="20s"
          items={[...group2, ...group2, ...group2, ...group2]}
        />
        <Carousel
          animationDuration="30s"
          items={[...group3, ...group3, ...group3]}
        /> */}
        {/* <p>The technologies that I use</p> */}
        {/* <div className="overflow-hidden">
          <div className="flex flex-nowrap justify-start gap-8 text-center skills-container perspective-origin-center">
            {skills_technical.map((skill, index) => {
              return <SkillItem key={index} skill={skill} index={index} />;
            })}
          </div>
        </div> */}
        {/* {skills_technical.length} */}
        {/* <SkillsGrid /> */}
      </section>
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  skill: Skill;
  index: number;
}

function SkillItem({ skill, index, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      title={skill?.name}
      className={cn(
        "animate-fade-in rounded-[2.25rem] shadow-xl shadow-slate-900/5 shrink-0 skill-card",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Image
        src={"/assets/skills/" + skill?.image}
        width={80}
        height={100}
        alt={skill?.name || ""}
        title={skill?.name}
        className="w-20 sm:w-20"
      />
      {/* <p className="my-2 font-mono">{skill.name}</p> */}
    </div>
  );
}

function SkillRow({
  skills,
  className,
  skillsClassName,
  msPerPixel = 0,
}: {
  skills: Skill[];
  className?: string;
  skillsClassName?: (index: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetWidth ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn(
        "animate-marquee space-y-8 py-4 flex items-center gap-4",
        className
      )}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {skills.concat(skills).map((skill, index) => (
        <SkillItem
          key={index}
          index={index}
          className={skillsClassName?.(index % skills.length)}
          skill={skill}
        />
      ))}
    </div>
  );
}

function SkillsGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  // const columns = splitArray(PHONES, 3);
  const column1 = skills_technical.filter((item) => item?.group === 1);
  const column2 = skills_technical.filter((item) => item?.group === 2);
  const column3 = skills_technical.filter((item) => item?.group === 3);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 gap-8 overflow-hidden px-4 sm:mt-20 "
    >
      {isInView ? (
        <>
          <SkillRow
            skills={skills_technical}
            skillsClassName={(index) =>
              cn({
                "md:hidden": index >= column1.length + column3.length,
                "lg:hidden": index >= column1.length,
              })
            }
            msPerPixel={10}
          />
          {/* <SkillRow
            skills={column2}
            skillsClassName={(index) =>
              cn({
                "md:hidden": index >= column1.length + column3.length,
                "lg:hidden": index >= column1.length,
              })
            }
            msPerPixel={15}
          /> */}
          {/* <SkillRow
            skills={column3}
            skillsClassName={(index) =>
              cn({
                "md:hidden": index >= column1.length + column3.length,
                "lg:hidden": index >= column1.length,
              })
            }
            msPerPixel={10}
          /> */}
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-y-0 left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-900" />
    </div>
  );
}
