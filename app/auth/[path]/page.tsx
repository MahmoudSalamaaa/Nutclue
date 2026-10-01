import {authViewPaths} from "@neondatabase/auth-ui/server";
import {AuthClient} from "../AuthClient";
export const dynamicParams=false;
export function generateStaticParams(){return Object.values(authViewPaths).map(path=>({path}))}
export default async function AuthPage({params}:{params:Promise<{path:string}>}){const{path}=await params;return <main className="authPage authPageClean"><section className="authCard authCardClean"><div className="authCleanTop"><a href="/" className="authCleanLogo"><img src="/ilama-bloom-logo.svg" alt="Ilama Bloom"/></a><a href="/" className="authBack">← HOME</a></div><AuthClient path={path}/><div className="authCleanFooter"><span>ILAMA BLOOM</span><small>Food · Body · Context</small></div></section></main>}