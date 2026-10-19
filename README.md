# Radar da Carteira

Painel para acompanhar uma carteira de ações da B3 pelo celular ou computador, com login próprio.

## O que tem

- **Carteira**: patrimônio, ganho ou perda do dia, resultado sobre o preço médio e alertas do que pede atenção.
- **Cotações de todas as ações da B3**, atualizadas a cada 2 minutos durante o pregão (fonte: brapi.dev, com atraso de até ~30 min no plano gratuito).
- **Termômetro do mercado**: nota de 0 a 100 sobre o clima da bolsa, com Ibovespa, dólar, Selic e os fatores do dia.
- **Sinal por ação** (considerar reforçar, manter, atenção, considerar reduzir) com o motivo e as notícias recentes da empresa.
- **O que os analistas recomendam**: ações mais citadas nas carteiras recomendadas das corretoras no mês.
- **Em destaque hoje**: ações das quais o mercado está falando no dia.
- **Diversificação**: nota de 0 a 100, distribuição por setor, alertas de concentração e exposição ao dólar, e sugestões de ações para os setores que faltam.

Nada aqui é recomendação individual de investimento.

## Como funciona

| Parte | Onde roda |
|---|---|
| Site (`index.html`) | Página estática (GitHub Pages ou Vercel), usa `supabase-js` |
| Login e banco | Supabase (projeto `urdtzrquiypewetklwxm`), com Row Level Security: cada usuário só vê a própria carteira |
| Cotações | Edge Function `cotacoes` (`supabase/functions/cotacoes`), chamada pelo `pg_cron` a cada 2 minutos no pregão |
| Notícias, sinais, termômetro e recomendações | Tarefa agendada do Claude, de hora em hora nos dias úteis, gravando nas tabelas `analises` e `painel` |

A chave usada no `index.html` é a chave pública (anon) do Supabase, feita para ficar no navegador. A segurança dos dados vem das políticas de RLS em `supabase/migrations`.

## Publicar

**GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → Branch `main`, pasta `/ (root)`.

**Vercel:** Add New → Project → importe este repositório → Framework Preset: *Other* → Deploy.

Depois de publicar, no Supabase vá em **Authentication → URL Configuration** e coloque o endereço do site em *Site URL* e em *Redirect URLs*, para os links de confirmação de e-mail e de troca de senha voltarem para o site.
