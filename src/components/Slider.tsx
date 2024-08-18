"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./slider.module.css";
import { SliderItem } from "../../types";
import Image from "next/image";
import Link from "next/link";

interface SliderProps {
  // activeSlide: number;
  data: SliderItem[];
}

export default function Slider(props: SliderProps) {
  const [activeSlide, setactiveSlide] = useState(2);

  const next = () => {
    if (activeSlide < props.data.length - 1) {
      setactiveSlide(activeSlide + 1);
    } else {
      setactiveSlide(0);
    }
  };

  const prev = () => {
    if (activeSlide > 0) {
      setactiveSlide(activeSlide - 1);
    } else {
      setactiveSlide(props.data.length - 1);
    }
  };

  const getStyles = (index: number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  const handleSlideClick = (idx: number) => {
    setactiveSlide(idx);
  };

  return (
    <>
      <div className="relative group">
        {/* carousel */}
        <div className={styles.slideC}>
          {props.data.map((item, i) => (
            <React.Fragment key={item.id}>
              <div
                className={
                  (i === activeSlide ? "flex " : "hidden md:flex ") +
                  ` ${styles.slide}  flex items-center justify-center bg-zinc-950`
                }
                style={{
                  // background: item?.bgColor,
                  boxShadow: `0 5px 20px #facc1530`,
                  ...getStyles(i),
                }}
              >
                <Slide
                  item={item}
                  idx={i}
                  activeSlide={activeSlide}
                  handleSlideClick={handleSlideClick}
                />
              </div>
              <div
                className={
                  (i === activeSlide ? "flex " : "hidden md:flex ") +
                  ` ${styles.reflection}`
                }
                style={{
                  background: `linear-gradient(to bottom, #facc1540, transparent)`,
                  ...getStyles(i),
                }}
              />
              {/* ${item?.bgColor} */}
            </React.Fragment>
          ))}
        </div>
        {/* carousel */}

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 invisible group-hover:visible duration-200"
          onClick={prev}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 invisible group-hover:visible duration-200"
          onClick={next}
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}

function Slide({
  item,
  idx,
  activeSlide,
  handleSlideClick,
}: {
  item: SliderItem;
  idx: number;
  activeSlide: number;
  handleSlideClick: (idx: number) => void;
}) {
  return (
    <div
      onClick={() => handleSlideClick(idx)}
      className={` p-4 flex-col h-full flex-1 gap-2 relative overflow-hidden `}
    >
      {item?.icon}
      <p
        className={`text-2xl font-medium text-zinc-100 border-b-4 pb-2`}
        style={{ borderColor: "#facc15" || item?.bgColor }}
      >
        {item?.title}
      </p>
      {/* <p>{item?.about}</p> */}
      <div className="flex-1 mx-auto h-[60%] w-full">
        <Image
          src={"/assets/projects/" + item?.images[0]}
          alt={item?.title}
          width={300}
          height={200}
          quality={100}
          className="w-full object-cover"
        />
      </div>
      <div
        className={
          (idx === activeSlide
            ? ""
            : "invisible opacity-0 pointer-events-none ") +
          " flex items-center gap-8 justify-center py-2 px-4 absolute bottom-4 left-0 right-0"
        }
      >
        {item?.live_URL && (
          <Link
            href={item.live_URL}
            target="_blank"
            className="bg-zinc-950/70 hover:bg-zinc-950/90 text-accent py-2 px-4 rounded-lg duration-100"
          >
            Demo
          </Link>
        )}
        <Link
          href={`/projects/${item.id}/${item.name}`}
          title={`More about ${item.title}`}
          className="bg-zinc-950/70 hover:bg-zinc-950/90 text-accent py-2 px-4 rounded-lg duration-100"
        >
          More
        </Link>
      </div>
    </div>
  );
}
