"use client";

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
    image: StaticImageData | string;
    companyLogo: StaticImageData | string;
    responsibilities: string[];
  };
};

const ExperienceBlock = ({ item, index }: Props) => {
  const [expand, setExpand] = useState(false);

  return (
    <article key={index} className="">
      <header
        className="py-2 px-4 flex gap-2 cursor-pointer relative"
        onClick={() => setExpand(!expand)}
      >
        <div className="flex items-center gap-2">
          <Image
            src={item?.companyLogo}
            alt="Company Logo"
            width={100}
            height={100}
            className="w-14 h-auto"
          />
          <div>
            <h3 className="">{item?.position}</h3>
            {/* <p className="">{item?.period}</p> */}
            <p className="text-lg font-extralight">
              <i>{item?.company}</i>
            </p>
          </div>
        </div>
        <BsChevronRight
          className={
            (expand ? "rotate-90" : "rotate-0") +
            " text-xl duration-200 absolute top-1/2 -translate-y-1/2 right-4"
          }
        />
      </header>
      <div className="flex-1">
        <div
          className={
            (expand
              ? "opacity-100 h-fit translate-y-0"
              : "opacity-0 invisible h-0 -translate-y-8") +
            " flex flex-wrap items-stretch duration-300  sm:px-4 py-4 "
          }
        >
          <div className="sm:max-w-[40%] w-full">
            <Image
              src={item.image}
              alt={item.project}
              width={500}
              height={350}
              className="max-h-[400px]"
            />
            {item.project !== "" && (
              <p className="text-pretty text-xl duration-300">{item.project}</p>
            )}
          </div>
          <div className="flex-1 flex flex-col">
            {item.responsibilities.map((resp, index) => (
              <p
                className="font-light text-xl duration-200 pb-4"
                key={"expitem-" + index}
              >
                {resp}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceBlock;
