"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  from?: "right" | "left" | "top" | "bottom";
};

export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (!isInView) {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const offsetY = from === "bottom" ? 80 : from === "top" ? -80 : 0;
  const offsetX = from === "left" ? 80 : from === "right" ? -80 : 0;

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: offsetY, x: offsetX },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay ?? 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
