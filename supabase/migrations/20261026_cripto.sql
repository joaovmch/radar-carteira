-- Radar da Carteira, 26/10/2026: criptomoedas (classe "cripto", código SIMBOLO-BRL, ex.: BTC-BRL)

alter table public.cotacoes drop constraint if exists cotacoes_classe_check;
alter table public.cotacoes add constraint cotacoes_classe_check check (classe in ('acao','fii','etf','bdr','acao_ext','etf_ext','cripto'));

-- Cripto é negociada 24 horas: preços a cada 10 minutos, todos os dias
select cron.schedule('cripto', '*/10 * * * *', $$ select public.chamar_funcao('radar', '{"acao":"cripto"}') $$);
