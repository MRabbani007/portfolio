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

// Define your featured project data (ensure you have the image path!)
