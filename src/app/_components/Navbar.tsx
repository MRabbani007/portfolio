"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [showPortMenu, setShowPortMenu] = useState(false);

  const pathname = usePathname();

  const isPortfolio = pathname === "/portfolio";

  const isActive = (page: string): boolean =>
    pathname.split("/").includes(page);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(false);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        (shadow ? "shadow-sm shadow-blue-700 " : "  ") +
        "fixed top-4 left-4 right-4 flex items-center justify-between py-2 px-8 z-[100] bg-gradient-to-br from-zinc-300 to-zinc-100 text-xl rounded-full duration-200"
      }
    >
      {/* Logo */}
      <Link href="/" className="cursor-pointer">
        <Image
          src={"/assets/logo/logo.png"}
          alt="Mohamad"
          width={60}
          height={40}
        />
      </Link>
      <div className="flex flex-col gap-1 items-center relative">
        <ul className={" hidden md:flex items-center gap-5 "}>
          <li
            className={
              (isActive("portfolio") ? "text-blue-700" : "") +
              " flex items-center gap-2 duration-200 delay-0"
            }
          >
            <Link href="/portfolio">Portfolio</Link>
            <button
              onClick={() => setShowPortMenu((curr) => !curr)}
              className={
                (isPortfolio ? "w-8" : "w-0 invisible overflow-hidden") +
                " duration-200 delay-0"
              }
            >
              <IoIosArrowForward
                size={28}
                className={(showPortMenu ? "rotate-90" : "") + " duration-200"}
              />
            </button>
          </li>
          <li
            className={
              (isActive("projects") ? "text-blue-700" : "") + " duration-200"
            }
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={
              (isActive("blog") ? "text-blue-700" : "") + " duration-200"
            }
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={
              (isActive("roadmap") ? "text-blue-700" : "") + " duration-200"
            }
          >
            <Link href="/roadmap">Roadmap</Link>
          </li>
          <li
            className={
              (isActive("resources") ? "text-blue-700" : "") + " duration-200"
            }
          >
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
        <ul
          className={
            (isPortfolio && showPortMenu
              ? ""
              : " -translate-y-4 opacity-0 invisible") +
            " absolute top-11 -right-4 hidden md:flex items-center gap-5 bg-zinc-200 rounded-lg py-2 px-4 duration-200"
          }
        >
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <button className="md:hidden" onClick={() => setShowSideMenu(true)}>
        <AiOutlineMenu size={32} />
      </button>
      <Sidebar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
    </nav>
  );
}