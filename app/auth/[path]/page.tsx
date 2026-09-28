import {authViewPaths} from "@neondatabase/auth-ui/server";
import {AuthClient} from "../AuthClient";
export const dynamicParams=false;
export function generateStaticParams(){return Object.values(authViewPaths).map(path=>({path}))}
export default async function AuthPage({params}:{params:Promise<{path:string}>}){const {path}=await params;return <main className="authPage" dir="auto"><section className="authCard"><a href="/" className="authBrand">NUT<span>CLUE</span></a><AuthClient path={path}/></section></main>}

