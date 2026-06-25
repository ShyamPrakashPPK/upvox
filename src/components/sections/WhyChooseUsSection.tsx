"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FEATURES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseUsSection() {
  const reducedMotion = useReducedMotion();
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reducedMotion) return;

    tilesRef.current.forEach((tile, index) => {
      if (!tile) return;
      gsap.to(tile, {
        y: index % 2 === 0 ? -20 : 20,
        ease: "none",
        scrollTrigger: {
          trigger: tile,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, [reducedMotion]);

  return (
    <section
      id="why-us"
      className="section-padding relative bg-bg-secondary"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <h2
            id="why-heading"
            className="mx-auto mb-16 max-w-4xl text-center font-heading text-3xl font-bold leading-tight text-text md:text-4xl lg:text-5xl xl:text-6xl"
          >
            We don&apos;t just run campaigns — we build{" "}
            <span className="text-accent">growth engines</span> for modern
            businesses.
          </h2>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 0.1}>
              <div
                ref={(el) => {
                  tilesRef.current[index] = el;
                }}
                className="group rounded-2xl border border-border bg-card/50 p-8 transition-all duration-500 hover:border-accent/30 hover:bg-card"
              >
                <div className="mb-4 h-px w-8 bg-accent/60 transition-all duration-500 group-hover:w-16" />
                <h3 className="mb-3 font-heading text-xl font-semibold text-text">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
