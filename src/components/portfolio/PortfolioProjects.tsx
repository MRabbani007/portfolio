import { PROJECTS } from "@/lib/projects";
import React from "react";
import Slide from "@/components/animate/Slide";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Project } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../animate/Reveal";
import Wrapper from "../Wrapper";

export default function PortfolioProjects() {
  return (
    <div id="projects" className="section-container pt-12 ">
      <section className="">
        <Wrapper>
          <div className="group/container">
            <div className="relative w-fit">
              <Slide from="left">
                <h2 className="flex items-center gap-4">
                  <AiOutlineFundProjectionScreen size={50} />
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all bg-clip-text text-transparent">
                    Featured Projects
                  </span>
                </h2>
              </Slide>
            </div>
          </div>
          <div className="flex flex-col items-stretch flex-wrap justify-center max-w-5xl mx-auto gap-8">
            {PROJECTS.filter((item) => item.pinned === true).map(
              (project, index) => {
                return <RenderProject key={index} project={project} />;
              }
            )}
          </div>
        </Wrapper>
      </section>
    </div>
  );
}

function RenderProject({ project }: { project: Project }) {
  return (
    <Slide className="flex flex-col gap-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
      <div>
        <h3 className="">{project.title}</h3>
        <p className="text-zinc-400">{project.subtitle}</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:items-stretch items-center justify-center gap-4">
        <div className="flex-1 flex flex-col gap-4">
          <p className="">{project.about}</p>
          {project.features.length !== 0 && (
            <p className="">{project.features.join(", ")}</p>
          )}
          {project.build.length !== 0 && <p>{project.build.join(", ")}</p>}
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.map((item, idx) => (
              <span
                key={idx}
                className="text-xs py-1 px-4 bg-zinc-200 dark:bg-zinc-600 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-auto justify-center">
            <Link
              title="Show More"
              href={`/projects/${project.id}/${project.name}`}
              className="bg-zinc-200 hover:bg-white text-zinc-800 py-2 px-4 rounded-full duration-200"
            >
              More
            </Link>
            <Link
              title="Go to live demo"
              href={project.live_URL}
              target="_blank"
              className="bg-zinc-200 hover:bg-white text-zinc-800 py-2 px-4 rounded-full duration-200"
            >
              Demo
            </Link>
          </div>
        </div>
        <div className="w-[350px] sm:w-[400px] h-[250px] relative">
          <Image
            src={"/assets/projects/" + project.mainImage}
            fill
            alt="Dashboard"
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </Slide>
  );
}
