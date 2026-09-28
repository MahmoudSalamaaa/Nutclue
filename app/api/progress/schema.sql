CREATE TABLE IF NOT EXISTS public.game_progress (
  user_id text NOT NULL,
  game_key text NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  score integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, game_key)
);

