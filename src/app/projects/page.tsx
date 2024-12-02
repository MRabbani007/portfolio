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
    <main className="mb-10">
      <div className="h-[40vh] bg-sky-950 rounded-br-[100px] dark:bg-zinc-900"></div>
      <Wrapper>
        <h1 className="my-4">Projects</h1>
        <p></p>
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => {
            return <RenderPorject key={index} project={project} />;
          })}
        </div>
      </Wrapper>
    </main>
  );
}

function RenderPorject({ project }: { project: Project }) {
  return (
    <div className="flex flex-col min-h-screen items-stretch justify-center">
      <article className="flex flex-col gap-4 p-4 lg:p-8 bg-zinc-100 dark:bg-zinc-800 rounded-xl ">
        <div className=" lg:mb-8">
          <h2 className="mb-0">{project.title}</h2>
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
          <div className="w-[350px] sm:w-[400px] lg:w-[500px] h-[250px] lg:h-[350px] relative">
            <Image
              src={"/assets/projects/" + project.mainImage}
              fill
              alt="Dashboard"
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
