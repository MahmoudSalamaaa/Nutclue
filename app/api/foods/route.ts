import {NextRequest} from "next/server";
const foods=[
 ["baladi-bread","عيش بلدي","Bread & grains","1 medium piece","≈ 30 g"],
 ["ful","فول مدمس","Legumes","½ cup","≈ 20 g"],
 ["taameya","طعمية","Legumes","3 pieces","≈ 15–20 g"],
 ["rice","أرز مطبوخ","Bread & grains","⅓ cup","≈ 15 g"],
 ["pasta","مكرونة مطبوخة","Bread & grains","½ cup","≈ 15 g"],
 ["koshari","كشري","Mixed dishes","1 plate","≈ 70–90 g"],
 ["mahshi","محشي","Mixed dishes","6 small pieces","varies"],
 ["potato","بطاطس مسلوقة","Starches","1 small","≈ 15 g"],
 ["lentils","عدس","Legumes","½ cup cooked","≈ 20 g"],
 ["basbousa","بسبوسة","Sweets","1 small piece","≈ 20–25 g"],
 ["yogurt","زبادي سادة","Dairy","1 small cup","check label"],
 ["apple","تفاح","Fruit","1 small","≈ 15 g"]
].map(([id,name,category,portion,carbohydrate])=>({id,name,category,portion,carbohydrate}));
export function GET(request:NextRequest){const q=(request.nextUrl.searchParams.get("q")||"").trim().toLowerCase(),category=request.nextUrl.searchParams.get("category");const shown=foods.filter(f=>(!q||Object.values(f).join(" ").toLowerCase().includes(q))&&(!category||f.category===category));return Response.json({foods:shown,total:shown.length,source:"NutClue educational reference",review:"Estimates vary by recipe, label and portion."},{headers:{"Cache-Control":"public, max-age=3600"}})}

