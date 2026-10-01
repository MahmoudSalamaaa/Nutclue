import {NextResponse} from "next/server";
import fs from "node:fs";
import path from "node:path";
export const dynamic="force-static";

const bridge=`<script>
(()=>{const send=(view)=>window.parent!==window?window.parent.postMessage({type:"ilama:navigate",view},"*"):location.assign("/#/"+view);
const map={"home":"home","explore":"learn","services":"learn","kids":"kids","food atlas":"atlas","atlas":"atlas","journal":"journal","visit":"visit","about":"about","about us":"about","contact us":"visit","book a visit":"visit"};
document.addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;const key=(a.textContent||"").trim().toLowerCase().replace(/\\s+/g," ");if(map[key]){e.preventDefault();send(map[key])}},true)})();
</script>`;

export async function GET(){
 const dir=path.join(process.cwd(),"public","nourio-vendor","parts");
 let html=fs.readdirSync(dir).filter(n=>n.endsWith(".part")).sort().map(n=>fs.readFileSync(path.join(dir,n),"utf8")).join("\n");
 html=html.replace("</body>",bridge+"</body>");
 return new NextResponse(html,{headers:{
  "content-type":"text/html; charset=utf-8",
  "cache-control":"public, max-age=3600, stale-while-revalidate=86400",
  "content-security-policy":"default-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-inline' data: blob:; connect-src 'self'; frame-src 'none'; object-src 'none'; form-action 'self'",
  "referrer-policy":"no-referrer",
  "x-content-type-options":"nosniff"
 }});
}