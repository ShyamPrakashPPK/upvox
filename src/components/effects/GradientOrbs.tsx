"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function GradientOrbs() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 40;
      const y = (event.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, mouseX, mouseY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow"
        style={reducedMotion ? undefined : { x: springX, y: springY }}
      />
      <motion.div
        className="absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px] animate-float"
        style={
          reducedMotion
            ? undefined
            : { x: springX, y: springY, translateX: "-20%" }
        }
      />
      <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-accent/5 blur-[90px] animate-float-reverse" />
    </div>
  );
}
