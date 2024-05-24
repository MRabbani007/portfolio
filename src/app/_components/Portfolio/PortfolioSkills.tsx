import Image from "next/image";
import { skills_technical } from "@/app/_lib/skills";

export default function PortfolioSkills() {
  return (
    <div id="skills" className="section-container pt-12">
      <section>
        {/* Container */}
        <h2>Skills</h2>
        <p>The technologies that I use</p>
        <div className="p-1 flex flex-wrap justify-center gap-4 text-center skills-container">
          {skills_technical.map((skill, index) => {
            return (
              <div
                key={index}
                className="rounded-md shadow-md shadow-slate-500 w-28 skill-card p-2 flex flex-col items-center"
                // data-aos="flip-left"
              >
                <Image
                  src={"/assets/skills/" + skill?.image}
                  width={80}
                  height={100}
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
