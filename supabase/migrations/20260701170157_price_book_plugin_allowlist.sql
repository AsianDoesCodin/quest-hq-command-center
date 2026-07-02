insert into public.workspace_plugins (id, label, description, status, created_at, updated_at)
values (
  'price_book',
  'Price Book',
  'Vendor material catalog and pricing source for estimating.',
  'available',
  now(),
  now()
)
on conflict (id) do update set
  label = excluded.label,
  description = excluded.description,
  status = excluded.status,
  updated_at = now();

insert into public.workspace_plugin_modules (plugin_id, module_id)
values ('price_book', 'price-book')
on conflict do nothing;
