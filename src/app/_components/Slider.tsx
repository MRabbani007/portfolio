"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

const delay = 3000;

type Props = {
  project: {
    name: string;
    live_URL: string;
    code_URL: string;
    images: string[];
    imageNames: string[];
  };
};

const Slider = ({ project }: Props) => {
  const [displayIndex, setDisplayIndex] = useState(0);

  const timeOutRef = useRef(null);

  const resetTimeout = () => {
    if (timeOutRef?.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  const gotoNext = () => {
    setAutoSlide(!autoSlide);
    let newIndex =
      displayIndex === project?.images.length - 1 ? 0 : displayIndex + 1;
    setDisplayIndex(newIndex);
  };

  const gotoPrevious = () => {
    setAutoSlide(!autoSlide);
    let newIndex =
      displayIndex === 0 ? project?.images.length - 1 : displayIndex - 1;
    setDisplayIndex(newIndex);
  };

  const gotoSlide = (value: number) => {
    setAutoSlide(!autoSlide);
    setDisplayIndex(value);
  };

  const [autoSlide, setAutoSlide] = useState(false);

  useEffect(() => {
    resetTimeout();

    if (autoSlide) {
      setTimeout(() => {
        setDisplayIndex((prevIndex) =>
          prevIndex === project?.images.length - 1 ? 0 : prevIndex + 1
        );
      }, delay);
    }

    return () => {
      resetTimeout();
    };
  }, [autoSlide, displayIndex]);

  return (
    <div className="relative sm:px-10 px-2 w-full max-w-[450px] h-fit rounded-lg">
      {/* Slider controls */}
      <button
        type="button"
        className="sm:absolute hidden left-0 top-[50%] z-10 "
      >
        <IoChevronBackOutline
          className="inline text-4xl text-yellow-500"
          onClick={gotoPrevious}
        />
      </button>
      <button
        type="button"
        className="sm:absolute hidden right-0 top-[50%] z-10 "
      >
        <IoChevronForwardOutline
          className="inline text-4xl text-yellow-500"
          onClick={gotoNext}
        />
      </button>
      <h3 className="bg-gradient-to-br from-blue-500 to-blue-400 py-2 mb-2 text-center text-white rounded-full">
        {project?.name}
      </h3>
      {/* Carousel Wrapper */}
      <div className="sm:h-[250px] h-[250px] overflow-hidden relative group rounded-lg">
        {/* <div
          className={`flex flex-row h-full duration-700 ease-in-out`}
          style={{ transform: `translateX(${-displayIndex * 100}%)` }}
        >
        </div> */}
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-auto z-1">
          <Image
            src={"/assets/projects/" + project?.images[displayIndex]}
            width={450}
            height={200}
            alt={project?.imageNames[displayIndex]}
          />
        </div>
        {/* Hover effect for images */}
        <div className="relative w-full h-full bg-blue-600 flex flex-col justify-center items-center opacity-0 group-hover:opacity-90 z-20">
          <span className="text-2xl font bold text-white tracking-wider ">
            {project.name}
          </span>
          <div className="pt-8 text-center ">
            {/* eslint-disable-next-line */}
            <a href={project.live_URL} target="_blank">
              <button
                className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
              >
                Code
              </button>
            </a>
            {/* eslint-disable-next-line */}
            <a href={project.live_URL} target="_blank">
              <button
                className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
              >
                Live
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Slider indicators  */}
      <div className="flex items-center justify-center">
        {Array.isArray(project?.images) &&
          project.images.map((_item: string, index: number) => {
            return (
              <RxDotFilled
                key={index}
                onClick={() => gotoSlide(index)}
                className={
                  (displayIndex === index
                    ? "text-yellow-500 text-4xl"
                    : "text-yellow-200 text-4xl") +
                  " cursor-pointer duration-500"
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default Slider;
