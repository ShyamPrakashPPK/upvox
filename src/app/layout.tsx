import type { Metadata, Viewport } from "next";
import { Google_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageLoader } from "@/components/providers/PageLoader";
import { siteMetadata } from "@/lib/metadata";
import { getStructuredData } from "@/lib/structured-data";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151515",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getStructuredData();

  return (
    <html lang="en" className={`${googleSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full overflow-x-hidden bg-bg font-sans text-text">
        <SmoothScrollProvider>
          <PageLoader />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
