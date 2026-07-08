import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://upvox.in";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Upvox | Best Digital Marketing Agency in Kerala",
    template: "%s | Upvox",
  },
  description:
    "Upvox is the best digital marketing agency in Kerala. We help businesses grow through SEO, social media marketing, Google Ads, Meta Ads, branding, and website development. Your trusted digital marketing company in Kerala.",
  keywords: [
    "Best Digital Marketing Agency in Kerala",
    "Digital Marketing Company Kerala",
    "SEO Agency Kerala",
    "Social Media Marketing Kerala",
    "Google Ads Agency Kerala",
    "Website Development Kerala",
    "digital marketing Kochi",
    "performance marketing Kerala",
    "branding agency Kerala",
  ],
  authors: [{ name: "Upvox" }],
  creator: "Upvox",
  publisher: "Upvox",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Upvox",
    title: "Upvox | Best Digital Marketing Agency in Kerala",
    description:
      "Helping Kerala businesses generate more leads, customers, and revenue through SEO, social media, performance marketing, branding, and web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Upvox - Best Digital Marketing Agency in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upvox | Best Digital Marketing Agency in Kerala",
    description:
      "Helping Kerala businesses generate more leads, customers, and revenue through SEO, social media, performance marketing, branding, and web development.",
    images: ["/og-image.png"],
  },
};
