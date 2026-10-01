"use client";
type View="home"|"learn"|"kids"|"lens"|"atlas"|"log"|"journal"|"visit"|"about"|"privacy"|"sitemap";
type Entry={id?:string;type:string;value:string;at:string};
const foods=[
 ["01","Baladi Bread","🥖","≈ 15g carbs","per piece (60g)"],
 ["02","Ful Medames","🫘","≈ 20g carbs","per cup"],
 ["03","Mango","🥭","≈ 25g carbs","per medium"],
 ["04","Molokhia","🌿","≈ 4g carbs","per cup"],
 ["05","Dates","🌴","≈ 18g carbs","per 3 dates"],
 ["06","Rice","🍚","≈ 45g carbs","per cup cooked"],
 ["07","Feteer","🫓","varies","by recipe"]
];
export default function HomeEditorial({go,entries,ar}:{go:(v:View)=>void;entries:Entry[];ar:boolean}){
 const last=entries[0];
 return <div className="edHome">
  <section className="edHero">
   <div className="edHeroText"><small>ILAMA BLOOM · FOOD · BODY · CONTEXT</small><h1>{ar?<>المعرفة<br/><em>تنمو</em> معك.</>:<>Knowledge<br/>that <em>blooms</em><br/>with you.</>}</h1><p>{ar?"استكشفي الأكل، افهمي جسمك، وابني عادات صحية تنمو معك في كل عمر.":"Explore food, understand your body, build healthier habits, and grow — at every age."}</p><button onClick={()=>go("learn")}>{ar?"ابدئي رحلتك":"Begin Your Journey"} <span>→</span></button><div className="edArabic">المعرفة تنمو معك</div></div>
   <div className="edHeroArt">
    <div className="edPaper edPaperCity"><img src="https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Cairo context"/><span>context</span><b>{ar?"العائلة · النوم · البيئة · التوتر":"culture · family · lifestyle · environment · sleep · stress"}</b></div>
    <div className="edPomegranate"><img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQ1LWNoaW0tamotMDA3YS5wbmc.png" alt="Pomegranate botanical illustration"/><b>FOOD</b></div>
    <div className="edBotanical edBotanicalA">❧</div><div className="edBotanical edBotanicalB">❧</div>
    <div className="edPortrait"><img src="/dina-hassan-about.webp?v=2" alt="Dr. Dina Hassan"/></div>
    <div className="edFig"><img src="https://cdn.imgbin.com/4/10/20/watercolor-fig-realistic-figs-with-leaves-illustration-cRPit02M.jpg" alt="Fig botanical illustration"/></div><div className="edGrain"><img src="https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Grains"/></div>
    <div className="edAnatomy"><span>BODY</span><b>♡</b><small>digestion<br/>immunity<br/>hormones<br/>energy<br/>mood</small></div>
    <div className="edNote n1">Food is<br/>a story.<i>↘</i></div><div className="edNote n2">Your body<br/>is a world.<i>↘</i></div><div className="edNote n3">Context changes<br/>everything.<i>↙</i></div><div className="edNote n4">And you are at the<br/>center of it all.</div>
   </div>
  </section>
  <section className="edPath">
   <header><h2>{ar?"مسار المعرفة":"The Knowledge Path"}</h2><p>{ar?"موضوعات مختلفة. صورة أكبر.":"Different topics. A bigger picture."}</p></header>
   <div className="edPathLine">{[
    ["01","✿",ar?"استكشفي التغذية":"Explore Nutrition","learn"],
    ["02","❧",ar?"أطلس الأكل":"Food Atlas","atlas"],
    ["03","♡",ar?"جسمك":"Your Body","lens"],
    ["04","☘",ar?"عادات يومية":"Everyday Habits","journal"],
    ["05","◉",ar?"للأطفال":"For Kids","kids"]
   ].map(([n,icon,label,v])=><button key={n} onClick={()=>go(v as View)}><i>{icon}</i><span><small>{n}</small><b>{label}</b></span></button>)}</div>
  </section>
  <section className="edAtlasPreview">
   <header><h2>{ar?"مذاق من أطلس الأكل":"A Taste of the Food Atlas"}</h2><p>{ar?"كل أكلة لها حكاية. هنا بعض الصفحات من دليلنا.":"Every food has a story. Here are a few from our table."}</p><button onClick={()=>go("atlas")}>{ar?"استكشفي أطلس الأكل":"Explore the Food Atlas"} →</button></header>
   <div className="edFoodStrip">{foods.map(([n,name,emoji,carbs,portion])=><article key={n}><small>No. {n}</small><h3>{name}</h3><div className="edFoodVisual"><img src={emoji} alt={name}/></div><p><b>{carbs}</b><br/>{portion}</p></article>)}</div>
  </section>
  <section className="edDina">
   <div className="edDinaCollage"><div className="edDinaPhoto"><img src="/dina-hassan-about.webp?v=2" alt="Dr. Dina Hassan"/></div><div className="edQuote">“Useful knowledge<br/>should feel usable.”</div><div className="edDinaLabel"><b>Dr. Dina<br/>Hassan</b><span>Pediatrician &<br/>Clinical Nutritionist</span></div></div>
   <div className="edDinaStory"><h2>{ar?<>طريقة أكثر <em>إنسانية</em><br/>لفهم التغذية.</>:<>A more <em>human</em><br/>approach to<br/>nutrition.</>}</h2><p>{ar?"التغذية في الحياة الحقيقية تشمل الأسرة والثقافة والمشاعر والاختيارات اليومية — مش أرقام فقط.":"Nutrition education should fit real life — where families, culture, emotions and daily choices all matter."}</p><button onClick={()=>go("about")}>{ar?"اعرفي د. دينا":"Meet Dr. Dina"} →</button></div>
  </section>
  <section className="edBottom">
   <div className="edJournal"><div><h2>{ar?"صحتك لها حكاية.":"Your health has a story."}<em>{ar?" احتفظي بالأجزاء المفيدة.":" Keep the useful parts."}</em></h2><p>{last?(ar?`آخر حاجة سجلتيها: ${last.type} · ${last.value}`:`Last logged: ${last.type} · ${last.value}`):(ar?"سجلي، راجعي، ولاحظي ما يجعلك أفضل.":"Record, reflect, and notice what makes you feel good — at any age.")}</p><button onClick={()=>go("journal")}>{ar?"افتحي يومياتك":"Open Your Journal"} →</button></div><div className="edNotebook"><span>Today…</span><b>Drank water ✓<br/>Good breakfast ✓<br/>Felt more energetic<br/>Walked outside ✓</b></div></div>
   <div className="edKids"><div><h2>{ar?"غد أكثر إشراقًا للصغار الفضوليين.":"A brighter tomorrow for curious little eaters."}</h2><p>{ar?"مرح. أكل حقيقي. عادات صحية.":"Fun. Real food. Healthy habits. A strong start for life."}</p><button onClick={()=>go("kids")}>{ar?"عالم الأطفال":"Explore Kids World"} →</button></div><div className="edKidArt">🍊<span>🍅</span><i>🌿</i></div></div>
  </section>
 </div>
}