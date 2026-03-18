import type { NextConfig } from "next";

const basePath = "/misc/circles/Techcircle";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
};

export default nextConfig;
