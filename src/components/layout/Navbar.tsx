"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Slide from "@/components/ui/Slide";
import MobileMenu from "./MobileMenu";
import PortfolioSideBar from "./PortfolioSideBar";

const items = [
  {
    label: "Portfolio",
    title: "Portfolio",
    url: "/portfolio",
    isActive: "portfolio",
  },
  {
    label: "Projects",
    title: "Projects",
    url: "/projects",
    isActive: "projects",
  },
  {
    label: "Blog",
    title: "Blog",
    url: "/blog",
    isActive: "blog",
  },
  {
    label: "Roadmap",
    title: "Roadmap",
    url: "/roadmap",
    isActive: "roadmap",
  },
  {
    label: "Resources",
    title: "Resources",
    url: "/resources",
    isActive: "resources",
  },
];

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

    return () => window.removeEventListener("click", handlePortfolioMenu);
  }, []);

  return (
    <nav
      className={
        (shadow ? "shadow-sm shadow-blue-700 " : "  ") +
        " top-0 left-0 right-0 z-50 text-xl duration-200 relative"
      }
    >
      <div className="flex items-center justify-between px-4 sm:px-10 mx-auto h-20">
        {/* Logo */}
        <Link title="Home Page" href="/" className="font-extrabold text-4xl">
          MR
        </Link>
        <Slide
          from="top"
          delay={0}
          className="w-full hidden md:flex items-center justify-end gap-5"
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              className={
                (isActive(item.isActive) ? "text-accent" : "") +
                " hover:text-accent/70 duration-200"
              }
              title={item.title}
              href={item.url}
            >
              {item.label}
            </Link>
          ))}
        </Slide>
        <button
          title="Menu"
          className="md:hidden"
          onClick={() => setShowSideMenu(true)}
        >
          <AiOutlineMenu size={32} />
        </button>
      </div>
      {isPortfolio && <PortfolioSideBar />}

      <MobileMenu showMenu={showSideMenu} setShowMenu={setShowSideMenu} />
    </nav>
  );
}

{
  /* Portfolio Menu */
}
{
  /* <button
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
              </button> */
}
