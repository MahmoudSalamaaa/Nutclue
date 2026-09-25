import type { NextConfig } from "next";
const isPages=process.env.GITHUB_PAGES==="true";
const nextConfig:NextConfig=isPages?{
  output:"export",
  trailingSlash:true,
  images:{unoptimized:true},
  basePath:"/Nutclue",
  assetPrefix:"/Nutclue/"
}:{};
export default nextConfig;
