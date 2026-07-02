alter table public.pricebook_vendors
  add column if not exists on_account boolean not null default false,
  add column if not exists payment_terms text not null default 'cod';
