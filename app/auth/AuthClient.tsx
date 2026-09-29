"use client";
import {FormEvent,useEffect,useState} from "react";
import {authClient} from "../../lib/auth/client";

const labels={signIn:{title:"تسجيل الدخول",description:"أدخل بريدك الإلكتروني للمتابعة إلى حسابك.",action:"دخول"},signUp:{title:"إنشاء حساب",description:"أنشئ حسابًا لحفظ يومياتك وبياناتك بأمان.",action:"إنشاء حساب"}};

export function AuthClient({path}:{path:string}){
 const {data:session}=authClient.useSession();
 const signUp=path.includes("sign-up");
 const [email,setEmail]=useState("");const [password,setPassword]=useState("");const [name,setName]=useState("");const [message,setMessage]=useState("");const [busy,setBusy]=useState(false);
 const next=typeof window!=="undefined"?new URLSearchParams(window.location.search).get("next"):null;
 useEffect(()=>{if(session)window.location.replace(next&&next.startsWith("/")?next:"/")},[session,next]);
 if(!path.includes("sign-in")&&!signUp)return <p className="authNotice">هذه الصفحة غير متاحة حاليًا. استخدم تسجيل الدخول أو إنشاء حساب.</p>;
 const submit=async(event:FormEvent)=>{event.preventDefault();setMessage("");setBusy(true);const result=signUp?await authClient.signUp.email({name:name.trim()||email.split("@")[0],email,password,callbackURL:next||"/"}):await authClient.signIn.email({email,password,callbackURL:next||"/"});if(result.error)setMessage(result.error.message||"تعذر تنفيذ الطلب. حاول مرة أخرى.");setBusy(false)};
 const social=async(provider:"google"|"facebook"|"twitter")=>{setMessage("");setBusy(true);const result=await authClient.signIn.social({provider,callbackURL:next||"/"});if(result.error){setMessage(result.error.message||"تعذر بدء تسجيل الدخول.");setBusy(false)}};
 const copy=signUp?labels.signUp:labels.signIn;
 return <div className="authForm" aria-busy={busy}><h1>{copy.title}</h1><p>{copy.description}</p><form onSubmit={submit}>{signUp&&<label>الاسم<input value={name} onChange={e=>setName(e.target.value)} placeholder="اسمك" autoComplete="name" /></label>}<label>البريد الإلكتروني<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@example.com" autoComplete="email" /></label><label>كلمة المرور<input type="password" required minLength={8} value={password} onChange={e=>setPassword(e.target.value)} placeholder="8 أحرف على الأقل" autoComplete={signUp?"new-password":"current-password"}/></label><button type="submit" disabled={busy}>{busy?"جارٍ التنفيذ…":copy.action}</button></form><div className="authSocial"><span>أو تابع باستخدام</span><div><button type="button" onClick={()=>social("google")} disabled={busy}>Google</button><button type="button" onClick={()=>social("facebook")} disabled={busy}>Facebook</button><button type="button" onClick={()=>social("twitter")} disabled={busy}>X</button></div></div>{message&&<p className="authMessage" role="alert">{message}</p>}<a className="authSwitch" href={signUp?"/auth/sign-in":"/auth/sign-up"}>{signUp?"لديك حساب بالفعل؟ سجّل الدخول":"ليس لديك حساب؟ أنشئ حسابًا"}</a></div>;
}
