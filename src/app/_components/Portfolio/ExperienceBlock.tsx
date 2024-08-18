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
    <article key={index} className="min-h-screen pt-4 px-4">
      <Slide>
        <header
          className="py-4 px-4 flex gap-2 cursor-pointer relative"
          onClick={() => setExpand(true)}
        >
          <div className="flex items-center w-fit gap-2 ">
            {/* <Image
            src={item?.companyLogo}
            alt="Company Logo"
            width={100}
            height={100}
            className="w-14 h-auto"
          /> */}
            <div>
              <h3 className="font-semibold">{item?.position}</h3>
              {/* <p className="">{item?.period}</p> */}
              <p className="text-lg font-extralight">
                <strong>{item?.company}</strong>
                <i className="text-base text-zinc-400">
                  {" (" + item?.time + ")"}
                </i>
              </p>
            </div>
          </div>
          {/* <BsChevronRight
          className={
            (expand ? "rotate-90" : "rotate-0") +
            " text-xl duration-200 absolute top-1/2 -translate-y-1/2 right-4"
          }
        /> */}
        </header>
      </Slide>
      <div className="flex-1">
        <div
          className={
            (expand
              ? "opacity-100 h-fit translate-y-0"
              : "opacity-0 invisible h-0 -translate-y-8") +
            " flex flex-wrap lg:flex-nowrap items-stretch duration-300  sm:px-4 py-4 "
          }
        >
          <Slide className="max-h-[400px] sm:max-w-[40%] w-full relative rounded-xl shadow-md shadow-zinc-600">
            <>
              <Image
                src={item.image}
                alt={item.project}
                width={1439}
                height={809}
                quality={100}
                className="w-full h-full object-cover rounded-xl"
              />
              {item.project !== "" && (
                <p className="text-pretty text-xl duration-300 rounded-b-xl absolute bottom-0 left-0 w-full p-4 bg-zinc-700/60">
                  {item.project}
                </p>
              )}
            </>
          </Slide>
          <div className="px-4 space-y-2 text-white">
            {item.responsibilities.map((resp, index) => (
              <Slide key={"expitem-" + index} from="right" delay={index * 0.2}>
                <p className="font-extralight text-lg text-wrap duration-200 bg-zinc-950 px-4 py-2 rounded-xl">
                  {resp}
                </p>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceBlock;
