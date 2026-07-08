import {
  Clapperboard,
  Globe,
  Mail,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Share2,
  Target,
  Users,
} from "lucide-react";
import type {
  AboutPillar,
  ContactInfo,
  FAQItem,
  Feature,
  NavLink,
  Service,
  SocialLink,
  StatItem,
  TeamMember,
} from "@/types";

export const AGENCY_NAME = "Upvox";
export const AGENCY_LOGO = "/images/Upvox.png";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "Team", href: "#team", sectionId: "team" },
  { label: "FAQ", href: "#faq", sectionId: "faq" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];


export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Branding",
    description:
      "Create a memorable brand identity through logo design, visual systems, brand positioning, and strategic communication.",
    icon: Palette,
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Modern, responsive, and conversion-focused websites built to deliver exceptional user experiences across all devices.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description:
      "Strategic campaigns that increase brand awareness, expand audience reach, and drive meaningful customer engagement.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Google Ads",
    description:
      "High-performing Google Ads campaigns designed to generate qualified leads and maximize ROI.",
    icon: Target,
  },
  {
    number: "05",
    title: "SEO Optimization",
    description:
      "Improve visibility, rankings, and organic traffic with technical SEO, keyword research, and content optimization.",
    icon: Search,
  },
  {
    number: "06",
    title: "Social Media Management",
    description:
      "Content planning, publishing, audience engagement, and performance monitoring to grow your online community.",
    icon: Megaphone,
  },
  {
    number: "07",
    title: "Lead Generation",
    description:
      "Targeted strategies focused on attracting potential customers and converting them into valuable business opportunities.",
    icon: Users,
  },
  {
    number: "08",
    title: "Theatre Advertising",
    description:
      "Reach audiences in a highly engaging environment through impactful cinema advertising campaigns.",
    icon: Clapperboard,
  },
];


export const ABOUT_STATS: StatItem[] = [
  { value: 20, suffix: "+", label: "Clients Served" },
  { value: 80, suffix: "+", label: "Campaigns Managed" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

export const HERO_STATS: StatItem[] = ABOUT_STATS;

export const STATS_SECTION: StatItem[] = [
  { value: 20, suffix: "+", label: "Clients" },
  { value: 10, suffix: "M+", label: "Impressions" },
  { value: 80, suffix: "+", label: "Campaigns" },
  { value: 95, suffix: "%", label: "Retention" },
];

export const FEATURES: Feature[] = [
  {
    title: "Data-Driven Strategy",
    description:
      "Every decision backed by analytics, insights, and measurable KPIs.",
  },
  {
    title: "Creative Excellence",
    description:
      "Award-worthy creative that captures attention and drives action.",
  },
  {
    title: "ROI-Focused Campaigns",
    description:
      "We optimize for revenue, not vanity metrics. Your growth is our metric.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Real-time dashboards and monthly reports you can actually understand.",
  },
  {
    title: "Dedicated Team",
    description:
      "A committed team of strategists, designers, and marketers at your service.",
  },
  {
    title: "Industry Experience",
    description:
      "Proven expertise across retail, hospitality, healthcare, and tech sectors.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Arjun Nair",
    role: "Founder & CEO",
    bio: "Digital strategist with 10+ years driving growth for Kerala brands.",
    initials: "AN",
    image: "/images/team/1.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Meera Thomas",
    role: "Head of Creative",
    bio: "Brand designer passionate about crafting memorable visual identities.",
    initials: "MT",
    image: "/images/team/2.png",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Rahul Menon",
    role: "Performance Lead",
    bio: "Paid media expert specializing in Google and Meta ad optimization.",
    initials: "RM",
    image: "/images/team/3.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Ananya Krishnan",
    role: "SEO Strategist",
    bio: "Technical SEO specialist helping businesses dominate local search.",
    initials: "AK",
    image: "/images/team/4.png",
    social: { linkedin: "#", instagram: "#" },
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Why choose your agency?",
    answer:
      "Upvox combines data-driven strategy with creative excellence. We focus on measurable ROI, transparent reporting, and dedicated support tailored for Kerala businesses looking to scale online.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. We offer comprehensive SEO including technical audits, keyword research, on-page optimization, local SEO for Kerala markets, and ongoing link building strategies.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term investment. Most clients see meaningful improvements in 3–6 months, with significant growth typically within 6–12 months depending on competition and industry.",
  },
  {
    question: "Do you manage Google Ads?",
    answer:
      "Absolutely. We create, manage, and optimize Google Ads campaigns including Search, Display, and Shopping ads with continuous A/B testing and budget optimization.",
  },
  {
    question: "Do you create websites?",
    answer:
      "Yes. We design and develop premium, fast, mobile-responsive websites optimized for conversions and search engines using modern technologies.",
  },
  {
    question: "Can you help local businesses grow?",
    answer:
      "Local growth is our specialty. We help Kerala businesses dominate local search, run geo-targeted ads, and build community engagement through social media.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "upvoxcreative@gmail.com",
  phone: "8921 569922",
  address: "MG Road, Ravipuram, Kochi, Kerala",
  mapsUrl: "https://maps.app.goo.gl/CHDmgviQbXkXUPVS7",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1BeC2Mr4Y1/?mibextid=wwXIfr&ref=1",
    platform: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/upvoxcreative?igsh=MWxjM3JrZ2N1ZzZuNg==",
    platform: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/upvox-creative/",
    platform: "linkedin",
  },
];

export const FOOTER_SERVICES = SERVICES.map((s) => s.title);

export const ABOUT_CONTENT = {
  mission:
    "To empower Kerala businesses with world-class digital marketing that delivers measurable growth and lasting brand value.",
  vision:
    "To be Kerala's most trusted digital growth partner, setting the standard for creativity, transparency, and results.",
  approach:
    "We combine analytics with creativity — every campaign is built on data, refined through testing, and optimized for maximum ROI.",
  expertise:
    "Deep understanding of Kerala's market dynamics, consumer behavior, and local search landscape gives our clients a competitive edge.",
};

export const ABOUT_PILLARS: AboutPillar[] = [
  { number: "01", title: "Mission", body: ABOUT_CONTENT.mission },
  { number: "02", title: "Vision", body: ABOUT_CONTENT.vision },
  {
    number: "03",
    title: "Growth-Focused Approach",
    body: ABOUT_CONTENT.approach,
  },
  {
    number: "04",
    title: "Kerala-Based Expertise",
    body: ABOUT_CONTENT.expertise,
  },
];
