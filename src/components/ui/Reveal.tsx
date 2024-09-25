"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  // from?: "right" | "left" | "top" | "bottom";
};

export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // if (!isInView) {
    //   mainControls.start("hidden");
    // }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1.5, delay: delay ?? 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
