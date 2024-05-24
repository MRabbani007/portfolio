import { projects } from "@/app/_lib/projects";
import React from "react";
import Slider from "../Slider";

export default function PortfolioProjects() {
  return (
    <div id="projects" className="section-container pt-12">
      <section>
        <h2>Projects</h2>
        <div className="flex flex-wrap justify-center w-full gap-3 mx-auto">
          {Array.isArray(projects) &&
            projects.map((project, index) => {
              return <Slider project={project} key={index} />;
            })}
        </div>
      </section>
    </div>
  );
}
