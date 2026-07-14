import type { Metadata } from "next";
import { GSC_VERIFICATION, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./seo";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Upvox Creative",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "digital marketing agency Kerala",
    "digital marketing company Kochi",
    "SEO agency Kerala",
    "Google Ads agency Kerala",
    "Meta Ads management Kerala",
    "branding agency Kerala",
    "website development Kerala",
    "performance marketing Kerala",
  ],
  authors: [{ name: "Upvox Creative" }],
  creator: "Upvox Creative",
  publisher: "Upvox Creative",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Upvox Creative",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Upvox Creative — Digital Marketing Agency in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  ...(GSC_VERIFICATION
    ? { verification: { google: GSC_VERIFICATION } }
    : {}),
};
