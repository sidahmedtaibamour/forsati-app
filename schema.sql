-- ===== الجزء 1: المحفوظات والإعدادات (نفّذه أولًا) =====
-- Supabase → SQL Editor → الصق هذا الملف كاملًا ثم Run (يمكن إعادة تشغيله بأمان)

create table if not exists public.user_favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  opportunity_id text not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  primary key (user_id, opportunity_id)
);
alter table public.user_favorites enable row level security;
drop policy if exists fav_select_own on public.user_favorites;
drop policy if exists fav_insert_own on public.user_favorites;
drop policy if exists fav_update_own on public.user_favorites;
drop policy if exists fav_delete_own on public.user_favorites;
create policy fav_select_own on public.user_favorites for select using (auth.uid() = user_id);
create policy fav_insert_own on public.user_favorites for insert with check (auth.uid() = user_id);
create policy fav_update_own on public.user_favorites for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy fav_delete_own on public.user_favorites for delete using (auth.uid() = user_id);

-- إعدادات المستخدم (المظهر، الاهتمامات، اللغة...)
create table if not exists public.user_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.user_settings enable row level security;
drop policy if exists set_select_own on public.user_settings;
drop policy if exists set_insert_own on public.user_settings;
drop policy if exists set_update_own on public.user_settings;
drop policy if exists set_delete_own on public.user_settings;
create policy set_select_own on public.user_settings for select using (auth.uid() = user_id);
create policy set_insert_own on public.user_settings for insert with check (auth.uid() = user_id);
create policy set_update_own on public.user_settings for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy set_delete_own on public.user_settings for delete using (auth.uid() = user_id);
