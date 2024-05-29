import { projects } from "@/app/_lib/projects";
import React from "react";
import Slider from "../Slider";
import Image from "next/image";
import CardProject from "./CardProject";

export default function PortfolioProjects() {
  return (
    <div id="projects" className="section-container pt-12">
      <section>
        <h2>Projects</h2>
        <div className="flex flex-wrap justify-center items-center w-full gap-8 mx-auto">
          {projects.map((project, index) => {
            return <CardProject key={index} project={project} />;
          })}
        </div>
      </section>
    </div>
  );
}
