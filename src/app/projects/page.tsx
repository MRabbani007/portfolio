import Wrapper from "@/components/Wrapper";
import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../../../types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects done by Mohamad",
};

export default function ProjectsPage() {
  return (
    <main className="">
      <header>
        <div className="w-full h-[40vh] relative ">
          <Image
            src={"/wallpaper.jpeg"}
            alt="wallpaper"
            fill
            className="object-center object-cover"
          />
        </div>
      </header>
      <section>
        <Wrapper>
          <h1 className="my-4">Projects</h1>
          <div className="flex flex-col gap-8">
            {PROJECTS.map((project, index) => {
              return <RenderPorject key={index} project={project} />;
            })}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

function RenderPorject({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
      <div>
        <h3 className="text-xl text-yellow-400 tracking-widest uppercase">
          {project.title}
        </h3>
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
                className="text-xs py-1 px-4 bg-zinc-100 dark:bg-zinc-600 rounded-full"
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
    </div>
  );
}
