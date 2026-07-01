-- Structured global address fields for contacts.
-- Backs the rich "+New contact" modal (country/province/city/barangay cascade,
-- international dial code, and map coordinates). All additive and nullable-safe:
-- the existing single `location` text column stays the human-readable summary,
-- while these columns let the editor round-trip and re-populate the cascade.
-- Columns are TEXT default '' so existing rows and partial saves never break.

alter table public.contacts add column if not exists country_code text not null default '';
alter table public.contacts add column if not exists country      text not null default '';
alter table public.contacts add column if not exists province     text not null default '';
alter table public.contacts add column if not exists city         text not null default '';
alter table public.contacts add column if not exists barangay     text not null default '';
alter table public.contacts add column if not exists street       text not null default '';
alter table public.contacts add column if not exists block_no     text not null default '';
alter table public.contacts add column if not exists zip          text not null default '';
alter table public.contacts add column if not exists lat          text not null default '';
alter table public.contacts add column if not exists lng          text not null default '';
