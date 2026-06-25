"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ABOUT_CONTENT, ABOUT_STATS } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !imageRef.current) return;

    const trigger = gsap.to(imageRef.current, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => trigger.scrollTrigger?.kill();
  }, [reducedMotion]);

  return (
    <section
      id="about"
      className="section-padding relative bg-bg-secondary"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="about-heading"
          title="About Us"
          subtitle="A results-driven digital marketing company helping brands grow online."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <RevealOnScroll>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  Mission
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {ABOUT_CONTENT.mission}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  Vision
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {ABOUT_CONTENT.vision}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  Growth-Focused Approach
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {ABOUT_CONTENT.approach}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  Kerala-Based Expertise
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {ABOUT_CONTENT.expertise}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div
              ref={imageRef}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
              aria-label="Agency workspace placeholder"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-card to-bg" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(201,162,39,0.15),transparent_60%)]" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-heading text-2xl font-bold text-text/80">
                  Crafting Digital Excellence
                </p>
                <p className="mt-2 text-sm text-muted">
                  Kochi, Kerala
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-16 sm:grid-cols-3">
          {ABOUT_STATS.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <div className="text-center sm:text-left">
                <p className="font-heading text-4xl font-bold text-text md:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
