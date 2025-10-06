import Hero from "@/features/homepage/Hero";
import SkillsSection from "@/features/homepage/SkillsSection";
import ProjectsSection from "@/features/homepage/ProjectsSection";
import WorkflowSection from "@/features/homepage/WorkFlowSection";
import HighlightsSection from "@/features/homepage/HighlightsSection";
import CTASection from "@/features/homepage/CTASection";
import TestimonialsSection from "@/features/homepage/TestimonialsSection";
import ContactSections from "@/features/homepage/ContactSections";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col gap-0 relative p-0 lg:p-0">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <HighlightsSection />
      <CTASection />
      <WorkflowSection />
      <TestimonialsSection />
      <ContactSections />
    </main>
  );
}
