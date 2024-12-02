"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Slide from "@/components/animate/Slide";
import MobileMenu from "./MobileMenu";
import PortfolioSideBar from "./PortfolioSideBar";
import { ModeToggle } from "../ui/ModeToggle";

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
  const pathname = usePathname();

  const isPortfolio = pathname === "/portfolio";

  const isActive = (page: string): boolean =>
    pathname.split("/").includes(page);

  // from-background to-background/50
  return (
    <nav className={"absolute top-0 left-0 right-0 z-50 text-xl "}>
      <div className="flex items-center px-4 sm:px-10 mx-auto h-20">
        {/* Logo */}
        <Link
          title="Home Page"
          href="/"
          className="font-extrabold text-4xl text-white drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]"
        >
          MR
        </Link>
        <Slide
          from="top"
          delay={0}
          className="w-full hidden md:flex items-center justify-end gap-5 mr-4 ml-auto text-white"
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
        <div className="ml-auto flex items-center gap-4">
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
      {isPortfolio && <PortfolioSideBar />}
    </nav>
  );
}
