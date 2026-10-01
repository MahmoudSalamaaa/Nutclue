import {NextResponse} from "next/server";
import fs from "node:fs";
import path from "node:path";
export const dynamic="force-static";

const bridge=`<script>
(()=>{const send=(view)=>window.parent!==window?window.parent.postMessage({type:"ilama:navigate",view},"*"):location.assign("/#/"+view);
const map={"home":"home","explore":"learn","services":"learn","learn":"learn","learning guides":"learn","kids":"kids","kids & family":"kids","food atlas":"atlas","atlas":"atlas","journal":"journal","health tracking":"log","journal & progress":"journal","visit":"visit","visit preparation":"visit","about":"about","about us":"about","about dr. dina":"about","contact us":"visit","book a visit":"visit"};
document.addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;const key=(a.textContent||"").trim().toLowerCase().replace(/\\s+/g," ");if(map[key]){e.preventDefault();send(map[key])}},true)})();
</script>`;

export async function GET(){
 const dir=path.join(process.cwd(),"public","nourio-vendor","parts");
 let html=fs.readdirSync(dir).filter(n=>n.endsWith(".part")).sort().map(n=>fs.readFileSync(path.join(dir,n),"utf8")).join("\n");
 html=html.replace(/\n}\s*\.features-block-style3/, "\n<style>\n}\n.features-block-style3");
 html=html.replace("</head>","<style id=\"ilama-nourio-repair\">\n:root{--theme-color1:#315c4b;--theme-color2:#f4efe4;--theme-color3:#d8a85d;--text-color:#25352f}\n*{box-sizing:border-box}html,body{margin:0;padding:0;max-width:100%;overflow-x:hidden}body{font-family:Arial,Helvetica,sans-serif;color:var(--text-color);background:#fff}img{max-width:100%;height:auto}a{text-decoration:none;color:inherit}\n.e-con{display:flex;position:relative;min-width:0}.e-con>.e-con-inner{width:100%;max-width:1340px;margin-inline:auto;display:flex;position:relative}.e-con-full{width:100%}.e-con-boxed>.e-con-inner{max-width:1340px}.e-child{min-width:0}\n.elementor-element{position:relative}.elementor-widget-container{position:relative}.elementor-heading-title{margin:0}.elementor-button{display:inline-flex;align-items:center;justify-content:center}\nheader,.main-header{position:relative;z-index:50;background:#fff}.header-nav-wrapper,.menuzord{display:flex;align-items:center;width:100%}.menuzord-menu{display:flex;align-items:center;gap:28px;list-style:none;margin:0;padding:0}.menuzord-menu ul{list-style:none}.menuzord-brand img,.site-brand img{max-height:64px;width:auto}\n.tm-sc-section-title .title{font-size:clamp(38px,5vw,76px);line-height:1.04;letter-spacing:-.035em}.tm-sc-section-title .subtitle{text-transform:uppercase;letter-spacing:.12em;font-size:13px}\n@media(max-width:767px){.e-con>.e-con-inner{flex-direction:column}.menuzord-menu{gap:12px;flex-wrap:wrap}.tm-sc-section-title .title{font-size:clamp(34px,11vw,54px)}}\n</style>"+"</head>");
 html=html.replace(/<link[^>]+rel=["'](?:shortcut icon|apple-touch-icon)["'][^>]*>/gi,"");
 html=html.replace("</head>",'<link rel="icon" href="/icon.svg" type="image/svg+xml"></head>');
 html=html.replace("</body>",bridge+"</body>");
 return new NextResponse(html,{headers:{
  "content-type":"text/html; charset=utf-8",
  "cache-control":"public, max-age=3600, stale-while-revalidate=86400",
  "content-security-policy":"default-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-inline' data: blob:; connect-src 'self'; frame-src 'none'; object-src 'none'; form-action 'self'",
  "referrer-policy":"no-referrer",
  "x-content-type-options":"nosniff"
 }});
}