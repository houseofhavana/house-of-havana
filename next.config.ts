import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services/scissor-haircut-saskatoon", destination: "/services/mens-haircut-saskatoon/scissor-haircut-saskatoon", permanent: true },
      { source: "/services/curly-haircut-saskatoon", destination: "/services/mens-haircut-saskatoon/curly-haircut-saskatoon", permanent: true },
    ];
  },
  reactStrictMode: false,
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
