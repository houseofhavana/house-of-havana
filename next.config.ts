import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://houseofhavanadb_db_user:PObZPwu9WEXGPDLN@blogs.lnnog7m.mongodb.net/?appName=Blogs",
    NEXTAUTH_URL: "https:houseofhavana.ca",
    CLOUDINARY_CLOUD_NAME: "dta3fug49",
    CLOUDINARY_API_KEY: "142762777554437",
    CLOUDINARY_API_SECRET: "Ba1D7blz824VHvVuznxX5auto5k",
    CLOUDINARY_URL:
      "cloudinary://142762777554437:Ba1D7blz824VHvVuznxX5auto5k@dta3fug49",
  },
};

export default nextConfig;
