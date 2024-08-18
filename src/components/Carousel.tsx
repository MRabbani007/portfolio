"use client";

import React, { useState } from "react";
import styles from "./carousel.module.css";
import { TbUvIndex } from "react-icons/tb";
import { motion } from "framer-motion";

type Props = {
  items: {
    image: string;
    name: string;
  }[];
  animationDuration: "10s" | "20s" | "30s" | "40s" | "50s" | "60s";
};

export default function Carousel({ items, animationDuration }: Props) {
  const [isHover, setIsHover] = useState(false);

  const w = 150;
  const r = Math.ceil((items.length * (w + 30)) / 2 / Math.PI);

  return (
    <div
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      className="w-full h-[200px] overflow-hidden relative group"
    >
      <div className="w-32 h-full bg-gradient-to-r from-zinc-800 to-yellow-200/0 absolute top-0 left-0 bottom-0 z-10" />
      <div
        className="absolute top-6 left-[calc(50%-40px)] -translate-y-full animate-autoRotate transform-style-3d"
        style={{
          animationPlayState: isHover ? "paused" : "running",
          animationDuration,
          height: "200px",
        }}
      >
        {items.map((item, index) => {
          const rotateY = index * (360 / items.length);
          return (
            <motion.div
              className="absolute inset-0 backface-hidden"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              style={{
                transform: `rotateY(${rotateY}deg) translateZ(${r}px)`,
                width: w + "px",
                height: w + "px",
              }}
            >
              <div>
                <img
                  src={"/assets/skills/" + item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="w-32 h-full bg-gradient-to-l from-zinc-800 to-yellow-200/0 absolute top-0 right-0 bottom-0 z-10" />
    </div>
  );
}
