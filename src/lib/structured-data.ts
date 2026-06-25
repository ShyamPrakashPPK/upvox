import { CONTACT_INFO } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "Upvox",
    description:
      "Best digital marketing agency in Kerala offering SEO, social media marketing, Google Ads, Meta Ads, branding, and website development.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://upvox.in",
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Infopark",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682042",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Kerala",
    },
    priceRange: "$$",
    sameAs: [],
    knowsAbout: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Website Development",
      "Branding",
      "Content Marketing",
      "Email Marketing",
    ],
  };
}
