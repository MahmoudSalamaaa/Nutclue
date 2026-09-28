import {createNeonAuth} from "@neondatabase/auth/next/server";
const cookieSecret=process.env.NEON_AUTH_COOKIE_SECRET;
if(!cookieSecret&&process.env.NODE_ENV==="production")console.warn("NEON_AUTH_COOKIE_SECRET is missing; configure it in Vercel before relying on production auth.");
export const auth=createNeonAuth({baseUrl:process.env.NEON_AUTH_BASE_URL!,cookies:{secret:cookieSecret||"nutclue-development-cookie-secret-change-me"}});

