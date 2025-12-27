import { CONTACTS } from "@/lib/contacts";
import Link from "next/link";
import React from "react";

const footer_items = [
  {
    title: "MRabbani",
    text: "Freelance web developer",
  },
  {
    title: "About",
    children: [
      { title: "Portfolio", url: "/portfolio" },
      { title: "Projects", url: "/projects" },
      { title: "Blog", url: "/blog" },
    ],
  },
  {
    title: "Services",
    children: [
      { title: "Design", url: "#" },
      { title: "Frontend", url: "#" },
      { title: "Backend", url: "#" },
      { title: "Deployment", url: "#" },
    ],
  },
  {
    title: "Contact",
    children: [
      { title: "Send Message", url: "#" },
      { title: "Copy Email", url: "#" },
    ],
  },
  {
    title: "Quick Links",
    children: [
      { title: "Portfolio", url: "/portfolio" },
      { title: "Projects", url: "/projects" },
      { title: "Blog", url: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sky-800 to-sky-950 dark:bg-gradient-to-b dark:from-gray-900 dark:to-zinc-900 py-0">
      <div className=" flex items-start sm:items-start sm:flex-row flex-col flex-wrap sm:justify-between gap-4 p-4 sm:p-8 md:py-12 ">
        {footer_items.map((item, idx) => (
          <div key={idx} className="space-y-4">
            <p className="uppercase tracking-wide text-start font-medium text-white">
              {item?.title}
            </p>
            {item?.text && (
              <p className="text-start text-zinc-400">{item.text}</p>
            )}
            {item?.children && item.children.length > 0 && (
              <ul className="text-start text-zinc-400">
                {item.children.map((linkItem, idx) => (
                  <li key={idx} className=" hover:text-zinc-50 duration-200">
                    <Link href={linkItem.url}>{linkItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* Copy right & contacts */}
      <div className="flex items-center justify-between p-8 mx-auto text-gray-400 text-center border-t-[1px] border-gray-400">
        <p>&copy; {new Date().getFullYear()} MRabbani. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {CONTACTS.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              target="_blank"
              className="text-white hover:scale-105 transition ease-in duration-200"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
