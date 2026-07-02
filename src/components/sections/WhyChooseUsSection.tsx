"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FEATURES } from "@/lib/constants";
import { easeOutExpo } from "@/lib/animations";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

function FeatureCardContent({
  feature,
  index,
  compact = false,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
  compact?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <>
      <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="absolute right-6 top-6 font-heading text-4xl font-bold text-accent/15 transition-colors duration-500 group-hover:text-accent/30">
        {number}
      </span>

      <div className="relative">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent/70">
          {number}
        </p>
        <h3
          className={`mb-3 pr-10 font-heading font-semibold text-text ${
            compact ? "text-xl" : "text-2xl md:text-3xl"
          }`}
        >
          {feature.title}
        </h3>
        <p
          className={`leading-relaxed text-muted ${
            compact ? "text-sm" : "max-w-xl text-base md:text-lg"
          }`}
        >
          {feature.description}
        </p>
      </div>
    </>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card">
      <FeatureCardContent feature={feature} index={index} compact />
    </article>
  );
}

function DesktopFeaturePanel({
  feature,
  index,
  reducedMotion,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
  reducedMotion: boolean;
}) {
  const card = (
    <article className="group relative w-full overflow-hidden rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-md transition-all duration-500 hover:border-accent/25 hover:bg-card/90 xl:p-9">
      <FeatureCardContent feature={feature} index={index} />
    </article>
  );

  return (
    <div className="flex min-h-[42vh] items-center py-2 xl:min-h-[44vh]">
      {reducedMotion ? (
        card
      ) : (
        <motion.div
          className="w-full"
          initial={{ opacity: 0.3, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.65, once: false }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
        >
          {card}
        </motion.div>
      )}
    </div>
  );
}

function ScrollColumnFade() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-bg-secondary via-bg-secondary/70 to-transparent backdrop-blur-[6px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-bg-secondary via-bg-secondary/70 to-transparent backdrop-blur-[6px]" />
    </>
  );
}

export function WhyChooseUsSection() {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const enablePin = isDesktop && !reducedMotion;

  useEffect(() => {
    if (!enablePin) return;

    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const pin = ScrollTrigger.create({
      trigger: section,
      start: "top top+=120",
      endTrigger: right,
      end: "bottom bottom",
      pin: left,
      pinSpacing: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", refresh);
      pin.kill();
    };
  }, [enablePin]);

  const headline = (
    <>
      We don&apos;t just run campaigns — we build{" "}
      <span className="text-accent">growth engines</span> for modern businesses.
    </>
  );

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="section-padding relative bg-bg-secondary"
      aria-labelledby="why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.05),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mobile / tablet */}
        <div className="lg:hidden">
          <RevealOnScroll>
            <h2
              id="why-heading"
              className="mx-auto mb-16 max-w-4xl text-center font-heading text-3xl font-bold leading-tight text-text md:text-4xl"
            >
              {headline}
            </h2>
          </RevealOnScroll>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <RevealOnScroll key={feature.title} delay={index * 0.08}>
                <FeatureCard feature={feature} index={index} />
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Desktop: pinned headline + scrolling panels */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div
            ref={leftRef}
            className="flex flex-col justify-center lg:min-h-[40vh] lg:py-4"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Why Choose Us
            </p>
            <h2
              id="why-heading-desktop"
              className="max-w-xl font-heading text-4xl font-bold leading-[1.1] text-text xl:text-5xl xl:leading-[1.08]"
            >
              {headline}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              A partner focused on measurable growth, creative quality, and
              long-term results.
            </p>
          </div>

          <div className="relative">
            <ScrollColumnFade />
            <div ref={rightRef} className="flex flex-col gap-1">
              {FEATURES.map((feature, index) => (
                <DesktopFeaturePanel
                  key={feature.title}
                  feature={feature}
                  index={index}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
