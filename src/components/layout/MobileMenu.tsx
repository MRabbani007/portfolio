import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const items = [
  {
    url: "https://linkedin.com/in/mohamadrabbani",
    label: "",
    icon: <FaLinkedinIn size={28} />,
  },
  {
    url: "https://github.com/MRabbani007",
    label: "",
    icon: <FaGithub size={28} />,
  },
  {
    url: "mailto: mrabbani@outlook.com",
    label: "",
    icon: <AiOutlineMail size={28} />,
  },
  {
    url: "/portfolio/#contact",
    label: "",
    icon: <BsFillPersonLinesFill size={28} />,
  },
];

export default function MobileMenu({ showMenu, setShowMenu }: Props) {
  return (
    <nav
      className={
        (showMenu ? "" : "translate-x-full ") +
        " md:hidden fixed inset-0 flex flex-col duration-200 bg-black"
      }
    >
      <div className="flex items-center gap-4 justify-between p-4">
        <Link title="Home Page" href="/" className="cursor-pointer">
          <span className="font-extrabold text-4xl">MR</span>
        </Link>
        <button onClick={() => setShowMenu(false)}>
          <BiX size={30} />
        </button>
      </div>
      <p className="p-4">Let's build something legendary together!</p>
      <ul className="p-4 space-y-4 flex-1">
        <li className="hover:text-accent duration-200">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="hover:text-accent duration-200">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:text-accent duration-200">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:text-accent duration-200">
          <Link href="/roadmap">Roadmap</Link>
        </li>
        <li className="hover:text-accent duration-200">
          <Link href="/resources">Resources</Link>
        </li>
      </ul>
      <div className="p-4">
        <p className="text-accent mb-4">Contacts</p>
        <ul className="flex items-center gap-3 py-2">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="p-4 rounded-full bg-zinc-950 hover:scale-105 ease-in duration-200 cursor-pointer"
            >
              <Link href={item.url} target="_blank">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
