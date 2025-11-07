import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ucarecdn.com",
      },
    ],
  },
};

export default nextConfig;
