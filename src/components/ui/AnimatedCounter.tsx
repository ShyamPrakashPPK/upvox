"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    if (reducedMotion) {
      element.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            element.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value, suffix, prefix, duration, reducedMotion]);

  return (
    <span ref={counterRef} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
