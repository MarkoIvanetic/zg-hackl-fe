import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during the build
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname), // Adds support for '@/...' aliases
    };
    return config;
  },
};

export default nextConfig;
