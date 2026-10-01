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
 const source=path.join(process.cwd(),"public","nourio-static","home-video1","index.html");
 if(!fs.existsSync(source)) return new NextResponse("ILAMA BLOOM template source missing",{status:500});
 let html=fs.readFileSync(source,"utf8");
 html=html.replace(/<link[^>]+rel=["'](?:shortcut icon|apple-touch-icon)["'][^>]*>/gi,"");
 html=html.replace(/<title>[\s\S]*?<\/title>/i,"<title>ILAMA BLOOM — Food · Body · Context</title>");
 html=html.replace(/alt=["']Nourio(?: Logo)?["']/gi,'alt="ILAMA BLOOM"');
 html=html.replace(/<img[^>]+class=["'][^"']*logo-(?:default|mobile-version)[^"']*["'][^>]*>/gi,'<img class="ilama-brand-logo" src="/ilama-bloom-logo.svg" alt="ILAMA BLOOM">');
 html=html.replace(/>\s*Nourio\s*</gi,">ILAMA BLOOM<");
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
 html=html.replace("</head>",'<link rel="icon" href="/icon.svg" type="image/svg+xml"><style>#preloader,.three-layer-loaderbg{display:none!important}html,body{opacity:1!important;visibility:visible!important}.ilama-brand-logo{display:block;width:190px;max-width:100%;height:70px;object-fit:contain;object-position:left center}@media(max-width:767px){.ilama-brand-logo{width:145px;height:54px}}</style></head>');
 html=html.replace("</body>",bridge+"</body>");
 return new NextResponse(html,{headers:{
  "content-type":"text/html; charset=utf-8",
  "cache-control":"public, max-age=3600, stale-while-revalidate=86400",
  "content-security-policy":"default-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-inline' data: blob:; connect-src 'self'; frame-src 'none'; object-src 'none'; form-action 'self'",
  "referrer-policy":"no-referrer","x-content-type-options":"nosniff"
 }});
}
