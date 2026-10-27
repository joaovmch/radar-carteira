-- Radar da Carteira, 28/10/2026: foto de perfil, molduras e acessórios (recompensas).
--
-- Recompensas liberadas pelo servidor, nunca pelo navegador:
--   * Faixa de patrimônio (ações, FIIs, ETFs, BDRs e cripto com cotação real; renda fixa não conta):
--     1 Bronze R$ 1 mil · 2 Prata R$ 10 mil · 3 Ouro R$ 50 mil · 4 Platina R$ 100 mil · 5 Diamante R$ 500 mil · 6 Lenda R$ 1 milhão.
--     Cada faixa libera uma moldura e um acessório.
--   * Conquistas: dividend yield >= 6%, diversificação >= 70, cripto na carteira, 10+ ativos, rentabilidade >= 20%,
--     30 dias e 1 ano no Radar.
--   A faixa só sobe depois de 7 dias seguidos com o patrimônio naquele nível (vale o menor dos 7 dias),
--   então digitar uma quantidade falsa não libera nada na hora.
--   Só contam números sem alerta anti-troll (nas conquistas, o único alerta tolerado é "perfil com menos de 7 dias").
--   O banco recusa equipar item bloqueado, e o recálculo de 15 em 15 minutos tira o que deixou de valer.
--   A faixa (nivel) nunca é mostrada a outras pessoas; só aparece se a pessoa escolher usar a moldura.
-- Foto: imagem pequena (até ~30 KB, 128x128) guardada no próprio perfil; some se o perfil tiver 3 denúncias.

alter table public.perfis add column if not exists foto text;
alter table public.perfis add column if not exists moldura text;
alter table public.perfis add column if not exists acessorio text;
alter table public.perfis drop constraint if exists perfis_foto_chk;
alter table public.perfis add constraint perfis_foto_chk check (foto is null or (char_length(foto) <= 40000 and foto ~ '^data:image/(webp|jpeg|png);base64,[A-Za-z0-9+/=]+$'));
alter table public.perfis drop constraint if exists perfis_itens_chk;
alter table public.perfis add constraint perfis_itens_chk check ((moldura is null or moldura ~ '^m_[a-z]{3,12}$') and (acessorio is null or acessorio ~ '^a_[a-z]{3,12}$'));
alter table public.ranking add column if not exists nivel smallint not null default 0;
-- Menor faixa de cada dia (para exigir 7 dias seguidos)
create table if not exists public.ranking_nivel_hist (
  user_id uuid not null references auth.users(id) on delete cascade,
  dia date not null,
  nivel smallint not null,
  primary key (user_id, dia)
);
alter table public.ranking_nivel_hist enable row level security;  -- sem políticas: só o servidor

-- Itens liberados para uma pessoa
create or replace function public.itens_liberados(u uuid) returns text[] language sql stable security definer set search_path = public as $$
  select array_remove(array[
    'm_basica', 'a_bone', 'a_broto', 'a_cafe',
    case when okn and r.nivel >= 1 then 'm_bronze' end, case when okn and r.nivel >= 1 then 'a_formatura' end,
    case when okn and r.nivel >= 2 then 'm_prata' end, case when okn and r.nivel >= 2 then 'a_oculos' end,
    case when okn and r.nivel >= 3 then 'm_ouro' end, case when okn and r.nivel >= 3 then 'a_cartola' end,
    case when okn and r.nivel >= 4 then 'm_platina' end, case when okn and r.nivel >= 4 then 'a_maleta' end,
    case when okn and r.nivel >= 5 then 'm_diamante' end, case when okn and r.nivel >= 5 then 'a_diamante' end,
    case when okn and r.nivel >= 6 then 'm_lenda' end, case when okn and r.nivel >= 6 then 'a_dragao' end,
    case when ok and r.dy_pct >= 6 then 'a_saco' end,
    case when ok and r.div_score >= 70 then 'a_arcoiris' end,
    case when ok and r.classes ? 'cripto' then 'a_foguete' end,
    case when ok and r.n_ativos >= 10 then 'a_alvo' end,
    case when ok and r.rent_pct >= 20 then 'a_touro' end,
    case when p.criado_em < now() - interval '30 days' then 'a_estrela' end,
    case when p.criado_em < now() - interval '365 days' then 'a_medalha' end
  ], null)
  from (select 1) x
  left join ranking r on r.user_id = u
  left join perfis p on p.user_id = u
  cross join lateral (select coalesce(r.verificado or r.motivos <@ array['Perfil com menos de 7 dias'], false) ok, coalesce(r.verificado, false) okn) v
$$;
revoke all on function public.itens_liberados(uuid) from public, anon, authenticated;

-- O que eu já liberei (para a tela de recompensas)
create or replace function public.minhas_conquistas() returns jsonb language sql stable security definer set search_path = public as $$
  select jsonb_build_object('itens', to_jsonb(public.itens_liberados(auth.uid())), 'nivel', r.nivel, 'verificado', r.verificado, 'motivos', to_jsonb(r.motivos), 'atualizado_em', r.atualizado_em)
  from (select 1) x left join ranking r on r.user_id = auth.uid()
$$;
revoke all on function public.minhas_conquistas() from public, anon;
grant execute on function public.minhas_conquistas() to authenticated;

-- Datas do servidor e bloqueio de itens não liberados
create or replace function public.perfis_datas() returns trigger language plpgsql set search_path = public as $$
begin
  if tg_op = 'INSERT' then new.criado_em := now(); else new.criado_em := old.criado_em; new.user_id := old.user_id; end if;
  new.atualizado_em := now();
  if new.moldura is not null and (tg_op = 'INSERT' or new.moldura is distinct from old.moldura)
     and not coalesce(new.moldura = any(public.itens_liberados(new.user_id)), false) then
    raise exception 'item_bloqueado: %', new.moldura using errcode = 'P0001';
  end if;
  if new.acessorio is not null and (tg_op = 'INSERT' or new.acessorio is distinct from old.acessorio)
     and not coalesce(new.acessorio = any(public.itens_liberados(new.user_id)), false) then
    raise exception 'item_bloqueado: %', new.acessorio using errcode = 'P0001';
  end if;
  return new;
end $$;

create or replace function public.atualizar_ranking() returns integer language plpgsql security definer set search_path = public as $$
declare dol numeric; hoje timestamptz; dia_sp date; linhas integer;
begin
  select nullif((dados->'dolar'->>'valor')::numeric, 0) into dol from painel where id = 'mercado';
  dol := coalesce(dol, 5.5);
  dia_sp := (now() at time zone 'America/Sao_Paulo')::date;
  hoje := ((now() at time zone 'America/Sao_Paulo')::date)::timestamp at time zone 'America/Sao_Paulo';
  delete from ranking r where not exists (select 1 from perfis p where p.user_id = r.user_id and p.visibilidade <> 'privado');
  with pos as (
    select c.user_id, c.ticker, c.qtd::numeric qtd, c.pm::numeric pm, c.criado_em, c.atualizado_em, q.classe, q.moeda,
      q.preco::numeric preco, q.var_dia::numeric var_dia, case when q.moeda = 'USD' then dol else 1 end fx,
      nullif(e.dados->'fundamentos'->>'proventos12m', '')::numeric prov12,
      nullif(e.dados->'fundamentos'->'ind'->>'dy', '')::numeric dy,
      nullif(e.dados->'desempenho'->>'min52', '')::numeric min52,
      nullif(e.dados->'desempenho'->>'max52', '')::numeric max52
    from carteira c
    join perfis p on p.user_id = c.user_id and p.visibilidade <> 'privado'
    join cotacoes q on q.ticker = c.ticker
    left join empresas e on e.ticker = c.ticker
    where q.preco > 0
  ), pos2 as (
    select *, qtd * preco * fx valor,
      (pm is not null and pm > 0 and (min52 is null or max52 is null or (pm >= min52 * 0.25 and pm <= max52 * 4))) pm_ok,
      case when moeda = 'BRL' and prov12 is not null then prov12 * qtd
           when dy is not null then qtd * preco * fx * dy / 100 * case when moeda = 'USD' then 0.7 else 1 end
           else 0 end prov
    from pos
  ), agg as (
    select user_id, count(*)::int n, sum(valor) patr, sum(prov) prov,
      sum(valor) filter (where pm_ok) / nullif(sum(qtd * pm * fx) filter (where pm_ok), 0) - 1 rent,
      sum(valor * var_dia / (100 + var_dia)) filter (where atualizado_em < hoje and criado_em < hoje)
        / nullif(sum(valor * 100 / (100 + var_dia)) filter (where atualizado_em < hoje and criado_em < hoje), 0) dia,
      max(valor) maxv, count(distinct classe)::int ncls
    from pos2 group by user_id
  ), cls as (
    select user_id, jsonb_object_agg(classe, round(w, 4)) classes from (
      select p.user_id, p.classe, sum(p.valor) / nullif(a.patr, 0) w from pos2 p join agg a using (user_id) group by p.user_id, p.classe, a.patr
    ) x group by user_id
  ), flags as (
    select a.*, c.classes, pf.mostrar_valores,
      array_remove(array[
        case when pf.criado_em > now() - interval '7 days' then 'Perfil com menos de 7 dias' end,
        case when a.n < 2 then 'Menos de 2 ativos' end,
        case when a.patr < 100 then 'Patrimônio abaixo de R$ 100' end,
        case when a.patr > 50000000 then 'Patrimônio acima do limite que dá para conferir' end,
        case when a.rent > 5 then 'Rentabilidade acima de 500%' end,
        case when (select count(*) from denuncias d where d.alvo = a.user_id) >= 3 then 'Denunciado por 3 ou mais pessoas' end,
        case when (select count(*) from carteira_eventos ev where ev.user_id = a.user_id and ev.em > now() - interval '24 hours') > 30 then 'Muitas alterações na carteira nas últimas 24 horas' end
      ], null) motivos
    from agg a join perfis pf using (user_id) left join cls c using (user_id)
  )
  insert into ranking (user_id, nivel, n_ativos, patrimonio, proventos12m, rent_pct, dy_pct, dia_pct, div_score, classes, verificado, motivos, atualizado_em)
  select user_id,
    case when patr >= 1000000 then 6 when patr >= 500000 then 5 when patr >= 100000 then 4 when patr >= 50000 then 3 when patr >= 10000 then 2 when patr >= 1000 then 1 else 0 end,
    n,
    case when mostrar_valores then round(patr, 2) end,
    case when mostrar_valores then round(prov, 2) end,
    round(rent * 100, 2), round(prov / nullif(patr, 0) * 100, 2), round(dia * 100, 2),
    round(30 * least(ncls, 4) / 4.0 + 30 * least(n, 10) / 10.0 + 40 * (1 - greatest(0, least(1, (maxv / nullif(patr, 0) - 0.15) / 0.45))))::int,
    classes, cardinality(motivos) = 0, motivos, now()
  from flags
  on conflict (user_id) do update set nivel = excluded.nivel, n_ativos = excluded.n_ativos, patrimonio = excluded.patrimonio, proventos12m = excluded.proventos12m,
    rent_pct = excluded.rent_pct, dy_pct = excluded.dy_pct, dia_pct = excluded.dia_pct, div_score = excluded.div_score,
    classes = excluded.classes, verificado = excluded.verificado, motivos = excluded.motivos, atualizado_em = excluded.atualizado_em;
  get diagnostics linhas = row_count;
  -- Quem participa mas está sem nenhum ativo com cotação
  delete from ranking r where not exists (select 1 from carteira c where c.user_id = r.user_id);
  -- Faixa: guarda a menor do dia e só vale a menor dos últimos 7 dias, se a pessoa esteve nos 7
  insert into ranking_nivel_hist (user_id, dia, nivel) select user_id, dia_sp, nivel from ranking
  on conflict (user_id, dia) do update set nivel = least(ranking_nivel_hist.nivel, excluded.nivel);
  update ranking r set nivel = coalesce((select case when count(*) >= 7 then min(h.nivel) else 0 end
    from ranking_nivel_hist h where h.user_id = r.user_id and h.dia > dia_sp - 7), 0);
  delete from ranking_nivel_hist where dia < dia_sp - 10;
  -- Tira molduras e acessórios que deixaram de estar liberados (ex.: patrimônio caiu de faixa)
  update perfis p set moldura = case when p.moldura = any(x.l) then p.moldura end, acessorio = case when p.acessorio = any(x.l) then p.acessorio end
  from (select user_id, public.itens_liberados(user_id) l from perfis where moldura is not null or acessorio is not null) x
  where x.user_id = p.user_id and ((p.moldura is not null and not p.moldura = any(x.l)) or (p.acessorio is not null and not p.acessorio = any(x.l)));
  return linhas;
end $$;

create or replace function public.ranking_top(escopo text, categoria text, limite integer default 50) returns jsonb
language plpgsql security definer set search_path = public stable as $$
declare eu perfis; res jsonb; meu jsonb; col text;
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
        case when (select count(*) from denuncias d where d.alvo = p.user_id) < 3 then p.foto end foto, p.cidade, p.uf, p.pais, p.estilo, p.visibilidade, r.%1$I valor,
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
    dol := coalesce(dol, 5.5);
    with pos as (
      select c.ticker, q.nome, q.classe, q.moeda, c.qtd::numeric qtd, c.pm::numeric pm, q.preco::numeric preco, q.var_dia::numeric var_dia,
        c.qtd * q.preco * case when q.moeda = 'USD' then dol else 1 end valor,
        nullif(e.dados->'desempenho'->>'min52', '')::numeric min52, nullif(e.dados->'desempenho'->>'max52', '')::numeric max52
      from carteira c join cotacoes q on q.ticker = c.ticker left join empresas e on e.ticker = c.ticker where c.user_id = ele.user_id
    ), pos2 as (select *, sum(valor) over () tot from pos)
    select jsonb_agg(jsonb_build_object(
      'ticker', ticker, 'nome', nome, 'classe', classe, 'moeda', moeda, 'preco', preco, 'var_dia', var_dia,
      'peso', round(valor / nullif(tot, 0), 4),
      -- resultado só com preço médio possível (anti-troll)
      'resultado', case when pm > 0 and (min52 is null or max52 is null or (pm >= min52 * 0.25 and pm <= max52 * 4)) then round((preco / pm - 1) * 100, 2) end,
      'qtd', case when ele.mostrar_valores then qtd end,
      'valor', case when ele.mostrar_valores then round(valor, 2) end
    ) order by valor desc) into cart from pos2;
  end if;
  return jsonb_build_object(
    'apelido', ele.apelido, 'nome', ele.nome, 'bio', ele.bio, 'avatar', ele.avatar, 'cor', ele.cor, 'cidade', ele.cidade, 'uf', ele.uf,
    'pais', ele.pais, 'estilo', ele.estilo, 'visibilidade', ele.visibilidade, 'mostrar_valores', ele.mostrar_valores, 'desde', ele.criado_em,
    'eu', ele.user_id = eu.user_id,
    'ranking', case when r.user_id is null then null else to_jsonb(r) - 'user_id' - 'nivel' end,
    'foto', case when (select count(*) from denuncias d where d.alvo = ele.user_id) < 3 then ele.foto end, 'moldura', ele.moldura, 'acessorio', ele.acessorio,
    'carteira', cart,
    'carteira_bloqueada', ele.visibilidade = 'publico' and eu.visibilidade <> 'publico' and eu.user_id <> ele.user_id,
    'denunciei', exists (select 1 from denuncias where denunciante = eu.user_id and alvo = ele.user_id));
end $$;

revoke all on function public.atualizar_ranking() from public, anon, authenticated;
revoke all on function public.ranking_top(text, text, integer) from public, anon;
grant execute on function public.ranking_top(text, text, integer) to authenticated;
revoke all on function public.perfil_publico(text) from public, anon;
grant execute on function public.perfil_publico(text) to authenticated;

select public.atualizar_ranking();
