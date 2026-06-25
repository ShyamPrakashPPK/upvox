"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          title="What We Do"
          subtitle="At Upvox Creative, we help businesses build a strong digital presence through creative branding, professional web solutions, and result-driven marketing strategies that support long-term business growth."
          description="We combine creativity, technology, and performance-driven marketing strategies to help businesses strengthen their digital presence, connect with the right audience, generate quality leads, and achieve sustainable business growth."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <RevealOnScroll key={service.number} delay={index * 0.08}>
              <motion.article
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-sm transition-all duration-500"
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Animated Top Border */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Floating Blur */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/20">
                      <service.icon
                        size={26}
                        className="text-accent"
                      />
                    </div>

                    <span className="font-heading text-4xl font-bold text-accent/20 transition-all duration-500 group-hover:text-accent/40">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 font-heading text-2xl font-semibold text-text">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-muted">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    <span className="text-sm font-medium">
                      Learn More
                    </span>

                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
