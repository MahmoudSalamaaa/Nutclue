import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [{ source: "/api/auth/:path*/", destination: "/api/auth/:path*" }];
  },
  env: { NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/ilama-bloom" : "" },
  ...(isGitHubPages
    ? { output: "export", basePath: "/ilama-bloom", assetPrefix: "/Nutclue/" }
    : {}),
};

export default nextConfig;
