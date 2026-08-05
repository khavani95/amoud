import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The homepage used to live at /home; consolidate link equity on "/".
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
