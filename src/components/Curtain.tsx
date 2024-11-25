"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Curtain() {
  return (
    <div className="absolute inset-4 opacity-50">
      <Image
        src={"/bg_pattern.jpg"}
        alt="pattern"
        fill
        quality={100}
        className="object-cover object-center rounded-2xl -z-10"
      />
      <motion.div
        variants={{
          hidden: {
            width: "100%",
            height: "100%",
            // borderLeft: "2px solid white",
            // borderTop: "2px solid white",
          },
          visible: {
            // width: "0%",
            // height: "0%",
            // borderLeft: "0px solid white",
            // borderTop: "0px solid white",
            translateX: "100%",
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0 }}
        className="absolute bottom-0 right-0 bg-black/90"
      ></motion.div>
    </div>
  );
}
