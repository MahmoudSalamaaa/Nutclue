CREATE TABLE IF NOT EXISTS public.child_profiles (
  id text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
  user_id text NOT NULL UNIQUE,
  nickname text NOT NULL CHECK (char_length(nickname) BETWEEN 1 AND 40),
  age_band text NOT NULL CHECK (age_band IN ('under-8','8-12','13-17')),
  consent_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

