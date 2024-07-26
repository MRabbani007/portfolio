import Image from "next/image";
import { skills_technical } from "@/app/_lib/skills";

export default function PortfolioSkills() {
  return (
    <div id="skills" className="section-container pt-12">
      <section className="px-8">
        {/* Container */}
        <h2>Technical Skills</h2>
        {/* <p>The technologies that I use</p> */}
        <div className="flex flex-wrap justify-center gap-8 text-center skills-container">
          {skills_technical.map((skill, index) => {
            return (
              <div
                key={index}
                title={skill.name}
                className="rounded-lg skill-card flex flex-col items-center"
              >
                <Image
                  src={"/assets/skills/" + skill?.image}
                  width={80}
                  height={100}
                  alt={skill.name}
                  title={skill.name}
                  className="w-20 sm:w-20"
                />
                {/* <p className="my-2 font-mono">{skill.name}</p> */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
