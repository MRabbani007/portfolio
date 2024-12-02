"use client";

import { CONTACTS } from "@/lib/contacts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { Button } from "../ui/button";

const menuItems = [
  { label: "Portfolio", url: "/portfolio" },
  { label: "Projects", url: "/projects" },
  { label: "Blog", url: "/blog" },
  { label: "Roadmap", url: "/roadmap" },
  { label: "Resources", url: "/resources" },
];

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [showMenu]);

  return (
    <div className="">
      <Button
        title="Menu"
        variant="outline"
        className="md:hidden"
        onClick={() => setShowMenu(true)}
      >
        <AiOutlineMenu />
      </Button>
      <nav
        className={
          (showMenu ? "" : "translate-x-full ") +
          " md:hidden fixed inset-0 flex flex-col duration-200 bg-background text-foreground"
        }
      >
        <div className="flex items-center gap-4 justify-between p-4 h-20">
          <Link title="Home Page" href="/" onClick={() => setShowMenu(false)}>
            <span className="font-extrabold text-4xl">MR</span>
          </Link>
          <Button variant="outline" onClick={() => setShowMenu(false)}>
            <BiX />
          </Button>
        </div>
        <p className="p-4">Let's build something legendary together!</p>
        <ul className="flex-1 flex flex-col gap-4 p-4">
          {menuItems.map((item, idx) => (
            <li key={idx} onClick={() => setShowMenu(false)}>
              <Link href={item.url} className="hover:text-accent duration-200">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-4 bg-sky-900 dark:bg-transparent">
          <p className="text-accent mb-4">Contacts</p>
          <div className="flex items-center gap-4 text-zinc-800 dark:text-foreground">
            {CONTACTS.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                target="_blank"
                className="p-2 md:p-4 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:scale-105 transition ease-in duration-200"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
