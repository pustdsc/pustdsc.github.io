import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static hosting
  },
  // Allows hot-reloading (HMR) to connect successfully when testing live on your mobile device
  allowedDevOrigins: [
    "192.168.0.103",
    "192.168.0.103:3000",
    "192.168.0.101",
    "192.168.0.101:3000",
    "192.168.0.100",
    "192.168.0.102",
    "192.168.0.104",
    "192.168.0.105",
    "localhost:3000"
  ],
};

export default nextConfig;
