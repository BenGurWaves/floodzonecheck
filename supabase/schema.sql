-- Supabase SQL Schema for FloodZoneCheck
-- Run this in the Supabase SQL Editor to set up all required tables

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  tier text default 'free',
  stripe_customer_id text,
  created_at timestamp with time zone default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Zone cache
create table if not exists public.zone_cache (
  id uuid primary key default uuid_generate_v4(),
  lat numeric(5,3) not null,
  lng numeric(5,3) not null,
  zone_data jsonb not null,
  last_fetched timestamp with time zone default now(),
  unique(lat, lng)
);

create index if not exists zone_cache_coords on public.zone_cache(lat, lng);

-- Tracked properties
create table if not exists public.tracked_properties (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  address_label text not null,
  lat numeric not null,
  lng numeric not null,
  last_known_zone text,
  last_checked timestamp with time zone default now(),
  created_at timestamp with time zone default now()
);

alter table public.tracked_properties enable row level security;

create policy "Users can view own tracked properties"
  on public.tracked_properties for select
  using (auth.uid() = user_id);

create policy "Users can insert own tracked properties"
  on public.tracked_properties for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own tracked properties"
  on public.tracked_properties for delete
  using (auth.uid() = user_id);

create index if not exists tracked_properties_user on public.tracked_properties(user_id);
create index if not exists tracked_properties_checked on public.tracked_properties(last_checked);

-- Alert log
create table if not exists public.alert_log (
  id uuid primary key default uuid_generate_v4(),
  tracked_property_id uuid not null references public.tracked_properties(id) on delete cascade,
  old_zone text,
  new_zone text,
  sent_at timestamp with time zone default now()
);

alter table public.alert_log enable row level security;

create policy "Users can view alerts for own properties"
  on public.alert_log for select
  using (
    exists (
      select 1 from public.tracked_properties
      where tracked_properties.id = alert_log.tracked_property_id
      and tracked_properties.user_id = auth.uid()
    )
  );

create index if not exists alert_log_property on public.alert_log(tracked_property_id);

-- Function to auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
