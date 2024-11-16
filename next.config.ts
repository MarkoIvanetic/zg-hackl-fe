import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname), // Adds support for '@/...' aliases
    };
    return config;
  },
};

export default nextConfig;
