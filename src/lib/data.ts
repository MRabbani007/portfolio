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
  id: 99,
  title: "AI-Powered Resume Optimizer",
  subtitle:
    "A full-stack application using GPT-4 API to tailor resumes for specific job descriptions.",
  description:
    "Built a platform that analyzes job descriptions and user resumes, providing actionable feedback and optimized keywords using cutting-edge AI technology. The interface is clean, intuitive, and highly performant.",
  role: "Full Stack Developer, AI Lead",
  duration: "3 Months",
  tags: ["Next.js 14", "TypeScript", "OpenAI API", "Tailwind", "Vercel"],
  imageUrl: "/bg_pattern.jpg",
  liveUrl: "#",
  githubUrl: "#",
};

export const PROJECTS = [
  {
    id: "recruitment-01",
    title: "TalentFlow AI",
    tag: "Recruitment Ecosystem",
    description:
      "Enterprise-grade recruiting platform with automated candidate scoring and interview scheduling.",
    longDesc:
      "Engineered a high-performance dashboard to manage 10k+ applicants. Implemented complex SQL joins and indexing in PostgreSQL to reduce query latency by 60% when filtering candidates by multiple technical skill-sets.",
    image: "/bg_pattern.jpg",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Redis"],
    metrics: { speed: "220ms", uptime: "99.9%" },
    logs: [
      "[DB] Optimizing candidate search indexes...",
      "[AUTH] JWT sessions verified via edge middleware",
      "[SYS] ATS core heartbeat: Active",
    ],
  },
  {
    id: "task-02",
    title: "Syncro Task",
    tag: "Productivity Engine",
    description:
      "Real-time task management with optimistic UI updates and offline synchronization.",
    longDesc:
      "Built using a local-first architecture. Leveraged TanStack Query for caching and custom WebSockets for real-time team collaboration, ensuring zero data loss during high-concurrency state transitions.",
    image: "/bg_pattern.jpg",
    tech: ["React", "Node.js", "WebSockets", "MongoDB"],
    metrics: { speed: "45ms", uptime: "100%" },
    logs: [
      "[WS] Connection established with shard-01",
      "[UI] Optimistic update successful",
      "[SYNC] Local cache pushed to remote",
    ],
  },
  {
    id: "lang-03",
    title: "LingoPulse",
    tag: "EdTech Architecture",
    description:
      "Immersive language learning app with interactive speech recognition and spaced-repetition logic.",
    longDesc:
      "Architected a custom Spaced Repetition Algorithm (SRS) to optimize user memory retention. integrated OpenAI's Whisper API for real-time speech-to-text validation with a custom-built progress tracking engine.",
    image: "/bg_pattern.jpg",
    tech: ["Typescript", "Next.js", "Tailwind", "Supabase"],
    metrics: { speed: "310ms", uptime: "99.8%" },
    logs: [
      "[AI] Whisper-v3 model initialized",
      "[SRS] Calculating next review interval...",
      "[DATA] User fluency vector updated",
    ],
  },
  {
    id: "spend-04",
    title: "Apex Finance",
    tag: "FinTech Solution",
    description:
      "Spending manager with automated expense categorization and advanced data visualization.",
    longDesc:
      "Focused on data security and visualization. Developed a custom charting library using D3.js to render 12-month spending trends with zero layout shifts. Implemented AES-256 encryption for all sensitive user financial data.",
    image: "/bg_pattern.jpg",
    tech: ["React", "D3.js", "Firebase", "Express"],
    metrics: { speed: "180ms", uptime: "99.9%" },
    logs: [
      "[SEC] AES-256 encryption handshake: OK",
      "[D3] Re-rendering spending vectors...",
      "[API] Firebase listener attached: shard-A",
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
