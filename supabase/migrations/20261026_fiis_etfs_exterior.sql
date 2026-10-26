-- Radar da Carteira, 26/10/2026: FIIs, ETFs, BDRs e ativos dos EUA (ações e ETFs, ex.: VOO)

-- Classe de cada ativo, moeda e bolsa
alter table public.cotacoes add column if not exists classe text not null default 'acao';
alter table public.cotacoes add column if not exists moeda text not null default 'BRL';
alter table public.cotacoes add column if not exists bolsa text not null default 'B3';
alter table public.cotacoes add column if not exists logo text;   -- id do logo no TradingView
alter table public.cotacoes add column if not exists extra jsonb;  -- taxa e patrimônio dos ETFs
alter table public.cotacoes drop constraint if exists cotacoes_classe_check;
alter table public.cotacoes add constraint cotacoes_classe_check check (classe in ('acao','fii','etf','bdr','acao_ext','etf_ext'));
alter table public.cotacoes drop constraint if exists cotacoes_moeda_check;
alter table public.cotacoes add constraint cotacoes_moeda_check check (moeda in ('BRL','USD'));
create index if not exists cotacoes_classe_idx on public.cotacoes(classe, volume desc);

-- Carteira: aceita códigos dos EUA (VOO, AAPL, BRK.B) e frações (0,35 de VOO)
alter table public.carteira drop constraint if exists carteira_ticker_check;
alter table public.carteira add constraint carteira_ticker_check check (ticker ~ '^[A-Z][A-Z0-9.\-]{0,9}$');
alter table public.carteira alter column qtd type numeric(20,8);
alter table public.empresas drop constraint if exists empresas_ticker_check;
alter table public.empresas add constraint empresas_ticker_check check (ticker ~ '^[A-Z][A-Z0-9.\-]{0,9}$');
