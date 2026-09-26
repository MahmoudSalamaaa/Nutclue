import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGitHubPages
    ? { basePath: "/Nutclue", assetPrefix: "/Nutclue/" }
    : {}),
};

export default nextConfig;
