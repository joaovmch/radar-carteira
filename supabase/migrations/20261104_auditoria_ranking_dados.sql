-- Valoriza+, 04/11/2026: correções da auditoria (ranking, datas, denúncias e esquema).
--
--   * Renda fixa sai do ranking e da faixa de patrimônio (como já dizia a documentação): valor, taxa e data
--     são digitados pela pessoa e não dá para conferir. Ela continua só nas conquistas "reserva" e "completa".
--   * renda_fixa ganha datas do servidor (criado_em não pode ser antedatado).
--   * Variação do dia no ranking só conta cotações atualizadas hoje (no fim de semana não repete a de sexta).
--   * Sem dólar no painel, ativos em dólar ficam de fora em vez de usar R$ 5,50 fixo.
--   * Denúncias: só contam as dos últimos 60 dias, feitas por perfis com 7 dias ou mais.
--   * Coluna carteira.custo_brl (usada pelo site) e agendamento do ranking a cada 15 minutos no repositório.
-- Rode inteiro no SQL Editor do Supabase. Pode rodar mais de uma vez.

-- 1) Esquema que o site já usa
alter table public.carteira add column if not exists custo_brl numeric;
alter table public.carteira drop constraint if exists carteira_custo_brl_chk;
alter table public.carteira add constraint carteira_custo_brl_chk check (custo_brl is null or (custo_brl > 0 and custo_brl < 1000000000));

-- 2) Datas da renda fixa sempre do servidor
create or replace function public.renda_fixa_datas() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then new.criado_em := now(); else new.criado_em := old.criado_em; new.user_id := old.user_id; end if;
  return new;
end $$;
revoke execute on function public.renda_fixa_datas() from public, anon, authenticated;
drop trigger if exists renda_fixa_datas on public.renda_fixa;
create trigger renda_fixa_datas before insert or update on public.renda_fixa for each row execute function public.renda_fixa_datas();

-- 3) Denúncias que contam: últimos 60 dias, de perfis com pelo menos 7 dias
create or replace function public.denuncias_validas(u uuid) returns integer language sql stable security definer set search_path = public as $$
  select count(*)::int from denuncias d join perfis p on p.user_id = d.denunciante
  where d.alvo = u and d.criado_em > now() - interval '60 days' and p.criado_em < d.criado_em - interval '7 days'
$$;
revoke all on function public.denuncias_validas(uuid) from public, anon, authenticated;

create or replace function public.denunciar(nick text, motivo text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare eu perfis; alvo uuid;
begin
  select * into eu from perfis where user_id = auth.uid();
  if eu is null or eu.visibilidade = 'privado' then return jsonb_build_object('erro', 'privado'); end if;
  if eu.criado_em > now() - interval '7 days' then return jsonb_build_object('erro', 'conta_nova'); end if;
  select user_id into alvo from perfis where lower(apelido) = lower(nick) and visibilidade <> 'privado';
  if alvo is null or alvo = eu.user_id then return jsonb_build_object('erro', 'alvo'); end if;
  if (select count(*) from denuncias where denunciante = eu.user_id and criado_em > now() - interval '1 day') >= 5 then return jsonb_build_object('erro', 'limite'); end if;
  insert into denuncias(denunciante, alvo, motivo) values (eu.user_id, alvo, left(motivo, 200))
  on conflict (denunciante, alvo) do update set motivo = excluded.motivo, criado_em = now();
  return jsonb_build_object('ok', true);
end $$;
revoke all on function public.denunciar(text, text) from public, anon;
grant execute on function public.denunciar(text, text) to authenticated;

-- 4) Ranking sem renda fixa
create or replace function public.atualizar_ranking() returns integer language plpgsql security definer set search_path = public as $$
declare dol numeric; hoje timestamptz; dia_sp date; linhas integer;
begin
  select nullif((dados->'dolar'->>'valor')::numeric, 0) into dol from painel where id = 'mercado';
  dia_sp := (now() at time zone 'America/Sao_Paulo')::date;
  hoje := (dia_sp::timestamp) at time zone 'America/Sao_Paulo';
  delete from ranking r where not exists (select 1 from perfis p where p.user_id = r.user_id and p.visibilidade <> 'privado');
  with pos as (
    select c.user_id, c.qtd::numeric qtd, c.pm::numeric pm, c.criado_em, c.atualizado_em, q.classe, q.moeda,
      q.preco::numeric preco,
      -- cotação de outro dia (fim de semana, feriado, antes da abertura) não conta como variação de hoje
      case when q.classe = 'cripto' or q.atualizado_em >= hoje then q.var_dia::numeric else 0 end var_dia,
      case when q.moeda = 'USD' then dol else 1 end fx,
      coalesce(nullif(e.dados->'fundamentos'->>'proventos12mLiq', ''), nullif(e.dados->'fundamentos'->>'proventos12m', ''))::numeric prov12,
      nullif(e.dados->'fundamentos'->'ind'->>'dy', '')::numeric dy,
      nullif(e.dados->'desempenho'->>'min52', '')::numeric min52,
      nullif(e.dados->'desempenho'->>'max52', '')::numeric max52
    from carteira c
    join perfis p on p.user_id = c.user_id and p.visibilidade <> 'privado'
    join cotacoes q on q.ticker = c.ticker
    left join empresas e on e.ticker = c.ticker
    where q.preco > 0 and (q.moeda <> 'USD' or dol is not null)
  ), rv as (
    select user_id, classe::text classe, moeda::text moeda, criado_em, atualizado_em, var_dia,
      qtd * preco * fx valor,
      (pm is not null and pm > 0 and (min52 is null or max52 is null or (pm >= min52 * 0.25 and pm <= max52 * 4))) pm_ok,
      qtd * coalesce(pm, 0) * fx custo,
      case when moeda = 'BRL' and prov12 is not null then prov12 * qtd
           when dy is not null then qtd * preco * fx * dy / 100 * case when moeda = 'USD' then 0.7 else 1 end
           else 0 end prov
    from pos
  ),
  agg as (
    select user_id, count(*)::int n, sum(valor) patr, sum(prov) prov,
      sum(valor) filter (where pm_ok) / nullif(sum(custo) filter (where pm_ok), 0) - 1 rent,
      sum(valor * var_dia / (100 + var_dia)) filter (where atualizado_em < hoje and criado_em < hoje)
        / nullif(sum(valor * 100 / (100 + var_dia)) filter (where atualizado_em < hoje and criado_em < hoje), 0) dia,
      max(valor) maxv, count(distinct classe)::int ncls, bool_or(moeda = 'USD') usd
    from rv group by user_id
  ), rft as (
    -- só para as conquistas "reserva" e "completa" (valor aplicado, sem rendimento)
    select user_id, sum(valor) rf_tot from renda_fixa where data_aplicacao <= dia_sp group by user_id
  ), cls as (
    select user_id, jsonb_object_agg(classe, round(w, 4)) classes from (
      select r.user_id, r.classe, sum(r.valor) / nullif(a.patr, 0) w from rv r join agg a using (user_id) group by r.user_id, r.classe, a.patr
    ) x group by user_id
  ), flags as (
    select a.*, coalesce(f.rf_tot, 0) rf_tot, c.classes, pf.mostrar_valores,
      array_remove(array[
        case when pf.criado_em > now() - interval '7 days' then 'Perfil com menos de 7 dias' end,
        case when a.n < 2 then 'Menos de 2 ativos' end,
        case when a.patr < 100 then 'Patrimônio abaixo de R$ 100' end,
        case when a.patr > 50000000 then 'Patrimônio acima do limite que dá para conferir' end,
        case when a.rent > 5 then 'Rentabilidade acima de 500%' end,
        case when public.denuncias_validas(a.user_id) >= 3 then 'Denunciado por 3 ou mais pessoas' end,
        case when (select count(*) from carteira_eventos ev where ev.user_id = a.user_id and ev.em > now() - interval '24 hours') > 30 then 'Muitas alterações na carteira nas últimas 24 horas' end
      ], null) motivos,
      array_remove(array[
        case when coalesce(f.rf_tot, 0) >= 5000 then 'reserva' end,
        case when a.usd then 'exterior' end,
        case when a.ncls >= 3 and coalesce(f.rf_tot, 0) > 0 then 'completa' end,
        case when a.prov >= 1000 then 'renda' end
      ], null) conq
    from agg a join perfis pf using (user_id) left join cls c using (user_id) left join rft f using (user_id)
  )
  insert into ranking (user_id, nivel, n_ativos, patrimonio, proventos12m, rent_pct, dy_pct, dia_pct, div_score, classes, conq, verificado, motivos, atualizado_em)
  select user_id,
    case when patr >= 1000000 then 6 when patr >= 500000 then 5 when patr >= 100000 then 4 when patr >= 50000 then 3 when patr >= 10000 then 2 when patr >= 1000 then 1 else 0 end,
    n,
    case when mostrar_valores then round(patr, 2) end,
    case when mostrar_valores then round(prov, 2) end,
    round(rent * 100, 2), round(prov / nullif(patr, 0) * 100, 2), round(dia * 100, 2),
    round(30 * least(ncls, 4) / 4.0 + 30 * least(n, 10) / 10.0 + 40 * (1 - greatest(0, least(1, (maxv / nullif(patr, 0) - 0.15) / 0.45))))::int,
    classes, conq, cardinality(motivos) = 0, motivos, now()
  from flags
  on conflict (user_id) do update set nivel = excluded.nivel, n_ativos = excluded.n_ativos, patrimonio = excluded.patrimonio, proventos12m = excluded.proventos12m,
    rent_pct = excluded.rent_pct, dy_pct = excluded.dy_pct, dia_pct = excluded.dia_pct, div_score = excluded.div_score,
    classes = excluded.classes, conq = excluded.conq, verificado = excluded.verificado, motivos = excluded.motivos, atualizado_em = excluded.atualizado_em;
  get diagnostics linhas = row_count;
  -- Quem participa mas não tem nenhum ativo com cotação (só renda fixa não entra no ranking)
  delete from ranking r where not exists (select 1 from carteira c join cotacoes q on q.ticker = c.ticker where c.user_id = r.user_id and q.preco > 0);
  -- Faixa: guarda a menor do dia e só vale a menor dos últimos 7 dias, se a pessoa esteve nos 7
  insert into ranking_nivel_hist (user_id, dia, nivel) select user_id, dia_sp, nivel from ranking
  on conflict (user_id, dia) do update set nivel = least(ranking_nivel_hist.nivel, excluded.nivel);
  update ranking r set nivel = coalesce((select case when count(*) >= 7 then min(h.nivel) else 0 end
    from ranking_nivel_hist h where h.user_id = r.user_id and h.dia > dia_sp - 7), 0);
  delete from ranking_nivel_hist where dia < dia_sp - 10;
  -- Tira molduras e acessórios que deixaram de estar liberados
  update perfis p set moldura = case when p.moldura = any(x.l) then p.moldura end, acessorio = case when p.acessorio = any(x.l) then p.acessorio end
  from (select user_id, public.itens_liberados(user_id) l from perfis where moldura is not null or acessorio is not null) x
  where x.user_id = p.user_id and ((p.moldura is not null and not p.moldura = any(x.l)) or (p.acessorio is not null and not p.acessorio = any(x.l)));
  return linhas;
end $$;
revoke all on function public.atualizar_ranking() from public, anon, authenticated;

-- 5) Ranking: foto escondida só por denúncias válidas
create or replace function public.ranking_top(escopo text, categoria text, limite integer default 50) returns jsonb
language plpgsql security definer set search_path = public stable as $$
declare eu perfis; res jsonb; col text;
begin
  select * into eu from perfis where user_id = auth.uid();
  if eu is null or eu.visibilidade = 'privado' then return jsonb_build_object('erro', 'privado'); end if;
  col := case categoria when 'rentabilidade' then 'rent_pct' when 'dividendos' then 'dy_pct' when 'proventos' then 'proventos12m'
    when 'hoje' then 'dia_pct' when 'diversificacao' then 'div_score' when 'patrimonio' then 'patrimonio' end;
  if col is null or escopo not in ('cidade','estado','brasil','mundo') then return jsonb_build_object('erro', 'parametro'); end if;
  limite := least(greatest(coalesce(limite, 50), 1), 100);
  execute format($q$
    with base as (
      select p.user_id, p.apelido, p.nome, p.avatar, p.cor, p.moldura, p.acessorio,
        case when public.denuncias_validas(p.user_id) < 3 then p.foto end foto, p.cidade, p.uf, p.pais, p.estilo, p.visibilidade, r.%1$I valor,
        r.n_ativos, r.verificado, r.atualizado_em
      from ranking r join perfis p using (user_id)
      where p.visibilidade <> 'privado' and r.%1$I is not null
        and (r.verificado or p.user_id = $1)
        and case $2 when 'cidade' then lower(p.cidade) = lower($3) and p.uf = $4
                    when 'estado' then p.uf = $4 and p.pais = $5
                    when 'brasil' then p.pais = 'BR' else true end
    ), pos as (select *, rank() over (order by valor desc) posicao, count(*) over () total from base)
    select jsonb_build_object(
      'itens', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id' - 'visibilidade' || jsonb_build_object('eu', x.user_id = $1, 'publico', x.visibilidade = 'publico') order by x.posicao) from (select * from pos order by posicao limit $6) x), '[]'::jsonb),
      'meu', (select to_jsonb(x) - 'user_id' - 'visibilidade' from pos x where x.user_id = $1),
      'atualizado_em', (select max(atualizado_em) from ranking))
  $q$, col) into res using auth.uid(), escopo, eu.cidade, eu.uf, eu.pais, limite;
  return res;
end $$;
revoke all on function public.ranking_top(text, text, integer) from public, anon;
grant execute on function public.ranking_top(text, text, integer) to authenticated;

-- 6) Perfil público: sem dólar fixo, sem as conquistas que revelam faixas de valor
create or replace function public.perfil_publico(nick text) returns jsonb
language plpgsql security definer set search_path = public stable as $$
declare eu perfis; ele perfis; r ranking; cart jsonb; dol numeric;
begin
  select * into eu from perfis where user_id = auth.uid();
  if eu is null or eu.visibilidade = 'privado' then return jsonb_build_object('erro', 'privado'); end if;
  select * into ele from perfis where lower(apelido) = lower(nick);
  if ele is null or ele.visibilidade = 'privado' then return jsonb_build_object('erro', 'nao_encontrado'); end if;
  select * into r from ranking where user_id = ele.user_id;
  if ele.visibilidade = 'publico' and (eu.visibilidade = 'publico' or eu.user_id = ele.user_id) then
    select nullif((dados->'dolar'->>'valor')::numeric, 0) into dol from painel where id = 'mercado';
    with pos as (
      select c.ticker, q.nome, q.classe, q.moeda, c.qtd::numeric qtd, c.pm::numeric pm, q.preco::numeric preco, q.var_dia::numeric var_dia,
        c.qtd * q.preco * case when q.moeda = 'USD' then dol else 1 end valor,
        nullif(e.dados->'desempenho'->>'min52', '')::numeric min52, nullif(e.dados->'desempenho'->>'max52', '')::numeric max52
      from carteira c join cotacoes q on q.ticker = c.ticker left join empresas e on e.ticker = c.ticker where c.user_id = ele.user_id
    ), pos2 as (select *, sum(valor) over () tot from pos)
    select jsonb_agg(jsonb_build_object(
      'ticker', ticker, 'nome', nome, 'classe', classe, 'moeda', moeda, 'preco', preco, 'var_dia', var_dia,
      'peso', round(valor / nullif(tot, 0), 4),
      'resultado', case when pm > 0 and (min52 is null or max52 is null or (pm >= min52 * 0.25 and pm <= max52 * 4)) then round((preco / pm - 1) * 100, 2) end,
      'qtd', case when ele.mostrar_valores then qtd end,
      'valor', case when ele.mostrar_valores then round(valor, 2) end
    ) order by valor desc nulls last) into cart from pos2;
  end if;
  return jsonb_build_object(
    'apelido', ele.apelido, 'nome', ele.nome, 'bio', ele.bio, 'avatar', ele.avatar, 'cor', ele.cor, 'cidade', ele.cidade, 'uf', ele.uf,
    'pais', ele.pais, 'estilo', ele.estilo, 'visibilidade', ele.visibilidade, 'mostrar_valores', ele.mostrar_valores, 'desde', ele.criado_em,
    'capa', ele.capa, 'boneco', ele.boneco,
    'eu', ele.user_id = eu.user_id,
    'ranking', case when r.user_id is null then null else to_jsonb(r) - 'user_id' - 'nivel' - 'conq' end,
    'foto', case when public.denuncias_validas(ele.user_id) < 3 then ele.foto end, 'moldura', ele.moldura, 'acessorio', ele.acessorio,
    'carteira', cart,
    'carteira_bloqueada', ele.visibilidade = 'publico' and eu.visibilidade <> 'publico' and eu.user_id <> ele.user_id,
    'denunciei', exists (select 1 from denuncias where denunciante = eu.user_id and alvo = ele.user_id));
end $$;
revoke all on function public.perfil_publico(text) from public, anon;
grant execute on function public.perfil_publico(text) to authenticated;

-- 7) Resumo da notificação: sem dólar fixo e sem variação de cotação de outro dia
create or replace function public.resumo_push(uid uuid)
returns jsonb language sql stable security definer set search_path to 'public' as $$
  with m as (
    select nullif((dados->'dolar'->>'valor')::numeric, 0) dol,
           coalesce((dados->'dolar'->>'varDia')::numeric, 0) dolv from painel where id = 'mercado'
  ), hoje as (select ((now() at time zone 'America/Sao_Paulo')::date::timestamp) at time zone 'America/Sao_Paulo' h), pos as (
    select c.ticker, q.classe, q.moeda, c.qtd::numeric * q.preco::numeric * (case when q.moeda = 'USD' then (select dol from m) else 1 end) valor,
      case when q.classe = 'cripto' or q.atualizado_em >= (select h from hoje)
        then ((1 + q.var_dia / 100) * (1 + (case when q.moeda = 'USD' then (select dolv from m) else 0 end) / 100) - 1) * 100 else 0 end vd
    from carteira c join cotacoes q on q.ticker = c.ticker
    where c.user_id = uid and q.preco > 0 and (q.moeda <> 'USD' or (select dol from m) is not null)
  ), agg as (
    select count(*) n, coalesce(sum(valor), 0) patr, coalesce(sum(valor - valor / (1 + vd / 100)), 0) dia_rs from pos
  )
  select case when (select n from agg) = 0 then jsonb_build_object('n', 0) else jsonb_build_object(
    'n', (select n from agg), 'patr', round((select patr from agg), 2), 'dia_rs', round((select dia_rs from agg), 2),
    'dia_pct', round((select case when patr - dia_rs <> 0 then dia_rs / (patr - dia_rs) * 100 else 0 end from agg), 2),
    'melhor', (select jsonb_build_object('t', ticker, 'pct', round(vd, 2)) from pos order by vd desc limit 1),
    'pior',   (select jsonb_build_object('t', ticker, 'pct', round(vd, 2)) from pos order by vd asc  limit 1)
  ) end
$$;
revoke all on function public.resumo_push(uuid) from public, anon, authenticated;

-- 8) A função de fator da renda fixa no servidor não é mais usada
drop function if exists public.rf_fator(text, numeric, integer, numeric);

-- 9) Ranking a cada 15 minutos (substitui qualquer agendamento antigo do ranking)
select cron.unschedule(jobid) from cron.job where command ilike '%atualizar_ranking%';
select cron.schedule('ranking', '*/15 * * * *', $$ select public.atualizar_ranking() $$);

select public.atualizar_ranking();
