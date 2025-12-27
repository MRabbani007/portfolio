"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the structure for an icon
interface IconItem {
  id: number;
  name: string;
  icon: React.ElementType;
  color: string;
}

type Props = {
  items: Skill[];
  animationDuration?: "10s" | "20s" | "30s" | "40s" | "50s" | "60s" | "80s";
};

export default function IconCarousel({
  items,
  animationDuration = "80s",
}: Props) {
  const [isHover, setIsHover] = useState(false);

  const w = 100;
  const r = Math.ceil((items.length * 2 * (w + 30)) / 2 / Math.PI);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-full h-[160px] overflow-hidden relative group bg-zinc-200 dark:bg-black"
    >
      <div className="w-10 h-full bg-gradient-to-r from-zinc-200 via-zinc-200/50 to-transparent dark:from-black dark:to-black/95 absolute top-0 left-0 bottom-0 z-10" />
      <div className="w-20 h-full bg-gradient-to-r dark:from-black/95 dark:to-black/0 absolute top-0 left-10 bottom-0 z-10" />
      <div className="absolute top-6 left-[calc(50%-40px)] translate-y-[10px] ">
        <div
          className="animate-autoRotate transform-style-3d"
          style={{
            animationPlayState: isHover ? "paused" : "running",
            animationDuration,
            height: "200px",
          }}
        >
          {[...items, ...items].map((item, index) => {
            const rotateY = index * (360 / items.length / 2);
            return (
              <motion.div
                className="absolute inset-0 backface-hidden bg-white"
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                style={{
                  transform: `rotateY(${rotateY}deg) translateZ(${r}px)`,
                  width: w + "px",
                  height: w + "px",
                  minWidth: w + "px",
                }}
              >
                <div
                  className="h-full flex items-center justify-center p-4 bg-whit rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  style={{ color: item.color }}
                  title={item.name}
                >
                  {!!item?.icon ? (
                    <item.icon size={60} />
                  ) : (
                    <img
                      src={"/assets/skills/" + item?.image}
                      alt={item?.name}
                      className="object-contain"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="w-10 h-full bg-gradient-to-l dark:from-black dark:to-black/95 absolute top-0 right-0 bottom-0 z-10" />
      <div className="w-20 h-full bg-gradient-to-l dark:from-black/95 dark:to-black/0 absolute top-0 right-10 bottom-0 z-10" />
    </div>
  );
}
