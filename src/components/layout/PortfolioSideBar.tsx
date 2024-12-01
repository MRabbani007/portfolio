"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const items = [
  { label: "Home", url: "#home" },
  { label: "About", url: "#about" },
  { label: "Skills", url: "#skills" },
  { label: "Projects", url: "#projects" },
  { label: "Experience", url: "#experience" },
  { label: "Contact", url: "#contact" },
];

export default function PortfolioSideBar() {
  const ref = useRef<HTMLDivElement>(null);

  // const width = Math.ceil((ref.current?.getClientRects()[0].height ?? 0) / 2);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-10 top-24 border-white`}
    >
      <div
        ref={ref}
        className={
          (true ? "" : "") +
          "  hidden md:flex flex-row items-start justify-start py-2 px-0 duration-200 rotate-90 origin-top-left text-base font-extralight"
        }
      >
        {items?.map((item, index) => (
          <Link
            key={index}
            title={item.label}
            href={item.url}
            className="hover:text-accent bg-sky-900 hover:bg-sky-800 hover:-translate-y-4 px-4 pt-2 pb-6 duration-200 first:rounded-l-md last:rounded-r-md hover:rounded-t-md"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
