"use client";

import Slide from "@/components/ui/Slide";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import Reveal from "../ui/Reveal";

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
    <Reveal delay={0} className="min-h-screen pt-4  ">
      <article
        key={index}
        className="border-2 border-yellow-400/25 rounded-xl p-4 bg-white/10"
      >
        <header className="pb-4 px-4 relative" onClick={() => setExpand(true)}>
          <h3 className="font-semibold">{item?.position}</h3>
          <p className="text-lg font-extralight">
            <strong>{item?.company}</strong>
            <i className="text-base text-zinc-400">{" (" + item?.time + ")"}</i>
          </p>
        </header>
        <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-4 sm:px-4 duration-300 ">
          {/* Image */}
          <div className="max-h-[400px] sm:max-w-[40%] relative group overflow-hidden flex-1 rounded-xl">
            <Image
              src={item.image}
              alt={item.project}
              width={1439}
              height={809}
              quality={100}
              className="w-full h-full object-cover"
            />
            {item.project !== "" && (
              <p className="text-pretty text-sm md:text-xl absolute bottom-0 left-0 w-full p-4 text-white bg-zinc-700/60 duration-300 invisible group-hover:visible translate-y-20  group-hover:translate-y-0">
                {item.project}
              </p>
            )}
          </div>
          <div className="flex flex-col flex-1 gap-4 text-white">
            {item.responsibilities.map((resp, index) => (
              <div
                key={"expitem-" + index}
                className="font-extralight text-lg duration-200 bg-zinc-900 px-4 py-2"
              >
                {resp}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default ExperienceBlock;
