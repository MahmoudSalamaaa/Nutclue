import {NextResponse} from "next/server";
import fs from "node:fs";
import path from "node:path";
export const dynamic="force-static";
export async function GET(){
 const dir=path.join(process.cwd(),"public","nourio-vendor","parts");
 const html=fs.readdirSync(dir).filter(n=>n.endsWith(".part")).sort().map(n=>fs.readFileSync(path.join(dir,n),"utf8")).join("\n");
 return new NextResponse(html,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=31536000, immutable"}});
}