import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

type Props = {
  showSideMenu: boolean;
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ showSideMenu, setShowSideMenu }: Props) {
  return (
    <>
      <div
        className={
          (showSideMenu ? "left-0" : "-left-[5000px]") +
          " md:hidden fixed top-0 w-full h-screen bg-black/70"
        }
      ></div>
      <div
        className={
          (showSideMenu ? "" : " -translate-x-[1000px] ") +
          " md:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[30%] h-full bg-zinc-300 flex flex-col justify-between duration-300"
        }
      >
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="cursor-pointer">
            <Image
              src={"/assets/logo/logo.png"}
              alt="Mohamad"
              width={60}
              height={40}
            />
          </Link>
          <button
            className="p-2 bg-zinc-400 rounded-full text-white hover:shadow-xl hover:bg-zinc-500 shadow-zinc-400 duration-200"
            onClick={() => setShowSideMenu(false)}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <p className="p-4 text-md">
          Let{"'"}s build something legendary together
        </p>
        <ul className="flex flex-col gap-3 uppercase px-4 h-full text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Skills</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Experience</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="px-4 my-4">
          <p className="uppercase my-2 font-bold text-md">Let&aposs Connect</p>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer">
              <FaLinkedinIn size={28} />
            </div>
            <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer">
              <FaGithub size={28} />
            </div>
            <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer">
              <AiOutlineMail size={28} />
            </div>
            <div className="p-2 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-200 cursor-pointer">
              <BsFillPersonLinesFill size={28} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
