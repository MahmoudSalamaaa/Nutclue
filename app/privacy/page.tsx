"use client";
import Link from "next/link";
import {useEffect,useState} from "react";

const copy={
 en:{kicker:"PRIVACY · IN PLAIN LANGUAGE",title:"Your data stays yours.",intro:"Ilama Bloom's public learning and games are open to everyone. An account is only needed when you choose to save notes, questions or visit context.",store:"What do we store?",storeP:"Saved entries are linked to your account and include the category, the note you wrote and the time you chose. We do not turn your notes into a public profile or leaderboard.",control:"You're in control",controlP:"You can review, edit, delete and export saved journal entries. For account or complete-data deletion, contact the project owner.",boundary:"The medical boundary",boundaryP:"Ilama Bloom is for education and organization. It does not diagnose, interpret results, calculate insulin doses or replace an individual care plan.",back:"BACK TO ILAMA BLOOM ←",lang:"عربي"},
 ar:{kicker:"الخصوصية · بكلام واضح",title:"بياناتك تفضل ملكك.",intro:"التعلم والألعاب العامة في Ilama Bloom متاحة للجميع. الحساب مطلوب فقط عندما تختار حفظ ملاحظاتك أو أسئلتك أو سياق الزيارة.",store:"إيه اللي بنخزنه؟",storeP:"السجلات المحفوظة ترتبط بحسابك وتشمل التصنيف والملاحظة التي كتبتها والوقت الذي اخترته. لا نستخدم ملاحظاتك في ملف عام أو لوحة ترتيب.",control:"إنت المتحكم",controlP:"تقدر تراجع وتعدل وتمسح سجلاتك من اليوميات، وتصدر نسخة منها. حذف الحساب أو كل البيانات يتم عبر التواصل مع صاحب المشروع.",boundary:"الحد الطبي",boundaryP:"Ilama Bloom تعليمي وتنظيمي. لا يشخّص، ولا يفسر النتائج، ولا يحسب جرعات الإنسولين، ولا يستبدل خطة الرعاية الفردية.",back:"العودة إلى Ilama Bloom ←",lang:"EN"}
};
export default function PrivacyPage(){
 const[lang,setLang]=useState<"ar"|"en">("en");useEffect(()=>{const s=localStorage.getItem("ilama-lang");if(s==="ar"||s==="en")setLang(s)},[]);
 const t=copy[lang];const toggle=()=>{const n=lang==="en"?"ar":"en";setLang(n);localStorage.setItem("ilama-lang",n)};
 return <main className="privacyPage" dir={lang==="ar"?"rtl":"ltr"} lang={lang}><section className="privacyCard"><div className="privacyTop"><Link href="/" className="authBrand">ILAMA <span>BLOOM</span></Link><button type="button" className="authLang" onClick={toggle}>{t.lang}</button></div><small>{t.kicker}</small><h1>{t.title}</h1><p>{t.intro}</p><h2>{t.store}</h2><p>{t.storeP}</p><h2>{t.control}</h2><p>{t.controlP}</p><h2>{t.boundary}</h2><p>{t.boundaryP}</p><Link href="/" className="privacyBack">{t.back}</Link></section></main>
}
