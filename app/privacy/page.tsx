import Link from "next/link";

export const metadata={title:"Privacy — Ilama Bloom",description:"How Ilama Bloom handles account data and learning content."};

export default function PrivacyPage(){
 return <main className="privacyPage" dir="auto">
  <section className="privacyCard">
   <Link href="/" className="authBrand">ILAMA <span>BLOOM</span></Link>
   <small>الخصوصية · بكلام واضح</small>
   <h1>بياناتك تفضل ملكك.</h1>
   <p>التعلم والألعاب العامة في Ilama Bloom متاحة للجميع. الحساب مطلوب فقط عندما تختار حفظ ملاحظاتك أو أسئلتك أو سياق الزيارة.</p>
   <h2>إيه اللي بنخزنه؟</h2>
   <p>السجلات المحفوظة ترتبط بحسابك وتشمل التصنيف والملاحظة التي كتبتها والوقت الذي اخترته. لا نستخدم ملاحظاتك في ملف عام أو لوحة ترتيب.</p>
   <h2>إنت المتحكم</h2>
   <p>تقدر تراجع وتعدل وتمسح سجلاتك من اليوميات، وتصدر نسخة منها. حذف الحساب أو كل البيانات يتم عبر التواصل مع صاحب المشروع.</p>
   <h2>الحد الطبي</h2>
   <p>Ilama Bloom تعليمي وتنظيمي. لا يشخّص، ولا يفسر النتائج، ولا يحسب جرعات الإنسولين، ولا يستبدل خطة الرعاية الفردية.</p>
   <Link href="/" className="privacyBack">العودة إلى Ilama Bloom ←</Link>
  </section>
 </main>
}

