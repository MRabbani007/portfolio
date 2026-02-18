import { BsFillPersonLinesFill } from "react-icons/bs";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const CONTACTS = [
  {
    url: "https://linkedin.com/in/mohamadrabbani",
    label: "",
    icon: <FaLinkedin size={25} />,
  },
  {
    url: "https://github.com/MRabbani007",
    label: "",
    icon: <FaGithub size={25} />,
  },
  {
    url: "mailto: mrabbani@outlook.com",
    label: "",
    icon: <Mail size={25} />,
  },
  {
    url: "/portfolio/#contact",
    label: "",
    icon: <BsFillPersonLinesFill size={28} />,
  },
];
