-- Radar da Carteira, 27/10/2026: perfil, ranking de investidores (cidade, estado, Brasil, mundo),
-- carteiras públicas e sistema anti-troll.
--
-- Privacidade
--   * Todo perfil começa PRIVADO: não aparece em nada.
--   * "ranking": aparece nos rankings só com percentuais (rentabilidade, dividend yield, variação do dia,
--     diversificação). Valores em reais só aparecem se a pessoa marcar "mostrar valores".
--   * "publico": além do ranking, a carteira pode ser inspecionada (ativos, peso de cada um e resultado).
--   * Reciprocidade: só vê os rankings quem participa deles; só inspeciona carteiras quem deixa a sua pública.
--   * Renda fixa nunca entra no ranking nem na carteira pública.
--
-- Anti-troll: os números são calculados pelo servidor a partir da carteira e das cotações reais,
-- ninguém digita a própria posição no ranking. Ficam fora do ranking (marcados como não verificados):
--   * contas com menos de 7 dias, menos de 2 ativos ou menos de R$ 100;
--   * patrimônio acima de R$ 50 milhões (acima do que dá para conferir);
--   * rentabilidade acima de 500%;
--   * perfis com 3 ou mais denúncias de pessoas diferentes;
--   * mais de 30 alterações na carteira nas últimas 24 horas.
--   Além disso, a posição com preço médio fora da faixa possível (menos de 1/4 da mínima ou mais de
--   4 vezes a máxima de 52 semanas) não conta na rentabilidade, e posições criadas ou alteradas hoje
--   não contam na variação do dia (não dá para "comprar" a alta depois que ela aconteceu).

-- Quando cada posição da carteira foi mexida pela última vez, e um registro das alterações
alter table public.carteira add column if not exists atualizado_em timestamptz not null default now();
create table if not exists public.carteira_eventos (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  em timestamptz not null default now()
);
create index if not exists carteira_eventos_idx on public.carteira_eventos(user_id, em);
alter table public.carteira_eventos enable row level security;  -- sem políticas: só o servidor lê
create or replace function public.carteira_mexeu() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'UPDATE' then new.atualizado_em := now(); end if;
  insert into public.carteira_eventos(user_id) values (coalesce(new.user_id, old.user_id));
  delete from public.carteira_eventos where em < now() - interval '3 days';
  return coalesce(new, old);
end $$;
revoke all on function public.carteira_mexeu() from public, anon, authenticated;
drop trigger if exists carteira_mexeu on public.carteira;
create trigger carteira_mexeu before insert or update on public.carteira for each row execute function public.carteira_mexeu();

-- Perfil
create table if not exists public.perfis (
  user_id uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  apelido text not null check (apelido ~ '^[a-z0-9_.]{3,20}$'),
  nome text check (nome is null or char_length(nome) between 1 and 40),
  bio text check (bio is null or char_length(bio) <= 160),
  avatar text check (avatar is null or char_length(avatar) <= 8),
  cor text check (cor is null or cor ~ '^#[0-9a-fA-F]{6}$'),
  cidade text check (cidade is null or char_length(cidade) between 2 and 60),
  uf text check (uf is null or uf ~ '^[A-Z]{2}$'),
  pais text not null default 'BR' check (pais ~ '^[A-Z]{2}$'),
  estilo text check (estilo is null or estilo in ('dividendos','crescimento','valor','indices','cripto','equilibrado','iniciante')),
  visibilidade text not null default 'privado' check (visibilidade in ('privado','ranking','publico')),
  mostrar_valores boolean not null default false,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);
create unique index if not exists perfis_apelido_idx on public.perfis(lower(apelido));
alter table public.perfis enable row level security;
drop policy if exists "perfil dono" on public.perfis;
create policy "perfil dono" on public.perfis for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
-- Os outros só enxergam perfis pelas funções abaixo (que respeitam a privacidade)

-- Denúncias de valores falsos ou perfil ofensivo
create table if not exists public.denuncias (
  id bigint generated always as identity primary key,
  denunciante uuid not null references auth.users(id) on delete cascade,
  alvo uuid not null references auth.users(id) on delete cascade,
  motivo text not null check (char_length(motivo) between 3 and 200),
  criado_em timestamptz not null default now(),
  unique (denunciante, alvo)
);
alter table public.denuncias enable row level security;  -- sem políticas: só pelas funções

-- Fotografia do ranking, recalculada a cada 15 minutos
create table if not exists public.ranking (
  user_id uuid primary key references auth.users(id) on delete cascade,
  n_ativos integer not null,
  patrimonio numeric,           -- só preenchido se a pessoa mostra valores
  proventos12m numeric,         -- idem
  rent_pct numeric,             -- resultado sobre o preço médio (posições com preço médio válido)
  dy_pct numeric,               -- proventos de 12 meses sobre o patrimônio
  dia_pct numeric,              -- variação de hoje (só posições que já existiam antes de hoje)
  div_score integer,            -- nota de diversificação de 0 a 100
  classes jsonb,                -- peso de cada classe (0 a 1)
  verificado boolean not null,
  motivos text[] not null default '{}',
  atualizado_em timestamptz not null default now()
);
alter table public.ranking enable row level security;  -- sem políticas: só pelas funções

create or replace function public.atualizar_ranking() returns integer language plpgsql security definer set search_path = public as $$
declare dol numeric; hoje timestamptz; linhas integer;
begin
  select nullif((dados->'dolar'->>'valor')::numeric, 0) into dol from painel where id = 'mercado';
  dol := coalesce(dol, 5.5);
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
  insert into ranking (user_id, n_ativos, patrimonio, proventos12m, rent_pct, dy_pct, dia_pct, div_score, classes, verificado, motivos, atualizado_em)
  select user_id, n,
    case when mostrar_valores then round(patr, 2) end,
    case when mostrar_valores then round(prov, 2) end,
    round(rent * 100, 2), round(prov / nullif(patr, 0) * 100, 2), round(dia * 100, 2),
    round(30 * least(ncls, 4) / 4.0 + 30 * least(n, 10) / 10.0 + 40 * (1 - greatest(0, least(1, (maxv / nullif(patr, 0) - 0.15) / 0.45))))::int,
    classes, cardinality(motivos) = 0, motivos, now()
  from flags
  on conflict (user_id) do update set n_ativos = excluded.n_ativos, patrimonio = excluded.patrimonio, proventos12m = excluded.proventos12m,
    rent_pct = excluded.rent_pct, dy_pct = excluded.dy_pct, dia_pct = excluded.dia_pct, div_score = excluded.div_score,
    classes = excluded.classes, verificado = excluded.verificado, motivos = excluded.motivos, atualizado_em = excluded.atualizado_em;
  get diagnostics linhas = row_count;
  -- Quem participa mas está sem nenhum ativo com cotação
  delete from ranking r where not exists (select 1 from carteira c where c.user_id = r.user_id);
  return linhas;
end $$;
revoke all on function public.atualizar_ranking() from public, anon, authenticated;

-- Ranking: escopo cidade | estado | brasil | mundo; categoria rentabilidade | dividendos | proventos | hoje | diversificacao | patrimonio
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
      select p.user_id, p.apelido, p.nome, p.avatar, p.cor, p.cidade, p.uf, p.pais, p.estilo, p.visibilidade, r.%1$I valor,
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

-- Perfil público de alguém (e a carteira, se ela for pública e quem pede também tiver a sua pública)
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
    'ranking', case when r.user_id is null then null else to_jsonb(r) - 'user_id' end,
    'carteira', cart,
    'carteira_bloqueada', ele.visibilidade = 'publico' and eu.visibilidade <> 'publico' and eu.user_id <> ele.user_id,
    'denunciei', exists (select 1 from denuncias where denunciante = eu.user_id and alvo = ele.user_id));
end $$;
revoke all on function public.perfil_publico(text) from public, anon;
grant execute on function public.perfil_publico(text) to authenticated;

create or replace function public.denunciar(nick text, motivo text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare eu perfis; alvo uuid;
begin
  select * into eu from perfis where user_id = auth.uid();
  if eu is null or eu.visibilidade = 'privado' then return jsonb_build_object('erro', 'privado'); end if;
  if eu.criado_em > now() - interval '3 days' then return jsonb_build_object('erro', 'conta_nova'); end if;
  select user_id into alvo from perfis where lower(apelido) = lower(nick) and visibilidade <> 'privado';
  if alvo is null or alvo = eu.user_id then return jsonb_build_object('erro', 'alvo'); end if;
  if (select count(*) from denuncias where denunciante = eu.user_id and criado_em > now() - interval '1 day') >= 5 then return jsonb_build_object('erro', 'limite'); end if;
  insert into denuncias(denunciante, alvo, motivo) values (eu.user_id, alvo, left(motivo, 200)) on conflict do nothing;
  return jsonb_build_object('ok', true);
end $$;
revoke all on function public.denunciar(text, text) from public, anon;
grant execute on function public.denunciar(text, text) to authenticated;

-- Recalcula a cada 15 minutos (e já agora)
select cron.schedule('ranking', '*/15 * * * *', $$ select public.atualizar_ranking() $$);
select public.atualizar_ranking();
