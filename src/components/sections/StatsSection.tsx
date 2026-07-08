"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { STATS_SECTION } from "@/lib/constants";

export function StatsSection() {
  return (
    <section
      className="section-padding relative overflow-hidden bg-bg"
      aria-labelledby="stats-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          Results That Speak for Themselves
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {STATS_SECTION.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="font-heading text-5xl font-bold text-text md:text-6xl lg:text-7xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    duration={2.5}
                  />
                </p>
                <p className="mt-3 text-sm uppercase tracking-widest text-muted md:text-base">
                  {stat.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
