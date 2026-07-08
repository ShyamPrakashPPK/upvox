"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(index);
    }
  };

  return (
    <section
      id="faq"
      className="section-padding relative"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          id="faq-heading"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Upvox Creative."
          align="center"
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <RevealOnScroll key={item.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-accent/20">
                  <button
                    id={`faq-question-${index}`}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="font-heading text-lg font-medium text-text md:text-xl">
                      {item.question}
                    </h3>
                    <span className="shrink-0 text-accent">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted md:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
