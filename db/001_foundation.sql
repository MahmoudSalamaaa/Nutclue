-- NutClue cloud foundation.
-- Deliberately contains no health/clinical tables yet.
-- Personal health data remains on-device until authenticated,
-- authorized cloud sync is intentionally enabled.

CREATE TABLE IF NOT EXISTS app_installations (
  id uuid PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  app_version text,
  locale text,
  consented_to_cloud_sync boolean NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS app_installations_last_seen_idx
  ON app_installations (last_seen_at DESC);
