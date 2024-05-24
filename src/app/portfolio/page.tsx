import PortfolioAbout from "../_components/Portfolio/PortfolioAbout";
import PortfolioContact from "../_components/Portfolio/PortfolioContact";
import PortfolioExperience from "../_components/Portfolio/PortfolioExperience";
import PortfolioHome from "../_components/Portfolio/PortfolioHome";
import PortfolioProjects from "../_components/Portfolio/PortfolioProjects";
import PortfolioSkills from "../_components/Portfolio/PortfolioSkills";
import PortfolioSkillsSoft from "../_components/Portfolio/PortfolioSkillsSoft";

export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center gap-4">
      <div className="bg-gradient-to-br from-zinc-950 to-sky-900 w-full h-[40vh] relative">
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">Mohamad Rabbani</p>
          <p>Software Engineer</p>
        </div>
      </div>
      <PortfolioHome />
      <PortfolioAbout />
      <PortfolioSkills />
      <PortfolioSkillsSoft />
      <PortfolioProjects />
      <PortfolioExperience />
      <PortfolioContact />
    </main>
  );
}
