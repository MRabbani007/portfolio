"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  delay?: number;
  from?: "right" | "left" | "top" | "bottom";
  className?: string;
};

export default function Slide({
  children,
  delay = 0,
  from = "bottom",
  className,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (!isInView) {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const offsetY = from === "bottom" ? 80 : from === "top" ? -10 : 0;
  const offsetX = from === "left" ? -80 : from === "right" ? 80 : 0;

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: offsetY, x: offsetX },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
