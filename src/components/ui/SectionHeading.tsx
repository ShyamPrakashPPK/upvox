"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = "left",
  className = "",
  id,
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const alignClass = isCentered ? "text-center mx-auto" : "";
  const textAlignClass = isCentered ? "mx-auto text-center" : "";

  return (
    <motion.div
      className={`mb-12 md:mb-16 lg:mb-20 ${alignClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        id={id}
        className="font-heading text-4xl font-bold tracking-tight text-text md:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg ${textAlignClass}`}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className={`mt-4 max-w-4xl text-base leading-relaxed text-muted md:text-lg ${textAlignClass}`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-accent/60 ${isCentered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
