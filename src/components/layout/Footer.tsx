import { CONTACTS } from "@/lib/contacts";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="w-full">
      <div className="flex sm:flex-row flex-col flex-wrap sm:justify-between md:px-10 p-4  gap-6 w-fit sm:w-full sm:mx-auto">
        <div className="">
          <h4 className="text-accent uppercase tracking-wide text-xl font-bold">
            Contacts
          </h4>
          <ul className="flex items-center gap-3 py-2">
            {CONTACTS.map((item, idx) => (
              <li
                key={idx}
                className="p-4 rounded-full bg-zinc-400 dark:bg-zinc-800 hover:scale-105 ease-in duration-200 cursor-pointer"
              >
                <Link href={item.url} target="_blank">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="text-accent uppercase tracking-wide text-xl font-bold">
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
          <h4 className="text-accent uppercase tracking-wide text-xl font-bold">
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
    </section>
  );
}
