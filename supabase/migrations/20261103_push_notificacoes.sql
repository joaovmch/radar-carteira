-- Notificações push da carteira (Web Push / VAPID).
-- A chave privada VAPID fica no Vault: select vault.create_secret('<chave>', 'vapid_private');

create table if not exists public.push_subs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  modo text not null default 'abre_fecha' check (modo in ('abre_fecha','horario')),
  permanente boolean not null default false,
  criado_em timestamptz not null default now(),
  ultimo_ok timestamptz,
  falhas int not null default 0
);
create index if not exists push_subs_user on public.push_subs(user_id);
alter table public.push_subs enable row level security;
create policy "push dono le"     on public.push_subs for select using (user_id = (select auth.uid()));
create policy "push dono insere" on public.push_subs for insert with check (user_id = (select auth.uid()));
create policy "push dono altera" on public.push_subs for update using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "push dono remove" on public.push_subs for delete using (user_id = (select auth.uid()));

-- Resumo do dia da carteira para a notificação (só o serviço chama).
create or replace function public.resumo_push(uid uuid)
returns jsonb language sql stable security definer set search_path to 'public' as $$
  with m as (
    select coalesce(nullif((dados->'dolar'->>'valor')::numeric,0),5.5) dol,
           coalesce((dados->'dolar'->>'varDia')::numeric,0) dolv from painel where id='mercado'
  ), pos as (
    select c.ticker, q.classe, q.moeda, c.qtd::numeric*q.preco::numeric*(case when q.moeda='USD' then (select dol from m) else 1 end) valor,
      ((1+q.var_dia/100)*(1+(case when q.moeda='USD' then (select dolv from m) else 0 end)/100)-1)*100 vd
    from carteira c join cotacoes q on q.ticker=c.ticker
    where c.user_id=uid and q.preco>0
  ), agg as (
    select count(*) n, coalesce(sum(valor),0) patr, coalesce(sum(valor - valor/(1+vd/100)),0) dia_rs from pos
  )
  select case when (select n from agg)=0 then jsonb_build_object('n',0) else jsonb_build_object(
    'n',(select n from agg), 'patr', round((select patr from agg),2), 'dia_rs', round((select dia_rs from agg),2),
    'dia_pct', round((select case when patr-dia_rs<>0 then dia_rs/(patr-dia_rs)*100 else 0 end from agg),2),
    'melhor', (select jsonb_build_object('t',ticker,'pct',round(vd,2)) from pos order by vd desc limit 1),
    'pior',   (select jsonb_build_object('t',ticker,'pct',round(vd,2)) from pos order by vd asc  limit 1)
  ) end
$$;
revoke all on function public.resumo_push(uuid) from public, anon, authenticated;

-- Lê a chave privada VAPID do Vault (só o serviço).
create or replace function public.vapid_priv()
returns text language sql stable security definer set search_path to '' as $$
  select decrypted_secret from vault.decrypted_secrets where name = 'vapid_private';
$$;
revoke all on function public.vapid_priv() from public, anon, authenticated;
grant execute on function public.vapid_priv() to service_role;

-- Agendamentos (pg_cron): abertura e fechamento; e de 2 em 2h no pregão. Dias úteis (UTC).
select cron.schedule('push-abre',  '5 13 * * 1-5',          $$ select public.chamar_funcao('avisar','{"quando":"abre"}',30000) $$);
select cron.schedule('push-fecha', '10 21 * * 1-5',         $$ select public.chamar_funcao('avisar','{"quando":"fecha"}',30000) $$);
select cron.schedule('push-hora',  '0 13,15,17,19 * * 1-5', $$ select public.chamar_funcao('avisar','{"quando":"hora"}',30000) $$);
