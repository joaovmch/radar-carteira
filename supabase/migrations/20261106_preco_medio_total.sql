-- Preço médio digitado como total investido (erro comum em frações dos EUA, onde a corretora mostra "valor investido").
-- Se o preço médio está a mais de 3x da cotação, mas bate com quantidade x cotação, é o total: grava o preço por cota.
-- Vale para qualquer cliente (site novo, versão antiga em cache, outro aparelho).
create or replace function public.carteira_corrige_pm() returns trigger
language plpgsql security definer set search_path = public as $$
declare px numeric;
begin
  if new.pm is null or new.qtd is null or new.qtd <= 0 then return new; end if;
  select preco into px from public.cotacoes where ticker = new.ticker;
  if px is null or px <= 0 then return new; end if;
  if (new.pm < px / 3 or new.pm > px * 3) and new.pm / (new.qtd * px) between 0.5 and 2 then
    new.pm := round(new.pm / new.qtd, 2);
  end if;
  return new;
end $$;
revoke execute on function public.carteira_corrige_pm() from public, anon, authenticated;

drop trigger if exists carteira_corrige_pm on public.carteira;
create trigger carteira_corrige_pm before insert or update of pm, qtd on public.carteira
  for each row execute function public.carteira_corrige_pm();
