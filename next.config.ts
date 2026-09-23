import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained Node server in .next/standalone (the contact form needs a server).
  output: "standalone",
  trailingSlash: true,
  images: { unoptimized: true },

  // URLs from the previous (2018) version of the site.
  async redirects() {
    return [
      { source: "/aboutme", destination: "/about/", permanent: true },
      { source: "/photo", destination: "/", permanent: true },
      { source: "/video/1", destination: "/talks/devops-in-wonderland/", permanent: true },
      { source: "/video/2", destination: "/talks/maps-under-high-load/", permanent: true },
      { source: "/video/3", destination: "/talks/the-tale-of-the-web/", permanent: true },
    ];
  },
};

export default nextConfig;
