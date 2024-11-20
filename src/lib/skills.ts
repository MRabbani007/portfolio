import { Skill } from "../../types";

export const SKILLS_SOFT = [
  { name: "Agile Scrum Methodologies", image: "scrum.png" },
  { name: "Technical Program Management", image: "project-manage.png" },
  { name: "Software Testing", image: "software-testing.png" },
  { name: "Effective Communication", image: "communication.png" },
  { name: "Team Leadership & Supervision", image: "leadership.png" },
  { name: "Time Management", image: "time-manage.png" },
  { name: "Decision Making", image: "decision.png" },
  { name: "Prioritization", image: "prioritize.png" },
];

export const SKILLS_TECHNICAL: Skill[] = [
  {
    name: "NextJS",
    detail: "Fullstack Framework",
    image: "nextjs_white.png",
    group: 1,
  },
  { name: "React", detail: "Frontend Framework", image: "react.png", group: 1 },
  { name: "React Native", detail: "Mobile Apps", image: "react.png", group: 1 },
  { name: "NodeJS", detail: "Backend Framework", image: "node.png", group: 1 },
  {
    name: "ExpressJS",
    detail: "Backend Library",
    image: "expressjs_white.png",
    group: 1,
  },
  { name: "MongoDB", detail: "Database", image: "mongo.png", group: 1 },

  { name: "Typescript", detail: "", image: "typescript.png", group: 2 },
  {
    name: "Tailwind CSS",
    detail: "Styling Framework",
    image: "tailwind.png",
    group: 2,
  },
  { name: "Bootstrap", detail: "Styling", image: "bootstrap.png", group: 2 },
  { name: "Sass", detail: "Styling Preprocessor", image: "sass.png", group: 2 },
  { name: "Firebase", detail: "Storage", image: "firebase.png", group: 2 },
  {
    name: "Github",
    detail: "Version Control",
    image: "github_white.png",
    group: 2,
  },

  { name: "HTML", image: "html.png", group: 3 },
  { name: "CSS", image: "css.png", group: 3 },
  { name: "Javascript", image: "javascript.png", group: 3 },

  { name: "Trello", image: "trello.png", group: 3 },
  { name: "AutoCad", image: "autocad.png", group: 3 },
  { name: "Photoshop", image: "photoshop.png", group: 3 },
];
