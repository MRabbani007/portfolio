import PortfolioAbout from "@/components/portfolio/PortfolioAbout";
import PortfolioContact from "../../components/portfolio/PortfolioContact";
import PortfolioExperience from "../../components/portfolio/PortfolioExperience";
import PortfolioHome from "../../components/portfolio/PortfolioHome";
import PortfolioProjects from "../../components/portfolio/PortfolioProjects";
import PortfolioSkills from "../../components/portfolio/PortfolioSkills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio for Mohamad Rabbani",
};

export default function PortfolioPage() {
  return (
    <main className="gap-0">
      <PortfolioHome />
      <PortfolioAbout />
      <PortfolioSkills />
      <PortfolioProjects />
      <PortfolioExperience />
      <PortfolioContact />
    </main>
  );
}
