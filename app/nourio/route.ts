import {NextResponse} from "next/server";

const SOURCE="https://dev266.kodesolution.com/nourio/home-video1/";
const replacements:[RegExp,string][]=[
 [/Nourio/g,"ILAMA BLOOM"],
 [/Nutrition Care You Can Trust/g,"Knowledge that blooms with you."],
 [/Healthy eating solutions tailored\s*to your unique lifestyle/g,"Explore food, understand your body, build healthier habits, and grow — at every age."],
 [/Expert nutrition solutions that fit tour health/g,"Food · Body · Context"],
 [/Evidence based nutrition solutions for long term health/g,"Clear nutrition knowledge for real everyday life"],
 [/Nutrition success stories\s*that inspire healthy/g,"Understand food in context"],
 [/Our simple process for achieving better health/g,"A clearer way to explore nutrition"],
 [/Meet the team behind your device repairs/g,"Meet Dr. Dina Hassan"],
 [/Answers to your charging questions/g,"Questions worth exploring"],
 [/The perfect nutrition plan for your health goals/g,"Food knowledge for every stage of life"],
 [/Our clients share their journey\s*toward better/g,"Health stories, understood in context"],
 [/The latest insights on nutrition health/g,"Explore the latest from Ilama Bloom"]
];

export async function GET(){
 const upstream=await fetch(SOURCE,{next:{revalidate:3600}});
 if(!upstream.ok)return new NextResponse("Template unavailable",{status:502});
 let html=await upstream.text();
 for(const [pattern,value] of replacements)html=html.replace(pattern,value);
 html=html.replace("<head>","<head><base href=\""+SOURCE+"\">");
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="230" height="55" viewBox="0 0 230 55"><text x="2" y="37" font-family="Arial,sans-serif" font-size="27" font-weight="700" letter-spacing="2" fill="#1f3327">ILAMA BLOOM</text></svg>';
 const logo="data:image/svg+xml;base64,"+Buffer.from(svg).toString("base64");
 html=html.replace(/https?:\/\/dev266\.kodesolution\.com\/nourio\/wp-content\/uploads\/2026\/07\/logo-wide(?:-white)?\.png/g,logo);
 html=html.replace(/\.\.\/wp-content\/uploads\/2026\/07\/logo-wide(?:-white)?\.png/g,logo);
 const routes:{[k:string]:string}={About:"about",Services:"learn",Projects:"atlas",Blog:"learn",Contact:"visit",Shop:"atlas"};
 for(const [label,view] of Object.entries(routes)){
   const re=new RegExp('href="[^"]*"([^>]*)>\\s*'+label+'\\s*<',"gi");
   html=html.replace(re,'href="https://www.ilamabloom.com/#/'+view+'" target="_top"$1>'+label+'<');
 }
 html=html.replace(/<\/head>/,'<style>.tm-color-switcher,#style-switcher,.header-nav-element .mini-cart-icon{display:none!important}</style></head>');
 return new NextResponse(html,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=0, s-maxage=3600"}});
}