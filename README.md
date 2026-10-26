# Radar da Carteira

Painel para acompanhar uma carteira de ações da B3 pelo celular ou computador, com login próprio. Funciona sozinho, sem IA: tudo é calculado com regras fixas a partir de fontes públicas.

## O que tem

- **Carteira**: patrimônio, ganho ou perda do dia, resultado sobre o preço médio e alertas do que pede atenção.
- **Cotações de todas as ações da B3**, atualizadas a cada 2 minutos durante o pregão (fonte: brapi.dev, com atraso de até ~30 min no plano gratuito).
- **Termômetro do mercado**: nota de 0 a 100 recalculada a cada 5 minutos no pregão, com Ibovespa, dólar, Selic, amplitude (quantas ações sobem) e o tom das manchetes.
- **Sinal por ação** (considerar reforçar, manter, atenção, considerar reduzir), recalculado a cada 5 minutos no pregão, com os motivos: o movimento da ação e do Ibovespa hoje, tendência de preço (médias de 50 e 200 dias), força recente (IFR), leitura técnica de curto prazo, consenso dos analistas, preço em relação ao lucro, dividendos, dívida e notícias da semana. O resumo sempre começa pelo que está acontecendo hoje.
- **O que os analistas acham das suas ações**: para cada ação da carteira, quantos analistas recomendam compra, neutro ou venda, preço-alvo médio e quanto falta até ele, e a leitura técnica de curto prazo. Aparece numa seção própria, numa coluna da carteira e no perfil de qualquer empresa.
- **Conheça as empresas**: perfil completo de qualquer ação da B3, com o que a empresa faz, fotos, fatos (fundação, sede, funcionários, controlador), desempenho no último ano, indicadores explicados, dividendos (inclusive quanto a sua posição recebeu), reputação de 0 a 100 e notícias do último mês.
- **Em destaque hoje**: maiores altas e baixas entre as ações mais negociadas, com a notícia de cada uma.
- **Diversificação**: nota de 0 a 100, distribuição por setor, alertas de concentração e exposição ao dólar, e sugestões para os setores que faltam.
- **O que os analistas recomendam**: ações mais citadas nas carteiras recomendadas das corretoras (revisão mensal).

Nada aqui é recomendação individual de investimento.

## Como funciona

| Parte | Onde roda |
|---|---|
| Site (`index.html`, `app.js`, `vendor/`) | Página estática (GitHub Pages ou Vercel). A biblioteca do Supabase fica no próprio repositório, sem depender de CDN |
| Login e banco | Supabase (projeto `urdtzrquiypewetklwxm`), com Row Level Security: cada usuário só vê a própria carteira |
| Função `radar` (`supabase/functions/radar`) | Edge Function com três ações: `cotacoes`, `analisar` (mercado, destaques, sinais e analistas) e `empresa` (perfil completo; gráfico, desempenho e analistas renovados a cada 15 min, texto e balanço a cada 12 h) |
| Agendamento | `pg_cron` no banco: cotações a cada 2 min no pregão; mercado, sinais e analistas de todas as ações das carteiras a cada 5 min das 9h às 19h nos dias úteis e a cada 3 h no resto do tempo |

Fontes: brapi.dev (cotações), Yahoo Finance (histórico de preços, Ibovespa e dólar), TradingView (consenso de analistas, preço-alvo e leitura técnica), Banco Central (Selic), Google Notícias e Bing Notícias (manchetes), StatusInvest (indicadores, governança e proventos), Wikipedia e Wikidata (descrição, fotos e fatos das empresas).

## Segurança

- A chave em `app.js` é a chave pública (anon) do Supabase, feita para ficar no navegador. Os dados são protegidos pelas políticas de RLS em `supabase/migrations`.
- A função `radar` só aceita usuários logados ou o agendamento do banco, que manda um segredo guardado no Vault do Supabase. Cada usuário tem limite diário de consultas.
- O site tem Content-Security-Policy: só carrega scripts do próprio domínio e só conversa com o Supabase do projeto.
- Todo texto vindo de fontes externas é escapado antes de ir para a tela, e só links `https` são aceitos.

### Ajustes recomendados no painel do Supabase

1. **Authentication → Sign In / Providers → Email**: se o site é só para você, desligue *Allow new users to sign up*.
2. **Authentication → Passwords** (ou *Policies*): ligue *Leaked password protection* e use senha mínima de 8 caracteres com letras e números.
3. **Edge Functions**: apague as funções antigas `chat`, `cotacoes` e `sonda` (estão desativadas) e, em *Secrets*, apague `GEMINI_API_KEY` e `ANTHROPIC_API_KEY`.
4. **SQL Editor**: rode o bloco PENDENTE no fim de `supabase/migrations/20261022_sem_ia_empresas_seguranca.sql`.

## Publicar

**GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → Branch `main`, pasta `/ (root)`.

**Vercel:** Add New → Project → importe este repositório → Framework Preset: *Other* → Deploy.

Depois de publicar, no Supabase vá em **Authentication → URL Configuration** e coloque o endereço do site em *Site URL* e em *Redirect URLs*, para os links de confirmação de e-mail e de troca de senha voltarem para o site.
