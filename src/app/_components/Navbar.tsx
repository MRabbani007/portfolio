"use client";

import Image from "next/image";
import Link from "next/link";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [showPortMenu, setShowPortMenu] = useState(false);

  const pathname = usePathname();
  const ref = useRef(null);

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

  useEffect(() => {
    const handlePortfolioMenu = () => {
      // if (ref?.current) {
      //   if(!ref?.current.contains(e?.target))
      //   setShowPortMenu(false);
      // }
    };

    window.addEventListener("click", handlePortfolioMenu);

    return () => window.removeEventListener("scroll", handlePortfolioMenu);
  }, []);

  return (
    <nav
      className={
        (shadow ? "shadow-sm shadow-blue-700 " : "  ") +
        "fixed top-0 left-0 right-0 h-[80px] px-4 sm:px-8 z-[100] text-xl bg-gradient-to-br from-zinc-300 to-zinc-100 duration-200"
      }
    >
      <div className="flex items-center justify-between max-w-[1000px] mx-auto h-full">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/assets/logo/logo.png"}
            alt="Mohamad"
            width={80}
            height={80}
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
                // onMouseOver={() => setShowPortMenu(true)}
                // onMouseLeave={() => setShowPortMenu(false)}
                onClick={() => setShowPortMenu((curr) => !curr)}
                className={
                  (isPortfolio ? "w-8" : "w-0 invisible overflow-hidden") +
                  " duration-200 delay-0"
                }
              >
                <IoIosArrowForward
                  size={28}
                  className={
                    (showPortMenu ? "rotate-90" : "") + " duration-200"
                  }
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
            ref={ref}
            className={
              (isPortfolio && showPortMenu
                ? ""
                : " -translate-y-4 opacity-0 invisible") +
              " absolute top-14 -right-4 hidden md:flex items-center gap-5 bg-zinc-200 rounded-lg py-2 px-4 duration-200"
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
      </div>
      <Sidebar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
    </nav>
  );
}
