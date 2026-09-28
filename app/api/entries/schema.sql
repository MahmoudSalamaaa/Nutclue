CREATE TABLE IF NOT EXISTS public.entries (
  id text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
  user_id text NOT NULL,
  type text NOT NULL CHECK (char_length(type) BETWEEN 1 AND 80),
  value text NOT NULL CHECK (char_length(value) BETWEEN 1 AND 180),
  at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS entries_user_at_idx ON public.entries (user_id, at DESC);

