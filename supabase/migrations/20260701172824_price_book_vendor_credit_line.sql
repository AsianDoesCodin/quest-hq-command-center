alter table public.pricebook_vendors
  add column if not exists credit_limit numeric(12, 2);
