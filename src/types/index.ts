import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
