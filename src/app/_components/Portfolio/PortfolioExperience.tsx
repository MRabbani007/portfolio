import { experience } from "@/app/_lib/experience";
import React from "react";
import ExperienceBlock from "./ExperienceBlock";

export default function PortfolioExperience() {
  return (
    <div id="experience" className="section-container pt-12">
      <section>
        <h2>Experience</h2>
        <div className="flex flex-col gap-4">
          {experience.map((item, index) => (
            <ExperienceBlock item={item} index={index} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
