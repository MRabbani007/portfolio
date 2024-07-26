import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function PortfolioHome() {
  return (
    <div id="home" className="section-container pt-12">
      <section className="flex flex-row items-center justify-between lg:flex-nowrap flex-wrap gap-4">
        <div className="flex flex-col gap-3 w-fit mx-auto">
          <p className="text-3xl sm:text-4xl md:text-7xl font-extralight uppercase">
            Mohamad Rabbani
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-extralight">
            Software Engineer
          </p>
          <p className="py-4 max-w-[700px] text-lg sm:text-xl md:text-2xl font-light text-zinc-700 duration-500">
            I<span>{"'"}</span>m a <strong>full stack developer</strong>{" "}
            specializing in building exceptional digital experiences. Currently
            I<span>{"'"}</span>m focused on building responsive full-stack web
            applications
          </p>
          <Link
            href="#projects"
            className="w-fit text-xl group border-none px-6 py-3 my-2 flex items-center duration-200 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500 shadow-blue-500 bg-gradient-to-r from-sky-600 to-sky-400 text-white"
          >
            View Work
            <IoIosArrowForward
              className="group-hover:rotate-90 duration-200"
              size={30}
            />
          </Link>
        </div>
        <div className=" w-[40%] h-auto">
          <Image
            src={"/assets/portfolio/laptop.jpg"}
            alt="laptop"
            width={3648}
            height={4560}
            quality={100}
            className=""
          />
        </div>
      </section>
    </div>
  );
}
