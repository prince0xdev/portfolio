import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.svgrepo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
} satisfies NextConfig;

const withMDX = createMDX({});

export default withMDX(nextConfig);
