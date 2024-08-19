"use client";

import Slide from "@/components/ui/Slide";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

type Props = {
  index: number;
  item: {
    id: number;
    position: string;
    company: string;
    project: string;
    period: string;
    time: string;
    image: StaticImageData | string;
    companyLogo: StaticImageData | string;
    responsibilities: string[];
  };
};

const ExperienceBlock = ({ item, index }: Props) => {
  const [expand, setExpand] = useState(true);

  return (
    <article key={index} className="min-h-screen pt-4">
      <Slide>
        <header
          className="py-4 px-4 cursor-pointer relative"
          onClick={() => setExpand(true)}
        >
          <h3 className="font-semibold">{item?.position}</h3>
          <p className="text-lg font-extralight">
            <strong>{item?.company}</strong>
            <i className="text-base text-zinc-400">{" (" + item?.time + ")"}</i>
          </p>
        </header>
      </Slide>
      <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-4 sm:px-4 duration-300 ">
        {/* Image */}
        <Slide className="max-h-[400px] sm:max-w-[40%] relative group overflow-hidden flex-1">
          <Image
            src={item.image}
            alt={item.project}
            width={1439}
            height={809}
            quality={100}
            className="w-full h-full object-cover"
          />
          {item.project !== "" && (
            <p className="text-pretty text-sm md:text-xl absolute bottom-0 left-0 w-full p-4 bg-zinc-700/60 duration-300 invisible group-hover:visible translate-y-20  group-hover:translate-y-0">
              {item.project}
            </p>
          )}
        </Slide>
        <div className="flex flex-col flex-1 gap-4 text-white">
          {item.responsibilities.map((resp, index) => (
            <Slide
              key={"expitem-" + index}
              delay={index * 0.2}
              className="font-extralight text-lg duration-200 bg-zinc-900 px-4 py-2"
            >
              {resp}
            </Slide>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceBlock;
