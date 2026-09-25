# NutClue database foundation

NutClue is prepared for serverless PostgreSQL on Vercel using Neon.

## Safety boundary

Health profiles, measurements, medications, symptoms, notes, and visit data remain in browser storage. The current database schema intentionally stores none of those fields.

Cloud health sync must not be enabled until authentication, per-user authorization, consent, retention/deletion controls, and an auditable migration path are implemented.

## Provisioning

1. Install a Neon Postgres resource from the Vercel Marketplace and connect it only to the original `nutclue` project.
2. Confirm Vercel injects `DATABASE_URL`.
3. Run `db/001_foundation.sql` from the database SQL editor.
4. Verify `/api/storage-status` returns `databaseConfigured: true`.

No secrets belong in GitHub.
