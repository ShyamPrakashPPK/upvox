"use client";

import { ExternalLink, Link, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TEAM_MEMBERS } from "@/lib/constants";

const socialIcons = {
  linkedin: ExternalLink,
  twitter: Link,
  instagram: Globe,
};

export function TeamSection() {
  return (
    <section
      id="team"
      className="section-padding relative bg-bg-secondary"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="team-heading"
          title="Our Team"
          subtitle="Meet the strategists, creatives, and marketers driving results for our clients."
          align="center"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            <RevealOnScroll key={member.name} delay={index * 0.1}>
              <motion.article
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-accent/30"
                whileHover={{ y: -4 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-accent/20 via-card to-bg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-5xl font-bold text-accent/40 transition-transform duration-500 group-hover:scale-110">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-text">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex gap-3">
                    {Object.entries(member.social).map(([platform, href]) => {
                      const Icon =
                        socialIcons[platform as keyof typeof socialIcons];
                      if (!Icon || !href) return null;
                      return (
                        <a
                          key={platform}
                          href={href}
                          className="text-muted transition-colors hover:text-accent"
                          aria-label={`${member.name} on ${platform}`}
                        >
                          <Icon size={16} />
                        </a>
                      );
                    })}
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
