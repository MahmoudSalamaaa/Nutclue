import {authViewPaths} from "@neondatabase/auth-ui/server";
import {AuthClient} from "../AuthClient";
export const dynamicParams=false;
export function generateStaticParams(){return Object.values(authViewPaths).map(path=>({path}))}
export default async function AuthPage({params}:{params:Promise<{path:string}>}){const {path}=await params;return <main className="authPage" dir="rtl" lang="ar"><section className="authCard"><a href="/" className="authBrand">NUT<span>CLUE</span></a><p className="authIntro">مساحتك الخاصة في NutClue</p><AuthClient path={path}/><a href="/" className="authBack">العودة إلى الموقع العام</a></section></main>}

