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

export interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  title: string; // e.g., "CEO of Company X"
  imageUrl: string; // Path to the reviewer's photo
}

export const CATEGORIES = [
  { label: "HTML, CSS & JS", value: "HTML, CSS & JS" },
  { label: "Full Stack", value: "Full Stack" },
  { label: "Frontend", value: "Frontend Frameworks" },
  { label: "Backend", value: "Backend Frameworks" },
  { label: "Styling", value: "Styling" },
  { label: "UI Libraries", value: "UI Component Libraries" },
  { label: "Databases", value: "Databases" },
  { label: "Version Control", value: "Version Control" },
];

export const mockTestimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, TechSolutions",
    quote:
      "The project delivery was outstanding. Mohamad exceeded our expectations in both design quality and technical execution. Highly recommended!",
    imageUrl: "/author.png", // Make sure you have this image
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Project Manager, Innovate Inc.",
    quote:
      "Mohamad is an incredible problem solver. They tackled complex integration challenges with ease and maintained clear communication throughout the process.",
    imageUrl: "/author.png", // Make sure you have this image
  },
];

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

// Define your featured project data (ensure you have the image path!)
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

export const mockProjects: ProjectData[] = [
  {
    id: 1,
    title: "Task Manager Application",
    description:
      "A robust task management tool built with Next.js and a REST API. Features state management and user authentication.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "", // Intentionally left empty to trigger fallback
    colorFallback: "bg-indigo-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Storefront",
    description:
      "A fully functional e-commerce platform using Stripe for payments and a headless CMS.",
    tags: ["Gatsby", "GraphQL", "Stripe", "Node.js"],
    imageUrl: "/author.png",
    colorFallback: "bg-green-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Chatbot Integration",
    description:
      "Integrated OpenAI GPT models into a web application for enhanced customer support automation.",
    tags: ["Vue.js", "Firebase", "OpenAI", "AI/ML"],
    imageUrl: "/author.png",
    colorFallback: "bg-blue-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Project One",
    description: "...",
    tags: ["React"],
    imageUrl: "",
    colorFallback: "bg-blue-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "...",
    tags: ["Vue"],
    imageUrl: "",
    colorFallback: "bg-green-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "...",
    tags: ["Angular"],
    imageUrl: "",
    colorFallback: "bg-red-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description: "...",
    tags: ["Next"],
    imageUrl: "",
    colorFallback: "bg-purple-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Project Five",
    description: "...",
    tags: ["React"],
    imageUrl: "",
    colorFallback: "bg-yellow-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Project Six",
    description: "...",
    tags: ["Node"],
    imageUrl: "",
    colorFallback: "bg-indigo-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Project Seven (Extra)",
    description: "...",
    tags: ["Node"],
    imageUrl: "",
    colorFallback: "bg-pink-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Project Eight (Extra)",
    description: "...",
    tags: ["Node"],
    imageUrl: "",
    colorFallback: "bg-teal-500",
    liveUrl: "#",
    githubUrl: "#",
  },
];
