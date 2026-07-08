import { CONTACT_INFO, FAQ_ITEMS, SERVICES } from "./constants";
import { siteUrl } from "./site-url";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const faqId = `${siteUrl}/#faq`;

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Upvox Creative",
        description:
          "Digital marketing agency in Kerala offering SEO, Google Ads, Meta Ads, branding, and website development.",
        publisher: { "@id": organizationId },
        inLanguage: "en-IN",
      },
      {
        "@type": "MarketingAgency",
        "@id": organizationId,
        name: "Upvox Creative",
        legalName: "Upvox Creative",
        description:
          "Digital marketing agency in Kerala offering SEO, Google Ads, Meta Ads, branding, website development, and performance marketing.",
        url: siteUrl,
        logo: `${siteUrl}/images/Upvox.png`,
        image: `${siteUrl}/og-image.png`,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "MG Road, Ravipuram",
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          postalCode: "682016",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 9.9674,
          longitude: 76.2856,
        },
        areaServed: [
          { "@type": "City", name: "Kochi" },
          { "@type": "City", name: "Thiruvananthapuram" },
          { "@type": "City", name: "Kozhikode" },
          { "@type": "City", name: "Thrissur" },
          { "@type": "State", name: "Kerala" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        sameAs: [
          "https://www.facebook.com/share/1BeC2Mr4Y1/",
          "https://www.instagram.com/upvoxcreative",
          "https://www.linkedin.com/company/upvox-creative/",
        ],
        knowsAbout: [
          "Search Engine Optimization",
          "Social Media Marketing",
          "Google Ads",
          "Meta Ads",
          "Performance Marketing",
          "Website Development",
          "Branding",
          "Lead Generation",
          "Content Marketing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Marketing Services",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              areaServed: { "@type": "State", name: "Kerala" },
              provider: { "@id": organizationId },
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

/** @deprecated Use getStructuredData instead */
export function getLocalBusinessSchema() {
  return getStructuredData();
}
