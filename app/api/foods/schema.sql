CREATE TABLE IF NOT EXISTS public.foods (
  id text PRIMARY KEY,
  name text NOT NULL,
  category text NOT NULL,
  portion text NOT NULL,
  carbohydrate text NOT NULL,
  notes text NOT NULL DEFAULT '',
  reviewed_at date,
  reviewed_by text
);

