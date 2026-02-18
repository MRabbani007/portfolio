export interface FeaturedProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  tags: string[];
  imageUrl: string; // Image URL is required for the featured card design
  liveUrl: string;
  githubUrl: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string; // Optional image URL
  colorFallback: string; // Tailwind color class for fallback, e.g., 'bg-blue-500'
  liveUrl: string;
  githubUrl: string;
}

export const featuredProject: FeaturedProjectData = {
  id: 1,
  title: "FirCaspian",
  subtitle:
    "A modern full-stack platform connecting businesses and individuals across the Caspian region.",
  description:
    "FirCaspian is a scalable web platform designed to showcase companies, services, and opportunities in the Caspian market. It features a fast, SEO-friendly architecture, clean UI, and a flexible content system that allows easy expansion. The project focuses on performance, maintainability, and a professional user experience.",
  role: "Full Stack Developer",
  duration: "2–3 Months",
  tags: [
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Vercel",
  ],
  imageUrl: "/bg_pattern.jpg",
  liveUrl: "#",
  githubUrl: "#",
};

export const PROJECTS = [
  {
    id: "tasker-01",
    title: "Tasker",
    tag: "Task Management System",
    description:
      "A fast and intuitive task management application focused on productivity and clarity.",
    longDesc:
      "Built a full-featured task management system with support for projects, priorities, and task statuses. Implemented efficient backend queries and indexing to enable fast filtering by status, date, and priority. The application is designed for reliability, scalability, and a smooth user experience.",
    image: "/bg_pattern.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    metrics: { speed: "190ms", uptime: "99.8%" },
    logs: [
      "[API] User tasks fetched successfully",
      "[DB] Task indexes optimized for filtering",
      "[SYS] Tasker core: Active",
    ],
  },
  {
    id: "russky-01",
    title: "Russky",
    tag: "Language Learning Platform",
    description:
      "An interactive platform for learning and practicing the Russian language.",
    longDesc:
      "Designed and developed a language-learning application focused on structured texts, dialogues, and sentence-level practice. Implemented efficient content models and optimized database queries to handle large collections of texts and exercises, ensuring fast loading and a smooth learning experience.",
    image: "/bg_pattern.jpg",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    metrics: { speed: "210ms", uptime: "99.9%" },
    logs: [
      "[CONTENT] Lesson content loaded",
      "[DB] Text and sentence relations resolved",
      "[SYS] Russky learning engine: Active",
    ],
  },
];
