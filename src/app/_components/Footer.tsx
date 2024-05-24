import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex flex-wrap justify-evenly p-4 bg-zinc-300">
      <div>
        <h4 className="text-blue-500 uppercase tracking-wide text-xl font-bold">
          Contacts
        </h4>
        <div className="flex items-center gap-3 py-2 px-4">
          <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-200 cursor-pointer">
            <FaLinkedinIn size={25} />
          </div>
          <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-200 cursor-pointer">
            <FaGithub size={25} />
          </div>
          <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-200 cursor-pointer">
            <AiOutlineMail size={25} />
          </div>
          <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-200 cursor-pointer">
            <BsFillPersonLinesFill size={25} />
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-blue-500 uppercase tracking-wide text-xl font-bold">
          Quick Links
        </h4>
        <ul>
          <li>Portfolio</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h4 className="text-blue-500 uppercase tracking-wide text-xl font-bold">
          Site Map
        </h4>
        <ul>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Roadmap</li>
          <li>Resources</li>
        </ul>
      </div>
    </div>
  );
}
