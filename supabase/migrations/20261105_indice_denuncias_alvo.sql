-- Índice na chave estrangeira denuncias.alvo (aviso de desempenho do Supabase)
create index if not exists denuncias_alvo_idx on public.denuncias (alvo);
