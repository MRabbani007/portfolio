import Image from "next/image";
import { skills_technical } from "@/app/_lib/skills";

export default function PortfolioSkills() {
  return (
    <div id="skills" className="section-container pt-12">
      <section>
        {/* Container */}
        <h2>Technical Skills</h2>
        {/* <p>The technologies that I use</p> */}
        <div className="p-1 flex flex-wrap justify-center gap-4 text-center skills-container">
          {skills_technical.map((skill, index) => {
            return (
              <div
                key={index}
                className="rounded-lg shadow-md shadow-blue-500 bg-zinc-100 w-28 skill-card py-4 px-2 flex flex-col items-center"
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
