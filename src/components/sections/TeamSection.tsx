"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM_MEMBERS } from "@/lib/constants";

const marqueeMembers = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

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
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-secondary to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-secondary to-transparent sm:w-24" />

        <div className="team-marquee overflow-hidden">
          <div className="team-marquee-track gap-[50 px] sm:gap-6">
            {marqueeMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="relative h-[480px] w-[320px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card"
                aria-hidden={index >= TEAM_MEMBERS.length}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
