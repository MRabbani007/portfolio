import React from "react";
import ExperienceBlock from "./ExperienceBlock";
import { EXPERIENCE } from "@/lib/experience";
import { SKILLS_SOFT } from "@/lib/skills";
import Image from "next/image";
import Slide from "@/components/animate/Slide";
import { IoBarChartSharp } from "react-icons/io5";
import Reveal from "../animate/Reveal";
import Wrapper from "../Wrapper";

const items = [
  { label: "9+ years", bgColor: "bg-blue-200 dark:bg-blue-950" },
  { label: "Software", bgColor: "bg-yellow-200 dark:bg-yellow-700" },
  { label: "Oil & Gas", bgColor: "bg-purple-200 dark:bg-purple-950" },
  {
    label: "Electrical & Computer Engineer",
    bgColor: "bg-red-200 dark:bg-red-800",
  },
];

const items2 = [
  {
    label: "Web developer",
  },
  {
    label: "Full Stack",
  },
  {
    label: "Frontend",
  },
  {
    label: "Backend",
  },
  { label: "Construction" },
  { label: "Supervision" },
  { label: "Procurement" },
  { label: "Site & Office" },
];

export default function PortfolioExperience() {
  return (
    <div id="experience" className="">
      <section className="items-stretch">
        <article className="my-20 min-h-screen flex flex-col justify-center bg-gradient-to-br from-sky-900 to-sky-950 dark:from-black dark:to-black">
          <Wrapper>
            <Slide from="left">
              <h2 className="flex items-center gap-4">
                <IoBarChartSharp size={50} />
                <span>Experience</span>
              </h2>
            </Slide>
            <div className="flex flex-col md:flex-row flex-wrap items-center gap-4">
              <div className="flex items-center justify-center gap-4 flex-wrap flex-1 mx-auto">
                {SKILLS_SOFT.map((item, idx) => (
                  <Reveal
                    key={idx}
                    delay={0.2 * idx}
                    className="bg-zinc-200 dark:bg-zinc-600 hover:scale-110 dark:hover:bg-zinc-900 hover:bg-zinc-600 p-2 rounded-md duration-200"
                  >
                    <Image
                      src={"/assets/skills/" + item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      title={item.name}
                    />
                  </Reveal>
                ))}
              </div>
              <div className="text-center flex flex-col gap-4 flex-1 mx-auto">
                {items.map((item, idx) => (
                  <Reveal key={idx} delay={0.2 * idx}>
                    <p className={"p-4 rounded-xl uppercase " + item.bgColor}>
                      {item.label}
                    </p>
                  </Reveal>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 flex-1 mx-auto">
                {items2.map((item, idx) => (
                  <Reveal
                    key={idx}
                    delay={0.2 * idx}
                    className="min-w-fit p-4 rounded-xl uppercase w-fit bg-zinc-200 dark:bg-zinc-700"
                  >
                    {item.label}
                  </Reveal>
                ))}
              </div>
            </div>
          </Wrapper>
        </article>
        <div className="flex flex-col gap-20">
          {EXPERIENCE.map((item, index) => (
            <ExperienceBlock item={item} index={index} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
