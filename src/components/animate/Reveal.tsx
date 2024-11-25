"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  scale?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  scale = 0,
}: Props) {
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
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 1, y: 0, scale: scale },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: delay ?? 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
