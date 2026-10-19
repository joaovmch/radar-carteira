-- Tabelas do Radar da Carteira (já aplicadas no projeto Supabase)

create table public.cotacoes (
  ticker text primary key,
  nome text not null,
  preco numeric not null,
  var_dia numeric not null default 0,
  volume bigint not null default 0,
  setor text,
  setor_macro text,
  valor_mercado_mi bigint,
  atualizado_em timestamptz not null default now()
);

create table public.carteira (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  ticker text not null check (ticker ~ '^[A-Z][A-Z0-9]{2}[A-Z][0-9]{1,2}$'),
  qtd integer not null check (qtd > 0),
  pm numeric check (pm is null or pm > 0),
  criado_em timestamptz not null default now(),
  unique (user_id, ticker)
);
create index carteira_user_idx on public.carteira(user_id);

create table public.analises (
  ticker text primary key,
  nome text,
  setor text,
  preco numeric,
  var_dia numeric,
  sinal text check (sinal in ('reforcar','manter','atencao','reduzir')),
  motivo text,
  noticias jsonb not null default '[]'::jsonb,
  atualizado_em timestamptz not null default now()
);

-- painel: documentos compartilhados (mercado, consenso, em_alta, sugestoes_setor)
create table public.painel (
  id text primary key,
  dados jsonb not null,
  atualizado_em timestamptz not null default now()
);

alter table public.cotacoes enable row level security;
alter table public.carteira enable row level security;
alter table public.analises enable row level security;
alter table public.painel enable row level security;

create policy "cotacoes leitura publica" on public.cotacoes for select to anon, authenticated using (true);
create policy "analises leitura" on public.analises for select to authenticated using (true);
create policy "painel leitura" on public.painel for select to authenticated using (true);
create policy "carteira dono le" on public.carteira for select to authenticated using (user_id = (select auth.uid()));
create policy "carteira dono insere" on public.carteira for insert to authenticated with check (user_id = (select auth.uid()));
create policy "carteira dono altera" on public.carteira for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "carteira dono remove" on public.carteira for delete to authenticated using (user_id = (select auth.uid()));

alter publication supabase_realtime add table public.cotacoes, public.analises, public.painel, public.carteira;

create extension if not exists pg_cron;
create extension if not exists pg_net;

-- Cotações a cada 2 minutos no pregão (13h–20h59 UTC = 10h–17h59 de Brasília) e duas rodadas no fechamento.
-- Troque <ANON_KEY> pela chave anon do projeto.
-- select cron.schedule('cotacoes-pregao', '*/2 13-20 * * 1-5', $$ select net.http_post(
--   url := 'https://urdtzrquiypewetklwxm.supabase.co/functions/v1/cotacoes',
--   headers := jsonb_build_object('Content-Type','application/json','Authorization','Bearer <ANON_KEY>'),
--   body := '{}'::jsonb, timeout_milliseconds := 60000); $$);
-- select cron.schedule('cotacoes-fechamento', '20,40 21 * * 1-5', $$ select net.http_post(
--   url := 'https://urdtzrquiypewetklwxm.supabase.co/functions/v1/cotacoes',
--   headers := jsonb_build_object('Content-Type','application/json','Authorization','Bearer <ANON_KEY>'),
--   body := '{"forcar":true}'::jsonb, timeout_milliseconds := 60000); $$);
