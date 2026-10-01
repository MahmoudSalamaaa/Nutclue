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
 html=html.replace("</head>",'<style id="ilama-nourio-repair">:root{--theme-color1:#315c4b;--theme-color2:#f4efe4;--theme-color3:#d8a85d;--text-color:#25352f}*{box-sizing:border-box}html,body{margin:0;padding:0;max-width:100%;overflow-x:hidden}img{max-width:100%;height:auto}</style></head>');
 html=html.replace(/<link[^>]+rel=["'](?:shortcut icon|apple-touch-icon)["'][^>]*>/gi,"");
 html=html.replace("</head>","<style id=\"ilama-nourio-runtime-fixes\">\n#preloader,.three-layer-loaderbg{display:none!important}\nbody{opacity:1!important;visibility:visible!important}\n.e-con{--display:flex;display:var(--display);flex-direction:var(--flex-direction,row);flex-wrap:var(--flex-wrap,nowrap);justify-content:var(--justify-content,normal);align-items:var(--align-items,normal);gap:var(--row-gap,0) var(--column-gap,0);padding:var(--padding-top,0) var(--padding-right,0) var(--padding-bottom,0) var(--padding-left,0)}\n.e-con.e-con-boxed>.e-con-inner{display:flex;flex-direction:var(--flex-direction,row);flex-wrap:var(--flex-wrap,nowrap);justify-content:var(--justify-content,normal);align-items:var(--align-items,normal);gap:var(--row-gap,0) var(--column-gap,0);max-width:var(--content-width,1340px);width:100%}\n.elementor-widget{position:relative}.elementor-widget-container{height:100%}.elementor img{border:none;border-radius:0;box-shadow:none;height:auto;max-width:100%}\n.elementor-button{background-color:var(--theme-color1);color:#fff;border-radius:0;padding:14px 28px;line-height:1}\n.elementor-icon{display:inline-block;line-height:1}.elementor-icon i,.elementor-icon svg{width:1em;height:1em;position:relative;display:block}\n.elementor-spacer-inner{height:var(--spacer-size,20px)}\n@media(max-width:1024px){.e-con{--flex-wrap:wrap}.elementor-hidden-tablet{display:none!important}}\n@media(max-width:767px){.elementor-hidden-mobile{display:none!important}.e-con,.e-con.e-con-boxed>.e-con-inner{--flex-direction:column}}\n</style>"+'<link rel="icon" href="/icon.svg" type="image/svg+xml"></head>');
 html=html.replace(/<title>[\s\S]*?<\/title>/i,"<title>ILAMA BLOOM — Food · Body · Context</title>");
 html=html.replace(/alt=["']Nourio(?: Logo)?["']/gi,'alt="ILAMA BLOOM"');
 html=html.replace(/<img[^>]+class=["'][^"']*logo-(?:default|mobile-version)[^"']*["'][^>]*>/gi,'<span class="ilama-wordmark">ILAMA BLOOM<small>FOOD · BODY · CONTEXT</small></span>');
 html=html.replace(/>\s*Nourio\s*</gi,">ILAMA BLOOM<");
 html=html.replace(/<meta[^>]+name=["']generator["'][^>]*>/gi,"");
 html=html.replace(/<link[^>]+rel=["']alternate["'][^>]*>/gi,"");
 html=html.replace("</head>",'<style>.ilama-wordmark{display:inline-flex;flex-direction:column;justify-content:center;line-height:1;color:inherit;font-family:Georgia,serif;font-size:30px;letter-spacing:.08em;white-space:nowrap}.ilama-wordmark small{font-family:Arial,sans-serif;font-size:8px;letter-spacing:.28em;margin-top:7px;text-align:center;font-weight:600}@media(max-width:767px){.ilama-wordmark{font-size:22px}.ilama-wordmark small{font-size:6px}}</style></head>');
 html=html.replace("</body>",bridge+"</body>");
 html=html.replace(/<div class="three-layer-loaderbg" id="preloader">[\s\S]*?<\/div>\s*<!-- Header -->/i,"<!-- Header -->");
 html=html.replace(/<style>\s*<style>/gi,"<style>");
 const opens=(html.match(/<style(?:\s|>)/gi)||[]).length, closes=(html.match(/<\/style>/gi)||[]).length;
 if(opens>closes) html=html.replace("</head>","</style></head>");
 return new NextResponse(html,{headers:{
  "content-type":"text/html; charset=utf-8",
  "cache-control":"public, max-age=3600, stale-while-revalidate=86400",
  "content-security-policy":"default-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-inline' data: blob:; connect-src 'self'; frame-src 'none'; object-src 'none'; form-action 'self'",
  "referrer-policy":"no-referrer",
  "x-content-type-options":"nosniff"
 }});
}