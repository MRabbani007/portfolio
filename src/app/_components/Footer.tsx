import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="flex sm:flex-row flex-col flex-wrap sm:justify-between md:px-10 p-4  gap-6 w-fit sm:w-full max-w-[1000px] sm:mx-auto">
        <div className="">
          <h4 className="text-blue-500 uppercase tracking-wide text-xl font-bold">
            Contacts
          </h4>
          <div className="flex items-center gap-3 py-2 px-4">
            <a
              className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer"
              href="https://linkedin.com/in/mohamadrabbani"
              target="_blank"
            >
              <FaLinkedinIn size={28} />
            </a>
            <a
              className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer"
              href="https://github.com/MRabbani007"
              target="_blank"
            >
              <FaGithub size={28} />
            </a>
            <a
              className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer"
              href="mailto: mrabbani@outlook.com"
              target="_blank"
            >
              <AiOutlineMail size={28} />
            </a>
            <a
              className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer"
              href="/portfolio/#contact"
            >
              <BsFillPersonLinesFill size={28} />
            </a>
          </div>
        </div>
        <div className="">
          <h4 className="text-blue-500 uppercase tracking-wide text-xl font-bold">
            Quick Links
          </h4>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-blue-500 uppercase tracking-wide text-xl font-bold">
            Site Map
          </h4>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
