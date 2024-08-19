import PortfolioAbout from "@/components/portfolio/PortfolioAbout";
import PortfolioContact from "../../components/portfolio/PortfolioContact";
import PortfolioExperience from "../../components/portfolio/PortfolioExperience";
import PortfolioHome from "../../components/portfolio/PortfolioHome";
import PortfolioProjects from "../../components/portfolio/PortfolioProjects";
import PortfolioSkills from "../../components/portfolio/PortfolioSkills";
import PortfolioSkillsSoft from "../../components/portfolio/PortfolioSkillsSoft";

export default function PortfolioPage() {
  return (
    <main className="">
      {/* <div className="bg-gradient-to-br from-zinc-950 to-sky-900 w-full h-[40vh] relative">
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">Mohamad Rabbani</p>
          <p>Software Engineer</p>
        </div>
      </div> */}
      <PortfolioHome />
      <PortfolioAbout />
      <PortfolioSkills />
      {/* <PortfolioSkillsSoft /> */}
      <PortfolioProjects />
      <PortfolioExperience />
      <PortfolioContact />
    </main>
  );
}
