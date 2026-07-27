import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static hosting
  },
  // If your website will be hosted at a subpath (e.g. https://pustdsc.github.io/website/)
  // uncomment the line below and set it to your repository name:
  // basePath: "/website",
};

export default nextConfig;
