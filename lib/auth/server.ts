import {betterAuth} from "better-auth";
import {PostgresDialect} from "kysely";
import {Pool} from "pg";
import {headers} from "next/headers";

const databaseUrl=process.env.DATABASE_URL||process.env.POSTGRES_URL||process.env.NutClueDB_DATABASE_URL||process.env.NutClueDB_POSTGRES_URL;
const pool=databaseUrl?new Pool({connectionString:databaseUrl,max:5}):null;
const siteUrl=process.env.BETTER_AUTH_URL||process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";
const socialProviders={
 ...(process.env.GOOGLE_CLIENT_ID&&process.env.GOOGLE_CLIENT_SECRET?{google:{clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}}:{}),
 ...(process.env.FACEBOOK_CLIENT_ID&&process.env.FACEBOOK_CLIENT_SECRET?{facebook:{clientId:process.env.FACEBOOK_CLIENT_ID,clientSecret:process.env.FACEBOOK_CLIENT_SECRET}}:{}),
 ...(process.env.X_CLIENT_ID&&process.env.X_CLIENT_SECRET?{twitter:{clientId:process.env.X_CLIENT_ID,clientSecret:process.env.X_CLIENT_SECRET}}:{})
};

export const auth=betterAuth({
 database:pool?new PostgresDialect({pool}):undefined,
 baseURL:siteUrl,
 secret:process.env.BETTER_AUTH_SECRET||"nutclue-development-secret-change-me-32-characters",
 trustedOrigins:[siteUrl,"https://nutclue.vercel.app"],
 emailAndPassword:{enabled:true},
 socialProviders
});

export async function currentUser(){
 const session=await auth.api.getSession({headers:await headers()});
 return session?.user??null;
}
