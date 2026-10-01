"use client";
type View="home"|"learn"|"kids"|"lens"|"atlas"|"log"|"journal"|"visit"|"about"|"privacy"|"sitemap";
type Entry={id?:string;type:string;value:string;at:string};
const routes:{k:string;n:string;a:string;v:View;d:string;da:string}[]=[
 {k:"01",n:"Food Atlas",a:"أطلس الأكل",v:"atlas",d:"Foods as ingredients, culture, portions and patterns.",da:"الأكل كمكونات وثقافة وحصص وأنماط."},
 {k:"02",n:"Body Library",a:"مكتبة الجسم",v:"lens",d:"Understand the systems behind everyday health.",da:"افهم ما يحدث داخل جسمك بصورة أبسط."},
 {k:"03",n:"Learn",a:"تعلّم",v:"learn",d:"Short, useful guides without diet noise.",da:"أدلة قصيرة ومفيدة بعيدًا عن ضوضاء الدايت."},
 {k:"04",n:"Journal",a:"اليوميات",v:"journal",d:"Notice patterns in your own life.",da:"لاحظ الأنماط في حياتك أنت."}
];
export default function HomeNova({go,entries,ar}:{go:(v:View)=>void;entries:Entry[];ar:boolean}){
 const last=entries[0];
 return <main className="novaHome">
  <section className="novaHero">
   <div className="novaKicker"><span>ILAMA BLOOM</span><i>FOOD · BODY · CONTEXT</i></div>
   <div className="novaHeadline"><h1>{ar?<>افهم <em>الأكل.</em><br/>اقرأ <em>جسمك.</em><br/>عِش السياق.</>:<>Know <em>food.</em><br/>Read <em>your body.</em><br/>Live the context.</>}</h1></div>
   <div className="novaHeroImage"><img src="/nourio-static/wp-content/uploads/2025/06/home-video-1-1.jpg" alt="Pomegranate, figs, grains and seasonal food"/><span className="novaIndex">FIELD NOTE / 001</span></div>
   <div className="novaHeroAside"><p>{ar?"مساحة لفهم التغذية بعيدًا عن القواعد الصارمة. استكشف الطعام، جسمك، والعادات التي تناسب حياتك.":"A place to understand nutrition without turning life into rules. Explore food, your body, and the habits that fit your real context."}</p><button onClick={()=>go("atlas")}>{ar?"ابدأ من الطعام":"Start with food"} ↗</button></div>
   <div className="novaMarquee" aria-hidden="true"><span>FOOD IS INFORMATION</span><span>BODY IS CONTEXT</span><span>CURIOSITY OVER RULES</span></div>
  </section>
  <section className="novaRoutes">
   <header><small>{ar?"اختر نقطة البداية":"CHOOSE YOUR ENTRY POINT"}</small><h2>{ar?"مش لازم تبدأ من البداية.":"There is no single place to begin."}</h2></header>
   <div>{routes.map(r=><button key={r.k} onClick={()=>go(r.v)}><small>{r.k}</small><strong>{ar?r.a:r.n}</strong><p>{ar?r.da:r.d}</p><i>↗</i></button>)}</div>
  </section>
  <section className="novaFeature">
   <div className="novaFeaturePhoto"><img src="/nourio-static/wp-content/uploads/2025/06/service1.jpg" alt="Egyptian food table"/></div>
   <div className="novaFeatureCopy"><small>THE EGYPTIAN TABLE / 01</small><h2>{ar?"الأكل الذي تعرفه يستحق أن يُفهم.":"The food you know deserves to be understood."}</h2><p>{ar?"عيش بلدي، فول، ملوخية، رز، فطير، تمر — نبدأ من أكل حقيقي ومن الحياة اليومية، ثم نفهم الصورة الأكبر.":"Baladi bread, ful, molokhia, rice, feteer, dates — start with real food and everyday life, then follow the threads into the bigger picture."}</p><button onClick={()=>go("atlas")}>{ar?"ادخل أطلس الأكل":"Enter the Food Atlas"} →</button></div>
   <aside><b>LOCAL FOOD</b><span>+</span><b>NUTRITION</b><span>+</span><b>CULTURE</b><span>+</span><b>CONTEXT</b></aside>
  </section>
  <section className="novaManifesto">
   <p>{ar?"لسنا هنا لنخبرك ماذا تأكل.":"We are not here to tell you what to eat."}</p>
   <h2>{ar?"نحن هنا لنجعل المعلومات أوضح، والأسئلة أفضل، والاختيارات أكثر وعيًا.":"We make the information clearer, the questions better, and everyday choices more informed."}</h2>
  </section>
  <section className="novaDina">
   <div className="novaDinaTitle"><small>THE HUMAN LENS</small><h2>{ar?"العلم مهم. والحياة الحقيقية كذلك.":"Science matters. So does real life."}</h2></div>
   <div className="novaDinaPortrait"><img src="/dina-hassan-about.webp?v=2" alt="Dr. Dina Hassan"/></div>
   <div className="novaDinaCopy"><h3>Dr. Dina Hassan</h3><p>Pediatrician & Clinical Nutritionist · MRCPCH</p><blockquote>{ar?"«المعلومة المفيدة لازم تكون قابلة للاستخدام.»":"“Useful knowledge should feel usable.”"}</blockquote><button onClick={()=>go("about")}>{ar?"عن د. دينا":"Meet Dr. Dina"} →</button></div>
  </section>
  <section className="novaPersonal">
   <div><small>YOUR SIDE OF THE STORY</small><h2>{ar?"المعرفة تصبح أقوى عندما ترتبط بحياتك.":"Knowledge gets better when it meets your life."}</h2></div>
   <div className="novaPersonalActions"><button onClick={()=>go("journal")}><b>{ar?"اليوميات":"Journal"}</b><span>{last?(ar?"لديك سجل حديث":"You have a recent entry"):(ar?"ابدأ بالملاحظة":"Start noticing")}</span><i>↗</i></button><button onClick={()=>go("kids")}><b>{ar?"عالم الأطفال":"Kids world"}</b><span>{ar?"تعلم ولعب وفضول":"Learn, play, stay curious"}</span><i>↗</i></button><button onClick={()=>go("visit")}><b>{ar?"استعد للزيارة":"Prepare a visit"}</b><span>{ar?"رتب أسئلتك":"Bring better questions"}</span><i>↗</i></button></div>
  </section>
 </main>
}