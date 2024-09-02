import { SKILLS_SOFT } from "@/lib/skills";
import React from "react";

export default function PortfolioSkillsSoft() {
  return (
    <div id="skills-soft" className="section-container pt-12">
      <section className="px-8">
        <h2>Soft Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 text-center skills-container">
          {SKILLS_SOFT.map((skill, index) => {
            return (
              <div
                key={index}
                className="rounded-lg py-2 px-0 w-40 flex flex-col items-center skill-card"
              >
                <img
                  className="w-20 mx-auto py-2"
                  src={"/assets/skills/" + skill.image}
                  alt={skill.name}
                  title={skill.name}
                />
                <p className="my-2 font-mono">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
