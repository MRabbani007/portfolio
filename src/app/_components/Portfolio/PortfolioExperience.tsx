import React from "react";
import ExperienceBlock from "./ExperienceBlock";
import { EXPERIENCE } from "@/lib/experience";
import { SKILLS_SOFT } from "@/lib/skills";
import Image from "next/image";
import Slide from "@/components/ui/Slide";
import { IoBarChartSharp } from "react-icons/io5";

const items = [
  { label: "9+ years", bgColor: "bg-blue-950" },
  { label: "Software", bgColor: "bg-yellow-700" },
  { label: "Oil & Gas", bgColor: "bg-purple-950" },
  { label: "Electrical & Computer Engineer", bgColor: "bg-red-800" },
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
    <div id="experience" className="section-container pt-12">
      <section className="px-8">
        <article className="min-h-screen p-8">
          <Slide from="left">
            <h2 className="flex items-center gap-4">
              <IoBarChartSharp size={50} />
              <span>Experience</span>
            </h2>
          </Slide>
          <div className="flex flex-col md:flex-row flex-wrap items-start gap-4">
            <div className="flex items-center justify-center gap-8 flex-wrap max-w-[400px]">
              {SKILLS_SOFT.map((item, index) => (
                <Slide
                  key={index}
                  from="bottom"
                  className="hover:scale-110 hover:bg-zinc-900 p-2 rounded-md duration-200 w-fit"
                >
                  <Image
                    src={"/assets/skills/" + item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    title={item.name}
                  />
                </Slide>
              ))}
            </div>
            <div className="text-center space-y-4 flex-1">
              {items.map((item, idx) => (
                <Slide key={idx} from="bottom" delay={0.2 * idx}>
                  <p className={"p-4 rounded-xl uppercase " + item.bgColor}>
                    {item.label}
                  </p>
                </Slide>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-[400px]">
              {items2.map((item, idx) => (
                <Slide
                  key={idx}
                  from="bottom"
                  delay={0.2 * idx}
                  className="w-fit"
                >
                  <p className={"p-4 rounded-xl uppercase w-fit bg-zinc-900"}>
                    {item.label}
                  </p>
                </Slide>
              ))}
            </div>
          </div>
        </article>
        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((item, index) => (
            <ExperienceBlock item={item} index={index} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
