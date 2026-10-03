import {neon} from "@neondatabase/serverless";
import type {NeonQueryFunction} from "@neondatabase/serverless";
import {currentUser} from "../../../lib/auth/server";
function db(){const url=process.env.DATABASE_URL||process.env.POSTGRES_URL||process.env.ILAMA_BLOOM_DATABASE_URL||process.env.ILAMA_BLOOM_POSTGRES_URL||process.env.NutClueDB_DATABASE_URL||process.env.NutClueDB_POSTGRES_URL;if(!url)throw new Error("Database is not configured");return neon(url)}
async function ensure(sql:NeonQueryFunction<false,false>){
 await sql`CREATE TABLE IF NOT EXISTS public.care_records (
  id text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
  user_id text NOT NULL,
  family_profile_id text,
  kind text NOT NULL,
  title text NOT NULL,
  detail text NOT NULL DEFAULT '',
  severity smallint,
  occurred_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
 )`;
 await sql`CREATE INDEX IF NOT EXISTS care_records_user_time_idx ON public.care_records(user_id,occurred_at DESC)`;
}
const json=(b:unknown,s=200)=>Response.json(b,{status:s,headers:{"Cache-Control":"no-store"}});
const clean=(v:unknown,n:number)=>String(v||"").trim().slice(0,n);const kinds=new Set(["medication","symptom","measurement","visit-note"]);
export async function GET(){try{const u=await currentUser();if(!u)return json({error:"Unauthorized"},401);const sql=db();await ensure(sql);const rows=await sql`SELECT id,family_profile_id,kind,title,detail,severity,occurred_at,created_at FROM public.care_records WHERE user_id=${u.id} ORDER BY occurred_at DESC LIMIT 300`;return json({records:rows})}catch(e){console.error("care GET failed",e);return json({error:"Unable to load care records"},500)}}
export async function POST(request:Request){try{const u=await currentUser();if(!u)return json({error:"Unauthorized"},401);const b=await request.json().catch(()=>null);if(!b)return json({error:"Invalid JSON"},400);const kind=clean(b.kind,30),title=clean(b.title,120),detail=clean(b.detail,1000),familyId=clean(b.familyProfileId,80)||null;const severity=b.severity==null?null:Number(b.severity);if(!kinds.has(kind)||!title||severity!=null&&(!Number.isInteger(severity)||severity<1||severity>5))return json({error:"Invalid care record"},400);const ts=Date.parse(String(b.occurredAt||new Date().toISOString()));if(Number.isNaN(ts))return json({error:"Invalid date"},400);const sql=db();await ensure(sql);if(familyId){const owns=await sql`SELECT id FROM public.family_profiles WHERE id=${familyId} AND owner_user_id=${u.id} LIMIT 1`;if(!owns.length)return json({error:"Family profile not found"},404)}const rows=await sql`INSERT INTO public.care_records(user_id,family_profile_id,kind,title,detail,severity,occurred_at) VALUES(${u.id},${familyId},${kind},${title},${detail},${severity},${new Date(ts).toISOString()}) RETURNING id,family_profile_id,kind,title,detail,severity,occurred_at,created_at`;return json({record:rows[0]},201)}catch(e){console.error("care POST failed",e);return json({error:"Unable to save care record"},500)}}