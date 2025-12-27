"use client";

import {
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const SKILLS_TECHNICAL: Skill[] = [
  {
    name: "NextJS",
    detail: "Fullstack Framework",
    image: "nextjs_white.png",
    group: 1,
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "React",
    detail: "Frontend Framework",
    image: "react.png",
    group: 1,
    icon: SiReact,
    color: "#61DAFB",
  },
  // { name: "React Native", detail: "Mobile Apps", image: "react.png", group: 1 },
  {
    name: "NodeJS",
    detail: "Backend Framework",
    image: "node.png",
    group: 1,
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "ExpressJS",
    detail: "Backend Library",
    image: "expressjs_white.png",
    group: 1,
  },
  {
    name: "MongoDB",
    detail: "Database",
    image: "mongo.png",
    group: 1,
    icon: SiMongodb,
    color: "#47A248",
  },

  {
    name: "Typescript",
    detail: "",
    image: "typescript.png",
    group: 2,
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    detail: "Styling Framework",
    image: "tailwind.png",
    group: 2,
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  { name: "Bootstrap", detail: "Styling", image: "bootstrap.png", group: 2 },
  { name: "Sass", detail: "Styling Preprocessor", image: "sass.png", group: 2 },
  { name: "Firebase", detail: "Storage", image: "firebase.png", group: 2 },
  {
    name: "Github",
    detail: "Version Control",
    image: "github_white.png",
    group: 2,
    icon: SiGithub,
    color: "#F05033",
  },
  {
    name: "HTML",
    image: "html.png",
    group: 3,
    icon: SiHtml5,
    color: "#E34F26",
  },
  { name: "CSS", image: "css.png", group: 3 },
  {
    name: "Javascript",
    image: "javascript.png",
    group: 3,
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  { name: "Trello", image: "trello.png", group: 3 },
  { name: "AutoCad", image: "autocad.png", group: 3 },
  { name: "Photoshop", image: "photoshop.png", group: 3 },
];

export default SKILLS_TECHNICAL;
