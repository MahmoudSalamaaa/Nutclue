import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{
 const base="https://www.ilamabloom.com";
 return["","explore","kids","food-atlas","log","journal","visit","about","sitemap","privacy","terms","copyright"].map(path=>({url:`${base}/${path}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:path===""?1:["explore","food-atlas","kids"].includes(path)?0.8:0.6}));
}
