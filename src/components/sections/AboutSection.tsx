"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ABOUT_PILLARS, ABOUT_STATS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-bg-secondary"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center"> 
          <div className="max-w-4xl text-center p-5">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-center text-lg text-muted">
            Founded in 2025, we partner with Kerala businesses to turn digital
            channels into measurable growth — from brand strategy and creative
            campaigns to high-converting websites and performance marketing.
          </p>
          </div>
        </div>
      

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {ABOUT_PILLARS.map((pillar, index) => (
            <RevealOnScroll key={pillar.number} delay={index * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card">
                <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                <span className="absolute right-6 top-6 font-heading text-4xl font-bold text-accent/15 transition-colors duration-500 group-hover:text-accent/30">
                  {pillar.number}
                </span>

                <h3 className="mb-3 pr-12 text-sm font-semibold uppercase tracking-wider text-accent">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-16 sm:grid-cols-3 lg:gap-8">
          {ABOUT_STATS.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <div className="rounded-xl border border-border bg-card/40 px-6 py-8 text-center">
                <p className="font-heading text-4xl font-bold text-text md:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="mt-3 text-sm uppercase tracking-widest text-muted">
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
