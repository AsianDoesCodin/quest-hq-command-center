-- Quote line items: description, qty, unit cost (from Price Book or manual), margin.
alter table public.deals add column if not exists line_items jsonb not null default '[]'::jsonb;
