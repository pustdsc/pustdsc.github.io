import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static hosting
  },
  // Allows hot-reloading (HMR) to connect successfully when testing live on your mobile device
  allowedDevOrigins: ["192.168.0.101", "192.168.0.101:3000", "localhost:3000"],
};

export default nextConfig;
