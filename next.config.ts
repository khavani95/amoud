import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true, // ⬅️ این خط بیلد رو ادامه میده حتی اگه ارور ESLint باشه
  },
};

export default nextConfig;
