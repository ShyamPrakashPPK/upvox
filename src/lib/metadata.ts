import type { Metadata } from "next";
import { siteUrl } from "./site-url";

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Upvox Creative | Best Digital Marketing Agency in Kerala",
    template: "%s | Upvox Creative",
  },
  description:
    "Seeking the best digital marketing agency in Kerala? Upvox Creative delivers premium branding, SEO, web design & strategy for lasting impact.",
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
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Upvox Creative",
    title: "Upvox Creative | Best Digital Marketing Agency in Kerala",
    description:
      "Seeking the best digital marketing agency in Kerala? Upvox Creative delivers premium branding, SEO, web design & strategy for lasting impact.",
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
    title: "Upvox Creative | Best Digital Marketing Agency in Kerala",
    description:
      "Seeking the best digital marketing agency in Kerala? Upvox Creative delivers premium branding, SEO, web design & strategy for lasting impact.",
    images: ["/og-image.png"],
  },
  ...(gscVerification
    ? { verification: { google: gscVerification } }
    : {}),
};
