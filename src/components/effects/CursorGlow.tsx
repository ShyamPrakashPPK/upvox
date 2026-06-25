"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const isFinePointer = useMediaQuery("(pointer: fine)");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    if (reducedMotion || !isFinePointer) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, isFinePointer, mouseX, mouseY]);

  if (reducedMotion || !isFinePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      aria-hidden="true"
    >
      <div className="h-80 w-80 rounded-full bg-accent/8 blur-[100px]" />
    </motion.div>
  );
}
