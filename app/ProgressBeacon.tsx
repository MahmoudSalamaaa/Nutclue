"use client";
import {useEffect} from "react";
export default function ProgressBeacon({enabled,view}:{enabled:boolean;view:string}){
 useEffect(()=>{if(!enabled||view!=="kids")return;const sent=new Set<string>();const save=(key:string,score:number)=>{if(sent.has(key))return;sent.add(key);fetch("/api/progress",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({gameKey:key,completed:true,score})}).catch(()=>{})};const scan=()=>{const text=document.getElementById("content")?.textContent||"";if(text.includes("YOUR PLATE IS READY!")||text.includes("طبقك جاهز!"))save("build-my-plate",100);if(text.includes("You found the carb clue")||text.includes("لقيتها!"))save("supermarket-hunt",100)};const observer=new MutationObserver(scan);observer.observe(document.getElementById("content")||document.body,{subtree:true,childList:true,characterData:true});scan();return()=>observer.disconnect()},[enabled,view]);return null;
}

