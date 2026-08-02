import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static hosting
  },
  // Allows hot-reloading (HMR) to connect successfully when testing live on your mobile device
  allowedDevOrigins: [
    "192.168.0.5",
    "192.168.0.5:3001",
    "192.168.0.5:3000",
    "192.168.0.103",
    "192.168.0.103:3000",
    "192.168.0.103:3001",
    "192.168.0.101",
    "192.168.0.101:3000",
    "192.168.0.101:3001",
    "192.168.0.100",
    "192.168.0.100:3001",
    "192.168.0.102",
    "192.168.0.104",
    "192.168.0.105",
    "localhost:3000",
    "localhost:3001",
    "127.0.0.1:3000",
    "127.0.0.1:3001"
  ],
};

export default nextConfig;
