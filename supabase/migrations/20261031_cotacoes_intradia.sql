-- Radar da Carteira, 31/10/2026: histórico de cotações ao longo do dia (gráfico "Hoje" e "5 dias").
--
--   * cotacoes_hist guarda cada preço novo dos ativos que estão em alguma carteira (as cotações chegam
--     a cada 2 minutos no pregão e a cripto a cada 10). Fica só a última semana.
--   * Leitura liberada para usuários logados (preço de mercado não é dado pessoal).
-- Rode inteiro no SQL Editor do Supabase. Pode rodar mais de uma vez.

create table if not exists public.cotacoes_hist (
  ticker text not null,
  em timestamptz not null,
  preco numeric not null check (preco > 0),
  primary key (ticker, em)
);
create index if not exists cotacoes_hist_em_idx on public.cotacoes_hist (em);
alter table public.cotacoes_hist enable row level security;
drop policy if exists "historico leitura" on public.cotacoes_hist;
create policy "historico leitura" on public.cotacoes_hist for select to authenticated using (true);
revoke insert, update, delete on public.cotacoes_hist from anon, authenticated;

create or replace function public.cotacoes_hist_grava() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.preco is null or new.preco <= 0 then return new; end if;
  if tg_op = 'UPDATE' and new.preco is not distinct from old.preco then return new; end if;
  if not exists (select 1 from carteira c where c.ticker = new.ticker) then return new; end if;
  insert into cotacoes_hist (ticker, em, preco) values (new.ticker, coalesce(new.atualizado_em, now()), new.preco)
  on conflict (ticker, em) do update set preco = excluded.preco;
  if random() < 0.01 then delete from cotacoes_hist where em < now() - interval '8 days'; end if;
  return new;
end $$;
drop trigger if exists cotacoes_hist_grava on public.cotacoes;
create trigger cotacoes_hist_grava after insert or update of preco on public.cotacoes for each row execute function public.cotacoes_hist_grava();

-- ponto de partida: fechamento anterior (abertura de hoje, 10h) e o preço atual de cada ativo em carteira
insert into public.cotacoes_hist (ticker, em, preco)
select q.ticker, ((now() at time zone 'America/Sao_Paulo')::date + time '10:00') at time zone 'America/Sao_Paulo', round(q.preco / (1 + coalesce(q.var_dia, 0) / 100), 6)
from public.cotacoes q where q.preco > 0 and exists (select 1 from public.carteira c where c.ticker = q.ticker)
on conflict do nothing;
insert into public.cotacoes_hist (ticker, em, preco)
select q.ticker, coalesce(q.atualizado_em, now()), q.preco from public.cotacoes q
where q.preco > 0 and exists (select 1 from public.carteira c where c.ticker = q.ticker)
on conflict do nothing;
