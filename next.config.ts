import type { NextConfig } from "next";
const isPages=process.env.GITHUB_PAGES==="true";
const nextConfig:NextConfig={
  output:"export",
  trailingSlash:true,
  images:{unoptimized:true},
  ...(isPages?{basePath:"/Nutclue",assetPrefix:"/Nutclue/"}:{})
};
export default nextConfig;
