import { projects } from "@/app/_lib/projects";
import React from "react";
import Slider from "../Slider";
import Image from "next/image";
import CardProject from "./CardProject";
import Link from "next/link";
import { IoMdArrowDropleft } from "react-icons/io";

export default function PortfolioProjects() {
  return (
    <div id="projects" className="section-container pt-12">
      <section className="px-8">
        <div className="cursor-pointer group/container">
          <div className="relative w-fit">
            <h2 className="">Projects</h2>
            <Link
              href={"/projects"}
              className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-4 opacity-0 group-hover/container:opacity-100 group-hover/container:translate-x-0 invisible group-hover/container:visible text-md duration-200 group/tooltip flex items-center ml-2"
            >
              <IoMdArrowDropleft
                size={20}
                className="group-hover/tooltip:text-blue-600 text-zinc-600 duration-200"
              />
              <span className="text-nowrap py-1 px-2 bg-zinc-50 border-2 rounded-md border-zinc-600 group-hover/tooltip:border-blue-600 group-hover/tooltip:text-blue-600 text-zinc-600 text-md duration-200">
                Go to Projects
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full gap-8 mx-auto">
          {projects
            .filter((item) => item.pinned === true)
            .map((project, index) => {
              return <CardProject key={index} project={project} />;
            })}
        </div>
      </section>
    </div>
  );
}
