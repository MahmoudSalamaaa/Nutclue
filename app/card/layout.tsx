import type {Metadata} from "next";
export const metadata:Metadata={
 title:"Dr. Dina Hassan — Ilama Bloom",
 description:"Digital contact card for Dr. Dina Hassan, Pediatrician & Clinical Nutritionist and founder of Ilama Bloom.",
 alternates:{canonical:"https://www.ilamabloom.com/card"},
 openGraph:{title:"Dr. Dina Hassan — Ilama Bloom",description:"Pediatrician & Clinical Nutritionist · Founder, Ilama Bloom",url:"https://www.ilamabloom.com/card",siteName:"Ilama Bloom",type:"profile"},
 twitter:{card:"summary",title:"Dr. Dina Hassan — Ilama Bloom",description:"Pediatrician & Clinical Nutritionist · Founder, Ilama Bloom"}
};
export default function CardLayout({children}:{children:React.ReactNode}){return children}
