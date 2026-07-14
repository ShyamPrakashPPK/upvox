import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "upvoxcreative.com" }],
        destination: "https://www.upvoxcreative.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
