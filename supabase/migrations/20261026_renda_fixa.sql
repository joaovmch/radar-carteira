-- Radar da Carteira, 26/10/2026: renda fixa (CDBs, RDBs, caixinhas, cofrinhos, LCI/LCA)
-- Cada linha é uma aplicação. O rendimento é calculado no navegador com o CDI diário do
-- Banco Central (guardado em painel.id = 'cdi' pela função radar).

create table if not exists public.renda_fixa (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  produto text not null default 'outro' check (produto ~ '^[a-z0-9_]{1,40}$'),  -- chave do modelo (ex.: nubank_turbo)
  banco text not null check (char_length(banco) between 1 and 60),
  nome text not null check (char_length(nome) between 1 and 80),
  indexador text not null default 'cdi' check (indexador in ('cdi','pre')),
  taxa numeric not null check (taxa > 0 and taxa <= 300),        -- % do CDI ou % ao ano (prefixado)
  limite numeric check (limite is null or limite > 0),           -- até quanto rende a taxa cheia
  taxa_excedente numeric check (taxa_excedente is null or (taxa_excedente >= 0 and taxa_excedente <= 300)),
  valor numeric not null check (valor > 0 and valor < 100000000),
  data_aplicacao date not null check (data_aplicacao >= date '2000-01-01'),
  vencimento date,
  isento_ir boolean not null default false,
  obs text check (obs is null or char_length(obs) <= 300),
  criado_em timestamptz not null default now()
);
create index if not exists renda_fixa_user_idx on public.renda_fixa(user_id);

alter table public.renda_fixa enable row level security;
drop policy if exists "rf dono le" on public.renda_fixa;
drop policy if exists "rf dono insere" on public.renda_fixa;
drop policy if exists "rf dono altera" on public.renda_fixa;
drop policy if exists "rf dono remove" on public.renda_fixa;
create policy "rf dono le" on public.renda_fixa for select to authenticated using (user_id = (select auth.uid()));
create policy "rf dono insere" on public.renda_fixa for insert to authenticated with check (user_id = (select auth.uid()));
create policy "rf dono altera" on public.renda_fixa for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "rf dono remove" on public.renda_fixa for delete to authenticated using (user_id = (select auth.uid()));

alter publication supabase_realtime add table public.renda_fixa;
