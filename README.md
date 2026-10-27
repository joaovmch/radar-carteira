# Radar da Carteira

Painel para acompanhar, num lugar só, ações, FIIs, ETFs e BDRs da B3, ações e ETFs dos EUA (como VOO), criptomoedas e renda fixa, pelo celular ou computador, com login próprio. Funciona sozinho, sem IA: tudo é calculado com regras fixas a partir de fontes públicas.

## O que tem

- **Resumo**: patrimônio total em reais (ativos em dólar convertidos pelo câmbio do momento), ganho ou perda do dia, resultado sobre o preço médio, proventos estimados em 12 meses, divisão por classe e gráfico da evolução da carteira no último ano (com a renda fixa incluída).
- **Seu escritório**: sala 3D animada (sofá, videogame, mesa com computador, sinuca, janela, TV) com um boneco em estilo desenho animado, personalizável no perfil (pele, altura, corpo, 10 cortes e 10 cores de cabelo, barba, roupa, calça ou bermuda, tênis e óculos), cujo humor segue o resultado do dia: triste no sofá com nuvem de chuva (queda de 2% ou mais), preocupado no computador (queda), tranquilo jogando videogame (estável ou mercado fechado), feliz na sinuca (alta) e comemorando com confete (alta de 2% ou mais). A TV, o monitor, a janela e a luz mudam junto. Dá para ver os outros humores pelos botões abaixo da sala. No modo **Arrumar**, os móveis são arrastados e girados (o boneco recalcula o caminho e desvia de tudo); a arrumação fica salva no perfil. Cada item liberado nas recompensas aparece no escritório com uma animação de descoberta e ganha uma animação própria (carinho no cachorro, ração no aquário, partida no fliperama, moeda no porquinho, dardos, troféu erguido, cofre aberto...), e pode ser guardado ou colocado de volta tocando no nome dele abaixo da sala.
- **Resumo do dia**: quanto o patrimônio subiu ou caiu hoje (ativos mais o rendimento da renda fixa), Ibovespa, IFIX, S&P 500, dólar e Bitcoin, os ativos que mais mexeram, o que pede atenção (sinais, quedas fortes, notícias sensíveis, IOF, limite e ciclo das caixinhas), as notícias dos seus ativos e a agenda (proventos com o valor da sua posição, data com, vencimentos, Copom).
- **Criptomoedas**: as 100 maiores pela CoinGecko (código no formato BTC-BRL; no formulário basta digitar BTC), preço em reais a cada 10 minutos, todos os dias, variação em 24 h, histórico, notícias, sinal e perfil com ranking, máxima histórica e oferta.
- **Classes de ativos**: ações, FIIs, ETFs e BDRs da B3, e ações e ETFs dos EUA (as 150 maiores e os 70 maiores ETFs, mais qualquer outro código digitado na carteira). Ativos dos EUA aceitam frações (ex.: 0,42 de VOO) e preço médio em dólar.
- **Renda fixa**: CDBs, caixinhas, cofrinhos, LCIs e LCAs, com modelos prontos de cada banco (Caixinha Turbo do Nubank, Cofrinho Meli+ do Mercado Pago, Cofrinho Turbinado do PicPay, CDB 130% do PagBank, Porquinhos do Inter, CDBs de liquidez diária de C6, Itaú, Bradesco, Santander, BB, BTG, Sofisa e Daycoval) e suas regras (limite, movimentação mínima, renovação). O rendimento é calculado com o CDI diário do Banco Central desde a data da aplicação; mostra o valor hoje, o líquido se resgatar (IR regressivo e IOF), quanto rende por mês, avisos (limite estourado, IOF, ciclo da Turbo) e um comparativo de onde o mesmo valor renderia mais. Entra no patrimônio total e na divisão por classe.
- **Carteira**: filtro por classe, alertas do que pede atenção e detalhes de cada posição.
- **Conversor de moedas**: dólar (comercial e turismo), euro, libra, peso argentino e outras 10 moedas, além de Bitcoin, Ethereum e Solana, com cotação em tempo real (AwesomeAPI, atualizada a cada minuto com a página aberta), compra e venda, variação do dia e opção de somar o IOF de 3,5% do cartão internacional.
- **Perfil e ranking de investidores**: perfil com apelido, avatar, cor, bio, cidade/estado/país e estilo. Rankings da cidade, do estado, do Brasil e do mundo por rentabilidade, dividend yield, variação do dia, diversificação, proventos e patrimônio. Clicando em alguém dá para ver a carteira (ativos, peso e resultado). Tudo é opcional: o perfil começa privado; "só no ranking" mostra apenas percentuais; "carteira aberta" deixa ver os ativos, mas só para quem também abre a sua. Valores em reais aparecem só se a pessoa marcar.
- **Pódio e recompensas**: ranking com pódio animado dos 3 primeiros (coroa no 1º). No perfil dá para enviar foto (reduzida para 128×128 no navegador), escolher emoji, cor, moldura e acessório. Molduras e acessórios são liberados por faixa de patrimônio em ativos (Bronze R$ 1 mil, Prata R$ 10 mil, Ouro R$ 50 mil, Platina R$ 100 mil, Diamante R$ 500 mil, Lenda R$ 1 milhão) e por conquistas (dividendos, diversificação, cripto, 10 ativos, rentabilidade, tempo no Radar). A faixa nunca é mostrada a ninguém; só aparece se a pessoa usar a moldura.
- **Anti-troll**: o ranking é calculado pelo servidor a cada 15 minutos a partir da carteira e das cotações reais (ninguém digita a própria rentabilidade). Preço médio impossível (fora de 1/4 da mínima a 4× a máxima de 52 semanas) não conta. Compras feitas ou alteradas hoje não contam no ranking do dia, e as datas são gravadas pelo servidor, então não dá para antedatar. Ficam fora: perfis com menos de 7 dias, menos de 2 ativos ou R$ 100, acima de R$ 50 milhões, rentabilidade acima de 500%, mais de 30 alterações em 24 h ou 3 denúncias. Renda fixa não entra. A faixa de patrimônio das recompensas só sobe depois de 7 dias seguidos com o valor na carteira (vale o menor da semana), e o banco recusa equipar item não liberado. A foto some com 3 denúncias.
- **Fita de cotações**: Ibovespa, IFIX, S&P 500, Nasdaq, dólar e seus ativos rolando no topo.
- **Cotações** de ações, FIIs, ETFs e BDRs da B3 (brapi.dev, com atraso de até ~30 min no plano gratuito) e dos EUA (TradingView), atualizadas a cada 2 minutos durante o pregão.
- **Termômetro do mercado**: nota de 0 a 100 recalculada a cada 5 minutos no pregão, com Ibovespa, dólar, Selic, amplitude (quantas ações sobem) e o tom das manchetes.
- **Sinal por ação** (considerar reforçar, manter, atenção, considerar reduzir), recalculado a cada 5 minutos no pregão, com os motivos: o movimento da ação e do Ibovespa hoje, tendência de preço (médias de 50 e 200 dias), força recente (IFR), leitura técnica de curto prazo, consenso dos analistas, preço em relação ao lucro, dividendos, dívida e notícias da semana. O resumo sempre começa pelo que está acontecendo hoje.
- **O que os analistas acham das suas ações**: para cada ação da carteira, quantos analistas recomendam compra, neutro ou venda, preço-alvo médio e quanto falta até ele, e a leitura técnica de curto prazo. Aparece numa seção própria, numa coluna da carteira e no perfil de qualquer empresa.
- **Conheça as empresas**: perfil completo de qualquer ação da B3, com o que a empresa faz, fotos, fatos (fundação, sede, funcionários, controlador), desempenho no último ano, indicadores explicados, dividendos (inclusive quanto a sua posição recebeu), reputação de 0 a 100 e notícias do último mês.
- **Em destaque hoje**: maiores altas e baixas entre as ações mais negociadas, com a notícia de cada uma.
- **Diversificação**: nota de 0 a 100 sobre o patrimônio total (incluindo renda fixa e cripto), divisão por classe, por setor/segmento e por banco na renda fixa, limite do FGC, peso de cripto, quanto está fora do Brasil, alertas de concentração e sugestões para as classes e setores que faltam.
- **O que os analistas recomendam**: ações mais citadas nas carteiras recomendadas das corretoras (revisão mensal).

Nada aqui é recomendação individual de investimento.

## Como funciona

| Parte | Onde roda |
|---|---|
| Site (`index.html`, `app.js`, `vendor/`) | Página estática (GitHub Pages ou Vercel). A biblioteca do Supabase fica no próprio repositório, sem depender de CDN |
| Login e banco | Supabase (projeto `urdtzrquiypewetklwxm`), com Row Level Security: cada usuário só vê a própria carteira |
| Função `radar` (`supabase/functions/radar`) | Edge Function com três ações: `cotacoes`, `analisar` (mercado, destaques, sinais e analistas) e `empresa` (perfil completo; gráfico, desempenho e analistas renovados a cada 15 min, texto e balanço a cada 12 h) |
| Agendamento | `pg_cron` no banco: cotações a cada 2 min no pregão; mercado, sinais e analistas de todas as ações das carteiras a cada 5 min das 9h às 19h nos dias úteis e a cada 3 h no resto do tempo |

Fontes: brapi.dev (cotações da B3), TradingView (cotações, fundamentos e logos dos EUA, nomes de fundos e BDRs), Yahoo Finance (histórico de preços, Ibovespa e dólar), TradingView (consenso de analistas, preço-alvo e leitura técnica), Banco Central (Selic e CDI diário), Google Notícias e Bing Notícias (manchetes), StatusInvest (indicadores, governança e proventos), Wikipedia e Wikidata (descrição, fotos e fatos das empresas).

## Segurança

- A chave em `app.js` é a chave pública (anon) do Supabase, feita para ficar no navegador. Os dados são protegidos pelas políticas de RLS em `supabase/migrations`.
- A função `radar` só aceita usuários logados ou o agendamento do banco, que manda um segredo guardado no Vault do Supabase. Cada usuário tem limite diário de consultas.
- O site tem Content-Security-Policy: só carrega scripts do próprio domínio e só conversa com o Supabase do projeto.
- Todo texto vindo de fontes externas é escapado antes de ir para a tela, e só links `https` são aceitos.

### Ajustes recomendados no painel do Supabase

1. **Authentication → Sign In / Providers → Email**: se o site é só para você, desligue *Allow new users to sign up*.
2. **Authentication → Passwords** (ou *Policies*): ligue *Leaked password protection* e use senha mínima de 8 caracteres com letras e números.
3. **Edge Functions**: apague as funções antigas `chat`, `cotacoes` e `sonda` (estão desativadas) e, em *Secrets*, apague `GEMINI_API_KEY` e `ANTHROPIC_API_KEY`.
4. **SQL Editor**: rode `supabase/migrations/20261027_comunidade.sql`, `20261028_perfil_visual.sql`, `20261029_renda_fixa_recompensas.sql` e `20261030_escritorio_layout.sql`, nessa ordem, para ativar o perfil, o ranking, a foto, as recompensas (com renda fixa) e a arrumação do escritório.
5. **SQL Editor**: rode o bloco PENDENTE no fim de `supabase/migrations/20261022_sem_ia_empresas_seguranca.sql`.

## Publicar

**GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → Branch `main`, pasta `/ (root)`.

**Vercel:** Add New → Project → importe este repositório → Framework Preset: *Other* → Deploy.

Depois de publicar, no Supabase vá em **Authentication → URL Configuration** e coloque o endereço do site em *Site URL* e em *Redirect URLs*, para os links de confirmação de e-mail e de troca de senha voltarem para o site.

## Escritório 3D

A seção "Seu escritório" é uma cena 3D (Three.js) carregada sob demanda:

- `escritorio.js`: carregador leve e API usada pelo app (`RadarEscritorio.render`). Também registra o que você faz no site (cliques, seção aberta) para aparecer na tela do computador do escritório.
- `src/partes/`: código-fonte da cena, em partes: base e cabelo em mechas (`1-base`), boneco com IK nos braços (`2-boneco`), poses e filtro de mola que suaviza as transições (`3-poses`), cachorro e navegação com A* (`4-cao-nav`), sala com móveis arrastáveis (`5-sala`), rotinas de cada humor e animações das recompensas (`6-roteiros`), quadro a quadro, taco de sinuca e modo de arrumar (`7-escritorio`), telas desenhadas (`8-texturas`), diretor que monta a fila de passos (`7b-diretor`) e a prévia do perfil (`9-vitrine`).
- `escritorio3d.js`: arquivo gerado (minificado, com o Three.js embutido). Para regerar: `npm install && npm run build` (junta as partes em `src/escritorio3d.src.js` e minifica).
- `escritorio-2d.js`: versão anterior em SVG, usada só quando o navegador não tem WebGL.
