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
      // واحد فروش is retired for now; keep the old URL from 404ing.
      { source: "/sale", destination: "/contact", permanent: false },
      // Article slugs corrected against the approved résumé.
      {
        source: "/blog/jam-khalij-fars-mellat",
        destination: "/blog/jam-khalij-fars",
        permanent: true,
      },
      // هتل آراز نوشهر is not in the current résumé; send readers to the index.
      {
        source: "/blog/hotel-araz-noshahr",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
