"use client";
import {useEffect} from "react";
import {AuthView} from "@neondatabase/auth-ui";
import {authClient} from "../../lib/auth/client";

export function AuthClient({path}:{path:string}){
 const {data:session}=authClient.useSession();
 useEffect(()=>{if(!session)return;const next=new URLSearchParams(location.search).get("next");if(next&&next.startsWith("/"))location.replace(next)},[session]);
 return <AuthView path={path}/>;
}

