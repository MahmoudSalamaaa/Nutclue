"use client";
import {useEffect} from "react";

export default function PwaRegister(){
  useEffect(()=>{
    if(!("serviceWorker" in navigator)) return;

    const register=async()=>{
      try{
        const registration=await navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"});
        await registration.update();

        if(registration.waiting){
          registration.waiting.postMessage({type:"SKIP_WAITING"});
        }

        registration.addEventListener("updatefound",()=>{
          const worker=registration.installing;
          if(!worker) return;
          worker.addEventListener("statechange",()=>{
            if(worker.state==="installed"&&navigator.serviceWorker.controller){
              worker.postMessage({type:"SKIP_WAITING"});
            }
          });
        });

        navigator.serviceWorker.controller?.postMessage({type:"CLEAR_OLD_CACHES"});
      }catch(error){console.error("service worker registration failed",error)}
    };

    register();

    const onControllerChange=()=>{sessionStorage.setItem("ib-sw-updated","1")};
    navigator.serviceWorker.addEventListener("controllerchange",onControllerChange);
    return()=>navigator.serviceWorker.removeEventListener("controllerchange",onControllerChange);
  },[]);
  return null;
}
