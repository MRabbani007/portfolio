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

  return (
    <nav className={"absolute top-0 left-0 right-0 z-50 text-xl"}>
      <div className="flex items-center justify-between px-4 sm:px-10 mx-auto h-20">
        {/* Logo */}
        <Link title="Home Page" href="/" className="font-extrabold text-4xl">
          MR
        </Link>
        <Slide
          from="top"
          delay={0}
          className="w-full hidden md:flex items-center justify-end gap-5 mr-4"
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
        <ModeToggle />
        <MobileMenu />
      </div>
      {isPortfolio && <PortfolioSideBar />}
    </nav>
  );
}
