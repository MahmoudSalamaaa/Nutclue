import {NextResponse} from "next/server";
import fs from "node:fs";
import path from "node:path";
export const dynamic="force-static";

const bridge=`<script>
(()=>{try{const saved=localStorage.getItem("ilama-bloom-lang");document.documentElement.lang=saved==="ar"?"ar":"en";document.documentElement.dir=saved==="ar"?"rtl":"ltr"}catch{}const send=(view)=>window.parent!==window?window.parent.postMessage({type:"ilama:navigate",view},"*"):location.assign("/#/"+view);
const map={"home":"home","explore":"learn","services":"learn","learn":"learn","learning guides":"learn","kids":"kids","kids & family":"kids","food atlas":"atlas","atlas":"atlas","journal":"journal","health tracking":"log","journal & progress":"journal","visit":"visit","visit preparation":"visit","about":"about","about us":"about","about dr. dina":"about","contact us":"visit","book a visit":"visit"};
document.addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;const key=(a.textContent||"").trim().toLowerCase().replace(/\\s+/g," ");if(map[key]){e.preventDefault();send(map[key])}},true)})();
</script>`;

export async function GET(){
 const source=path.join(process.cwd(),"public","nourio-static","home-video1","index.html");
 if(!fs.existsSync(source)) return new NextResponse("ILAMA BLOOM template source missing",{status:500});
 let html=fs.readFileSync(source,"utf8");
 html=html.replace(/<link[^>]+rel=["'](?:shortcut icon|apple-touch-icon)["'][^>]*>/gi,"");
 html=html.replace(/<title>[\s\S]*?<\/title>/i,"<title>ILAMA BLOOM — Food · Body · Context</title>");
 html=html.replace(/alt=["']Nourio(?: Logo)?["']/gi,'alt="ILAMA BLOOM"');
 html=html.replace(/<img[^>]+class=["'][^"']*logo-(?:default|mobile-version)[^"']*["'][^>]*>/gi,'<img class="ilama-brand-logo" src="/ilama-bloom-logo.svg" alt="ILAMA BLOOM">');
 html=html.replace(/>\s*Nourio\s*</gi,">ILAMA BLOOM<");
 html=html.replace(/<span class="ilama-wordmark">ILAMA BLOOM<small>FOOD · BODY · CONTEXT<\/small><\/span>/gi,'<img class="ilama-brand-logo" src="/ilama-bloom-logo.svg" alt="ILAMA BLOOM">');
 html=html.replaceAll(`<img class="ilama-brand-logo" src="/ilama-bloom-logo.svg" alt="ILAMA BLOOM">\n\t\t\t\t\t<img class="ilama-brand-logo" src="/ilama-bloom-logo.svg" alt="ILAMA BLOOM">`,`<img class="ilama-brand-logo" src="/ilama-bloom-logo.svg" alt="ILAMA BLOOM">`);
 html=html.replace(/<div class="elementor-element elementor-element-b434a34[\s\S]*?<\/div>\s*<\/div>/i,"");
 html=html.replace(/<div class="elementor-element elementor-element-4166244[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i,"");
 html=html.replace(/Personalized\s*Nutrition Plans/gi,"Nourish Knowledge. Bloom Health.");
 html=html.replace(/We begin with a comprehensive health assessment to understand/g,(m,offset)=>{const before=html.slice(Math.max(0,offset-500),offset);if(before.includes("Health Assessment"))return "Start with a clear picture of your health, routines, goals, and context.";if(before.includes("Habit Building"))return "Turn useful nutrition knowledge into small habits that fit everyday life.";if(before.includes("Food Analysis"))return "Explore foods, portions, labels, and patterns with practical context.";if(before.includes("Visit Preparation"))return "Collect your questions and notes so your next visit is more focused.";return m});
 const replacements:Record<string,string>={
 "Based on 204 Reviews":"FOOD · BODY · CONTEXT",
 "Nutrition Care You Can Trust":"Knowledge that blooms with you.",
 "Build a healthier future with personalized nutrition and expert diet guidance evidence-based approach helps you improve":"Explore food, understand your body, build healthier habits, and grow — at every age.",
 "Healthy eating solutions tailored to your unique lifestyle":"Explore food, understand your body, and build healthier habits",
 "Healthy Habits":"Food Atlas","Digestive Wellness":"Kids & Family","Holistic Wellness":"Learning Guides","Health Monitoring":"Health Tracking",
 "Experience Expert Roofing Service –":"Practical tools for everyday health","View All Services":"Explore All Tools",
 "Expert nutrition solutions that fit tour health":"Nourish Knowledge. Bloom Health.","Wellness Journey":"Journal & Progress","Health Coaching":"Visit Preparation",
 "More About Us":"Meet Dr. Dina","Evidence based nutrition solutions for long term health":"Pediatric and clinical nutrition guidance with clearer, calmer health education.",
 "Years of work experience":"Pediatric & nutrition care","Wellness Coaching":"Clinical Nutrition","Nutrition Education":"Pediatric Care",
 "Meet the team behind your device repairs":"Meet Dr. Dina Hassan",
 "Backed by 10+ years of experience, 500+ devices repaired daily, and 99% customer satisfaction, our team delivers reliable and professional repairs.":"Pediatrician · Clinical Nutritionist · MRCPCH · Diploma in Clinical Nutrition NNI",
 "Daniel carter":"Food Atlas","Emily carter":"Health Tracking","Michael turner":"Kids & Family","Emma wilson":"Learning Guides",
 "Experience Expert Gadget Repairing –":"Food · Body · Context","View All Member":"About Dr. Dina",
 "Support for Nutritionist Services Work +00-1100-2222":"Prepare for your visit",
 "About Comapany":"ILAMA BLOOM","Company":"Explore","Our mission":"About","Our Blogs":"Learning Guides","Help Center":"Kids & Family",
 "1901 Thornridge Cir. Shiloh Hawaii 81063":"Food · Body · Context","+880 1998-900100 [email protected]":"Book a visit with Dr. Dina Hassan",
 "© Copyright 2026 by Company.com":"© 2026 ILAMA BLOOM"
 };
 for(const [from,to] of Object.entries(replacements)) html=html.split(from).join(to);
 html=html.replace(/<meta[^>]+name=["']generator["'][^>]*>/gi,"").replace(/<link[^>]+rel=["']alternate["'][^>]*>/gi,"");
 html=html.replace("</head>",`<link rel="icon" href="/icon.svg" type="image/svg+xml"><style>
:root{--theme-color1:#173d31!important;--theme-color2:#a94f62!important;--theme-color3:#a88b55!important;--theme-color4:#efe5d7!important}
#preloader,.three-layer-loaderbg{display:none!important}
html,body{opacity:1!important;visibility:visible!important;background:#f5efe5!important;color:#173d31!important}
body,.page-wrapper,.main-content,.elementor,.elementor-section,.elementor-element{--theme-color1:#173d31!important;--theme-color2:#a94f62!important;--theme-color3:#a88b55!important}
h1,h2,h3,h4,h5,h6,.title,.section-title,.tm-sc-section-title,.menuzord-menu>li>a{color:#173d31!important}
.text-theme-colored1,.text-theme-colored2,.text-theme-colored3,a:hover{color:#a94f62!important}
.bg-theme-colored1,.btn-theme-colored1,.theme-btn,.btn-style-one,.btn-style-two{background-color:#173d31!important;border-color:#173d31!important;color:#fbf7ef!important}
.bg-theme-colored2,.btn-theme-colored2{background-color:#a94f62!important;border-color:#a94f62!important;color:#fbf7ef!important}
header,.header-nav,.menuzord,.main-header,.sticky-header{background:#f5efe5!important}
footer,.main-footer{background:#173d31!important;color:#fbf7ef!important}
.ilama-brand-logo{display:block!important;width:190px!important;max-width:100%!important;height:70px!important;object-fit:contain!important;object-position:left center!important}
.logo img:not(.ilama-brand-logo),.logo-box img:not(.ilama-brand-logo),.logo-box-one img:not(.ilama-brand-logo),.header-logo img:not(.ilama-brand-logo){display:none!important}
.elementor-element-0a4e24e{background:#efe5d7!important}
.elementor-element-dfb9286{min-height:680px!important;background:#efe5d7!important;position:relative!important;overflow:hidden!important}
.elementor-element-dfb9286:before{content:"";position:absolute!important;inset:0!important;background:radial-gradient(circle at 82% 20%,rgba(169,79,98,.14),transparent 30%),radial-gradient(circle at 18% 80%,rgba(168,139,85,.14),transparent 28%)!important;pointer-events:none!important}
.elementor-element-dfb9286>.e-con-inner{min-height:680px!important;align-items:center!important;position:relative!important;z-index:1!important}
.elementor-background-video-container{display:none!important}
.elementor-element-4c5de3d,.elementor-element-422949e,.elementor-element-2068fd9{display:none!important}
.elementor-element-71244a5 .elementor-spacer-inner{height:18px!important}
.elementor-element-4302e32{visibility:visible!important;opacity:1!important}
.elementor-element-4302e32 .tm-text-editor{color:#66746c!important}
.elementor-element-98fe2ca .title{color:#173d31!important}
.elementor-element-2f78597{margin-top:28px!important}
.elementor-element-d24a72c{display:none!important}
.elementor-element-d4dc29f .tm-text-editor{color:#a94f62!important;font-weight:700!important;letter-spacing:.08em!important;text-transform:uppercase!important}
.elementor-invisible{visibility:visible!important}
header#header .ilama-brand-logo{width:210px!important;height:74px!important}
#header .elementor-widget-tm-ele-site-logo:not(:first-of-type){display:none!important}
#header .elementor-385>.elementor-element-1a16a16:nth-of-type(n+2){display:none!important}
.elementor-element-746bc05{padding:72px 20px!important;background:#fbf7ef!important}
.elementor-element-ffecbb9>.e-con-inner{max-width:1200px!important;margin:auto!important}
.elementor-element-2ae41b9{margin-bottom:36px!important}
#working-block-holder-489363 .isotope-layout-inner{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:24px!important;height:auto!important}
#working-block-holder-489363 .isotope-item{position:relative!important;left:auto!important;top:auto!important;transform:none!important;width:auto!important;margin:0!important}
.working-block-style3 .inner-block{height:100%!important;min-height:290px!important;padding:34px 24px!important;border:1px solid rgba(23,61,49,.14)!important;border-radius:24px!important;background:#f5efe5!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important}
.working-block-style3 .icon-block{margin-bottom:22px!important}
.working-block-style3 .icon{color:#a94f62!important;font-size:54px!important}
.working-block-style3 .working-shape{display:none!important}
.working-block-style3 .working-title{margin:0 0 12px!important;color:#173d31!important}
.working-block-style3 .working-details{color:#66746c!important;line-height:1.65!important}
.elementor-element-d2299e9 .title-wrapper{text-align:center!important}
.elementor-element-d2299e9 .subtitle{color:#a94f62!important}
@media(max-width:1024px){#working-block-holder-489363 .isotope-layout-inner{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
@media(max-width:640px){#working-block-holder-489363 .isotope-layout-inner{grid-template-columns:1fr!important}.elementor-element-746bc05{padding:48px 16px!important}}
@media(max-width:767px){.ilama-brand-logo{width:145px!important;height:54px!important}.elementor-element-dfb9286,.elementor-element-dfb9286>.e-con-inner{min-height:560px!important}}
\n.tm-sc-service.tm-service-swiper .swiper-wrapper{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:24px!important;transform:none!important;width:100%!important;height:auto!important}.tm-sc-service.tm-service-swiper .swiper-slide{width:auto!important;max-width:100%!important;margin:0!important;transform:none!important}.tm-sc-service.tm-service-swiper .service-block,.tm-sc-service.tm-service-swiper .inner-box{width:100%!important;max-width:100%!important}.tm-sc-service.tm-service-swiper img{max-width:100%!important;height:auto!important}html,body,#wrapper{max-width:100%!important;overflow-x:hidden!important}@media(max-width:1024px){.tm-sc-service.tm-service-swiper .swiper-wrapper{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:767px){.tm-sc-service.tm-service-swiper .swiper-wrapper{grid-template-columns:1fr!important;gap:20px!important}.tm-sc-section-title .title{font-size:clamp(32px,10vw,48px)!important;line-height:1.08!important}}\n</style></head>`);
 html=html.replace("</body>",bridge+"</body>");
 return new NextResponse(html,{headers:{
  "content-type":"text/html; charset=utf-8",
  "cache-control":"public, max-age=3600, stale-while-revalidate=86400",
  "content-security-policy":"default-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-inline' data: blob:; connect-src 'self'; frame-src 'none'; object-src 'none'; form-action 'self'",
  "referrer-policy":"no-referrer","x-content-type-options":"nosniff"
 }});
}
