import { skills_soft } from "@/app/_lib/skills";
import React from "react";

export default function PortfolioSkillsSoft() {
  return (
    <div id="skills-soft" className="section-container pt-12">
      <section>
        <div className=" mx-auto">
          <h2
          // data-aos="fade-right"
          >
            Soft Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-center skills-container">
            {skills_soft.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="rounded-md shadow-md shadow-slate-500 w-40 skill-card"
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
        </div>
      </section>
    </div>
  );
}
