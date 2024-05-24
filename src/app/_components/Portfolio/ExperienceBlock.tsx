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
    <article key={index}>
      <header
        className="py-2 px-4 flex flex-wrap sm:flex-nowrap justify-between gap-3 cursor-pointer rounded-md shadow-md shadow-slate-300 relative"
        onClick={() => setExpand(!expand)}
      >
        <p className="my-auto">{item?.period}</p>
        <div className="flex items-center gap-2">
          <Image
            src={item?.companyLogo}
            alt="Company Logo"
            width={32}
            height={32}
          />
          <div>
            <p className="text-xl">{item?.position}</p>
            <p className="text-lg font-extralight">
              <i>{item?.company}</i>
            </p>
          </div>
        </div>
        <BsChevronRight
          className={
            (expand ? "rotate-90" : "rotate-0") +
            " text-xl my-auto duration-200 sm:static absolute top-2 right-2"
          }
        />
      </header>
      <div
        className={
          (expand
            ? "opacity-100 h-fit translate-y-0 "
            : "opacity-0 invisible h-0 -translate-y-8") +
          " flex flex-wrap items-start gap-3 my-3 px-3 duration-500 "
        }
      >
        <div className="sm:w-[40%] w-full py-1">
          <Image src={item.image} alt={item.project} width={500} height={350} />
          <p className="text-center text-xl p-2 bg-slate-400 dark:text-zinc-900 duration-300">
            {item.project}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-1">
          {item.responsibilities.map((resp, index) => (
            <p
              className="p-2 font-light rounded-md shadow-md hover:shadow-slate-600 shadow-slate-400 duration-300"
              key={"expitem-" + index}
            >
              {resp}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceBlock;
