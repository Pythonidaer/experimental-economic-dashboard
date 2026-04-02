import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/articles", destination: "/topics", permanent: true },
      { source: "/articles/:slug", destination: "/topics/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
