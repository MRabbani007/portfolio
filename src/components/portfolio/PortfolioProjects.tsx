import { PROJECTS } from "@/lib/projects";
import React from "react";
import Slider from "@/components/Slider";
import Slide from "@/components/ui/Slide";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import CardProject from "./CardProject";

export default function PortfolioProjects() {
  return (
    <div id="projects" className="section-container pt-12 ">
      <section className="">
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
            {/* <Link
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
            </Link> */}
          </div>
        </div>
        {/* <div><Slider data={PROJECTS} /> </div>*/}
        <div className="flex flex-col items-stretch flex-wrap justify-center max-w-5xl mx-auto gap-8">
          {PROJECTS.filter((item) => item.pinned === true).map(
            (project, index) => {
              return <CardProject key={index} project={project} />;
            }
          )}
        </div>
      </section>
    </div>
  );
}
