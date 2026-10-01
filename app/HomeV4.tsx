"use client";
type View="home"|"learn"|"kids"|"lens"|"atlas"|"log"|"journal"|"visit"|"about"|"privacy"|"sitemap";
type Entry={id?:string;type:string;value:string;at:string};
export default function HomeV4({go,entries,ar}:{go:(v:View)=>void;entries:Entry[];ar:boolean}){
 const last=entries[0];
 return <div className="ib4-home">
  <section className="ib4-hero">
   <div className="ib4-heroCopy">
    <small>{ar?"أكل · جسم · سياق":"FOOD · BODY · CONTEXT"}</small>
    <h1>{ar?<>المعرفة<br/>تنمو <em>معك.</em></>:<>Knowledge<br/>that <em>blooms</em><br/>with you.</>}</h1>
    <p>{ar?"Ilama Bloom يحوّل التغذية من معلومات متفرقة إلى خريطة واضحة تربط الأكل بجسمك وحياتك اليومية.":"Ilama Bloom turns scattered nutrition information into a living map connecting food, your body and everyday life."}</p>
    <div className="ib4-heroActions"><button onClick={()=>go("learn")}>{ar?"ابدئي من هنا":"Start exploring"} <b>→</b></button><button className="ib4-textBtn" onClick={()=>go("atlas")}>{ar?"افتحي أطلس الأكل":"Open food atlas"}</button></div>
   </div>
   <div className="ib4-collage" aria-label={ar?"خريطة Ilama Bloom":"Ilama Bloom knowledge map"}>
    <button className="ib4-shape ib4-fruit" onClick={()=>go("atlas")}><span>FOOD</span></button>
    <button className="ib4-shape ib4-leaf" onClick={()=>go("lens")}><span>BODY</span></button>
    <div className="ib4-shape ib4-flower"><span>CONTEXT</span></div>
    <button className="ib4-shape ib4-portrait" onClick={()=>go("about")}><img src="/dina-hassan-about.webp?v=2" alt="Dr. Dina Hassan"/></button>
    <div className="ib4-hand ib4-handOne">{ar?"الأكل حكاية":"Food is a story"}</div>
    <div className="ib4-hand ib4-handTwo">{ar?"وأنت في قلبها":"You are at the center"}</div>
    <div className="ib4-orbit"></div>
   </div>
  </section>
  <section className="ib4-paths" aria-label={ar?"طرق الاستكشاف":"Ways to explore"}>
   <button onClick={()=>go("learn")}><i className="ib4-blob b1">01</i><span>{ar?<>استكشفي<br/>التغذية</>:<>Explore<br/>Nutrition</>}</span><b>→</b></button>
   <button onClick={()=>go("atlas")}><i className="ib4-blob b2">02</i><span>{ar?<>أطلس<br/>الأكل</>:<>Food<br/>Atlas</>}</span><b>→</b></button>
   <button onClick={()=>go("lens")}><i className="ib4-blob b3">03</i><span>{ar?<>افهمي<br/>الأرقام</>:<>Read<br/>Labels</>}</span><b>→</b></button>
   <button onClick={()=>go("journal")}><i className="ib4-blob b4">04</i><span>{ar?<>يومك<br/>وعاداتك</>:<>Your<br/>Journal</>}</span><b>→</b></button>
   <button onClick={()=>go("kids")}><i className="ib4-blob b5">05</i><span>{ar?<>عالم<br/>الأطفال</>:<>For<br/>Kids</>}</span><b>→</b></button>
  </section>
  <section className="ib4-dina">
   <div className="ib4-dinaPhoto"><img src="/dina-hassan-about.webp?v=2" alt="Dr. Dina Hassan"/></div>
   <div className="ib4-dinaCopy"><small>{ar?"الصوت الطبي وراء ILAMA BLOOM":"THE CLINICAL VOICE BEHIND ILAMA BLOOM"}</small><h2>{ar?<>طريقة أكثر <em>إنسانية</em><br/>لفهم التغذية.</>:<>A more <em>human</em><br/>way to understand nutrition.</>}</h2><p>{ar?"مع د. دينا حسن، المعرفة الصحية هنا مش قائمة ممنوعات؛ هي طريقة أوضح لفهم الاختيارات والأسئلة والتفاصيل اللي تخص حياتك فعلًا.":"With Dr. Dina Hassan, health education is not a list of rules. It is a clearer way to understand choices, questions and the details that actually shape daily life."}</p><button onClick={()=>go("about")}>{ar?"اعرفي د. دينا":"Meet Dr. Dina"} →</button></div>
   <blockquote><b>“</b>{ar?"المعلومة المفيدة هي اللي تقدري تستخدميها.":"Useful knowledge should feel usable."}<span>— DR. DINA HASSAN</span></blockquote>
  </section>
  <section className="ib4-journal">
   <header><small>{ar?"مساحتك اليومية":"YOUR EVERYDAY SPACE"}</small><h2>{ar?<>مش لازم<br/><em>تفتكري كل حاجة.</em></>:<>You don't have to<br/><em>remember everything.</em></>}</h2><p>{last?(ar?`آخر حاجة: ${last.type} · ${last.value}`:`Last logged: ${last.type} · ${last.value}`):(ar?"سجلي الوجبات والمياه والنوم والأسئلة والتفاصيل الصغيرة في مكان واحد.":"Keep meals, water, sleep, questions and small useful details in one place.")}</p><button onClick={()=>go("journal")}>{ar?"افتحي يومياتك":"Open your journal"} →</button></header>
   <div className="ib4-journalCards">
    <button onClick={()=>go("atlas")}><i>01</i><small>FOOD</small><strong>{ar?<>أكل مألوف.<br/>سياق أوضح.</>:<>Familiar food.<br/>Clearer context.</>}</strong><span>→</span></button>
    <button onClick={()=>go("visit")}><i>02</i><small>VISIT</small><strong>{ar?<>أسئلة أفضل.<br/>زيارة أهدى.</>:<>Better questions.<br/>Calmer visits.</>}</strong><span>→</span></button>
    <button onClick={()=>go("log")}><i>03</i><small>TODAY</small><strong>{ar?<>سجلي اللي<br/>يستحق يتفتكر.</>:<>Save what<br/>matters.</>}</strong><span>→</span></button>
   </div>
  </section>
 </div>
}