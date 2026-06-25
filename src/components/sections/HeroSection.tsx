"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function HeroSection() {
  const headingWords = "Best Digital Marketing Agency in Kerala".split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center px-6 text-center lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent"
          >
            Premium Digital Growth Agency
          </motion.p>

          <h1
            id="hero-heading"
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={staggerItem}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg"
          >
            Helping businesses generate more leads, more customers, and more
            revenue through SEO, Social Media Marketing, Performance Marketing,
            Branding, and Website Development.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <MagneticButton
              href="#contact"
              variant="primary"
              className="cursor-pointer"
            >
              Book Free Consultation
            </MagneticButton>

            <MagneticButton
              href="#services"
              variant="outline"
              className="cursor-pointer"
            >
              Explore Services
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-scroll-indicator" />
      </motion.a>
    </section>
  );
}