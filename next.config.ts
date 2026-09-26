import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/Nutclue" : "" },
  ...(isGitHubPages
    ? { basePath: "/Nutclue", assetPrefix: "/Nutclue/" }
    : {}),
};

export default nextConfig;
