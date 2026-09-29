"use client";
import {NeonAuthUIProvider} from "@neondatabase/auth-ui";
import "@neondatabase/auth-ui/css";
import Link from "next/link";
import {useRouter} from "next/navigation";
import type {ReactNode} from "react";
import {authClient} from "../lib/auth/client";
const arabicAuth={
 SIGN_IN:"تسجيل الدخول",SIGN_IN_ACTION:"دخول",SIGN_IN_DESCRIPTION:"أدخل بريدك الإلكتروني للمتابعة إلى حسابك.",
 SIGN_UP:"إنشاء حساب",SIGN_UP_ACTION:"إنشاء حساب",SIGN_UP_DESCRIPTION:"أنشئ حسابًا لحفظ يومياتك وبياناتك بأمان.",
 DONT_HAVE_AN_ACCOUNT:"ليس لديك حساب؟",ALREADY_HAVE_AN_ACCOUNT:"لديك حساب بالفعل؟",EMAIL:"البريد الإلكتروني",EMAIL_PLACEHOLDER:"name@example.com",
 PASSWORD:"كلمة المرور",PASSWORD_PLACEHOLDER:"كلمة المرور",PASSWORD_REQUIRED:"كلمة المرور مطلوبة",EMAIL_REQUIRED:"البريد الإلكتروني مطلوب",
 FORGOT_PASSWORD_LINK:"نسيت كلمة المرور؟",FORGOT_PASSWORD:"استعادة كلمة المرور",FORGOT_PASSWORD_ACTION:"إرسال رابط الاستعادة",
 EMAIL_OTP:"رمز البريد الإلكتروني",EMAIL_OTP_SEND_ACTION:"إرسال الرمز",EMAIL_OTP_VERIFY_ACTION:"تأكيد الرمز",EMAIL_OTP_DESCRIPTION:"أدخل بريدك الإلكتروني لتصلك رسالة برمز الدخول.",
 MAGIC_LINK:"رابط الدخول",MAGIC_LINK_ACTION:"إرسال رابط الدخول",MAGIC_LINK_DESCRIPTION:"أدخل بريدك الإلكتروني لتصلك رسالة الدخول.",
 SIGN_IN_WITH:"الدخول باستخدام",OR_CONTINUE_WITH:"أو تابع باستخدام",CANCEL:"إلغاء",CONTINUE:"متابعة",DONE:"تم",NAME:"الاسم",NAME_PLACEHOLDER:"اسمك",REQUEST_FAILED:"تعذر تنفيذ الطلب. حاول مرة أخرى."
};
export function Providers({children}:{children:ReactNode}){const router=useRouter();return <NeonAuthUIProvider authClient={authClient} navigate={router.push} replace={router.replace} onSessionChange={()=>router.refresh()} emailOTP localization={arabicAuth} redirectTo="/" Link={Link} organization={{}}>{children}</NeonAuthUIProvider>}

