create table if not exists public.entries (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 type text not null check (char_length(type) between 1 and 80),
 value text not null check (char_length(value) between 1 and 180),
 at timestamptz not null default now(),
 created_at timestamptz not null default now()
);

create index if not exists entries_user_at_idx on public.entries(user_id,at desc);
alter table public.entries enable row level security;

drop policy if exists "Users can read their own entries" on public.entries;
create policy "Users can read their own entries" on public.entries for select using (auth.uid()=user_id);
drop policy if exists "Users can insert their own entries" on public.entries;
create policy "Users can insert their own entries" on public.entries for insert with check (auth.uid()=user_id);
drop policy if exists "Users can update their own entries" on public.entries;
create policy "Users can update their own entries" on public.entries for update using (auth.uid()=user_id) with check (auth.uid()=user_id);
drop policy if exists "Users can delete their own entries" on public.entries;
create policy "Users can delete their own entries" on public.entries for delete using (auth.uid()=user_id);

