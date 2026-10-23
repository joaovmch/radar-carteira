-- Radar da Carteira, 22/10/2026 (já aplicado no projeto Supabase, exceto a parte final marcada como PENDENTE)
-- Remove o chat de IA, cria o perfil das empresas, automatiza mercado e sinais sem IA e reforça a segurança.

-- Indicadores técnicos e fatores do sinal de cada ação
alter table public.analises add column if not exists indicadores jsonb;

-- Perfil das empresas (sobre, fotos, fatos, indicadores, dividendos, reputação, notícias), em cache
create table if not exists public.empresas (
  ticker text primary key check (ticker ~ '^[A-Z][A-Z0-9]{2}[A-Z][0-9]{1,2}$'),
  dados jsonb not null,
  atualizado_em timestamptz not null default now()
);
alter table public.empresas enable row level security;
create policy "empresas leitura" on public.empresas for select to authenticated using (true);

-- Limite diário de uso da função por usuário (só o servidor grava; sem políticas = ninguém lê pelo site)
create table if not exists public.uso_api (
  user_id uuid not null references auth.users(id) on delete cascade,
  dia date not null default (now() at time zone 'America/Sao_Paulo')::date,
  acao text not null,
  n integer not null default 0,
  primary key (user_id, dia, acao)
);
alter table public.uso_api enable row level security;

create or replace function public.uso_registrar(uid uuid, acao text, limite integer)
returns integer language plpgsql security definer set search_path = '' as $$
#variable_conflict use_column
declare v integer;
begin
  insert into public.uso_api as u (user_id, dia, acao, n)
  values (uso_registrar.uid, (now() at time zone 'America/Sao_Paulo')::date, uso_registrar.acao, 1)
  on conflict (user_id, dia, acao) do update set n = u.n + 1
  returning u.n into v;
  if v > uso_registrar.limite then return -1; end if;
  return uso_registrar.limite - v;
end $$;
revoke all on function public.uso_registrar(uuid, text, integer) from public, anon, authenticated;
grant execute on function public.uso_registrar(uuid, text, integer) to service_role;

-- Segredo do agendamento, guardado no Vault: a função "radar" só aceita o pg_cron com este cabeçalho
do $$
begin
  if not exists (select 1 from vault.secrets where name = 'cron_secret') then
    perform vault.create_secret(replace(gen_random_uuid()::text || gen_random_uuid()::text, '-', ''), 'cron_secret');
  end if;
end $$;
create or replace function public.cron_segredo_ok(s text)
returns boolean language sql security definer set search_path = '' stable as $$
  select exists (select 1 from vault.decrypted_secrets where name = 'cron_secret' and decrypted_secret = s);
$$;
revoke all on function public.cron_segredo_ok(text) from public, anon, authenticated;
grant execute on function public.cron_segredo_ok(text) to service_role;

-- Limites de sanidade na carteira
alter table public.carteira add constraint carteira_qtd_max check (qtd <= 1000000000);
alter table public.carteira add constraint carteira_pm_max check (pm is null or pm <= 10000000);
create or replace function public.carteira_limite()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if (select count(*) from public.carteira where user_id = new.user_id) >= 200 then
    raise exception 'Limite de 200 ações por carteira';
  end if;
  return new;
end $$;
revoke all on function public.carteira_limite() from public, anon, authenticated;
create trigger carteira_limite before insert on public.carteira for each row execute function public.carteira_limite();

-- Chat removido: acesso bloqueado
revoke all on function public.chat_consumir(integer) from public, anon, authenticated;
revoke all on table public.chat_uso from anon, authenticated;

-- Agendamentos (pg_cron), todos com o cabeçalho secreto
create or replace function public.chamar_funcao(nome text, corpo jsonb default '{}'::jsonb, espera integer default 60000)
returns bigint language sql security definer set search_path = '' as $$
  select net.http_post(
    url := 'https://urdtzrquiypewetklwxm.supabase.co/functions/v1/' || nome,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      -- chave pública (anon), a mesma do site; a autorização de verdade é o x-cron-secret
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZHR6cnF1aXlwZXdldGtsd3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0MzYzODksImV4cCI6MjEwODAxMjM4OX0.kd8j09OBpMrUcnKVyYqgFcBLhbOqSfPi3ccmlviAFdo',
      'x-cron-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'cron_secret')),
    body := corpo,
    timeout_milliseconds := espera);
$$;
revoke all on function public.chamar_funcao(text, jsonb, integer) from public, anon, authenticated;

-- Cotações: a cada 2 min no pregão (10h–17h59 de Brasília) e duas rodadas depois do fechamento
select cron.schedule('cotacoes-pregao', '*/2 13-20 * * 1-5', $$ select public.chamar_funcao('radar', '{"acao":"cotacoes"}') $$);
select cron.schedule('cotacoes-fechamento', '20,40 21 * * 1-5', $$ select public.chamar_funcao('radar', '{"acao":"cotacoes","forcar":true}') $$);
-- Mercado, destaques e sinais: a cada 10 min das 9h às 18h59 nos dias úteis, e a cada 3 horas no resto do tempo
select cron.schedule('analisar-pregao', '*/10 12-21 * * 1-5', $$ select public.chamar_funcao('radar', '{"acao":"analisar"}', 150000) $$);
select cron.schedule('analisar-fora', '5 */3 * * *', $$ select public.chamar_funcao('radar', '{"acao":"analisar"}', 150000) $$);

-- ============================================================================
-- PENDENTE: rode no SQL Editor do Supabase (apaga as sobras do chat e tira o
-- pg_net do schema public, como pede o aviso de segurança do Supabase).
-- ============================================================================
-- drop function if exists public.chat_consumir(integer);
-- drop table if exists public.chat_uso;
-- drop extension if exists pg_net;
-- create extension pg_net with schema extensions;
