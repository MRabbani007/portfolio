import { PROJECTS } from "@/lib/projects";
import React from "react";
import Slider from "@/components/Slider";
import Slide from "@/components/ui/Slide";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function PortfolioProjects() {
  return (
    <div id="projects" className="section-container pt-12">
      <section className="px-8">
        <div className="group/container">
          <div className="relative w-fit">
            <Slide from="left">
              <h2 className="flex items-center gap-4">
                <AiOutlineFundProjectionScreen size={50} />
                <span>Projects</span>
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
        <Slider data={PROJECTS} />
        {/* <div className="flex flex-wrap justify-center items-center w-full gap-8 mx-auto">
          {PROJECTS.filter((item) => item.pinned === true).map(
            (project, index) => {
              return <CardProject key={index} project={project} />;
            }
          )}
        </div> */}
      </section>
    </div>
  );
}
