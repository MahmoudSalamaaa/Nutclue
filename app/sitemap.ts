import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{
 const base="https://ilamabloom.vercel.app";
 return["","card","privacy"].map(path=>({url:`${base}/${path}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:path==="card"?0.8:path?0.5:1}));
}
