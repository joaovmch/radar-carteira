# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

PWA instalável (`manifest.webmanifest`, `sw.js`), usada no celular e no computador.

## Users
Investidores pessoa física brasileiros, público aberto (qualquer pessoa pode se cadastrar). Acompanham uma carteira espalhada por vários lugares (corretora da B3, corretora dos EUA, exchange de cripto, caixinhas e CDBs de bancos digitais) e querem ver o patrimônio todo e o resultado do dia num lugar só, várias vezes ao dia, quase sempre pelo celular.

## Product Purpose
Valoriza+ (antes Radar da Carteira) junta ações, FIIs, ETFs e BDRs da B3, ações e ETFs dos EUA, criptomoedas e renda fixa num patrimônio único em reais, com cotações, notícias, agenda de proventos, sinais por ativo, diversificação, conversor de moedas e um perfil social opcional. Sucesso: a pessoa abre o app, entende em segundos como a carteira está hoje e o que pede atenção, e volta todo dia.

Nada no produto é recomendação individual de investimento.

## Positioning
Três coisas juntas que um app vizinho não copia com verdade:
1. **Tudo num lugar só**: B3, EUA (com frações e preço médio em dólar), cripto e renda fixa com as regras reais de cada caixinha/cofrinho de banco, somados no mesmo patrimônio.
2. **Escritório 3D com humor**: um boneco personalizável numa sala 3D reage ao resultado do dia (triste no sofá → comemorando com confete), com móveis arrumáveis e itens liberados por recompensas.
3. **Ranking social anti-troll**: rankings de cidade, estado, Brasil e mundo calculados pelo servidor a partir das carteiras e cotações reais, com regras contra manipulação; privacidade opcional e gradual.

## Operating Context
- Abertura rápida e frequente no celular, inclusive durante o pregão (cotações a cada 2 min, sinais e termômetro a cada 5 min).
- Fontes públicas: brapi.dev, TradingView, Yahoo Finance, Banco Central (Selic, CDI), CoinGecko, AwesomeAPI, Google/Bing Notícias, StatusInvest, Wikipedia/Wikidata.
- Login próprio via Supabase; e-mail de confirmação em `supabase/email-confirmacao.html`; notificações push.
- Idioma: português do Brasil, valores em reais (ativos em dólar convertidos pelo câmbio do momento).

## Capabilities and Constraints
- Funcionalidades confirmadas no README: resumo/patrimônio, resumo do dia, carteira, renda fixa com modelos de bancos, cripto (top 100), classes da B3 e EUA, conversor de moedas, termômetro do mercado, sinal por ação (considerar reforçar, manter, atenção, considerar reduzir), analistas, perfil de empresas, destaques, diversificação, perfil, ranking, pódio, recompensas, fita de cotações, escritório 3D (fallback 2D em SVG sem WebGL).
- Evidência do repositório, **não confirmada pelo usuário como restrição obrigatória**: sem IA (sinais por regras fixas), site estático (GitHub Pages/Vercel) + Supabase (RLS, Edge Functions, pg_cron), Content-Security-Policy restrita (scripts só do próprio domínio, Supabase vendorizado), build só para o escritório 3D (`npm run build`).
- Terminologia: "caixinhas", "cofrinhos", "Seu escritório", "Arrumar", "sinal", "termômetro", faixas Bronze/Prata/Ouro/Platina/Diamante/Lenda.
- Em aberto: quais restrições técnicas acima são inegociáveis; prioridade mobile vs. desktop.

## Brand Commitments
- Nome: **Valoriza+** (nome anterior: Radar da Carteira). Ícones em `icon-192.png`, `icon-512.png`, `icon-maskable.png`.
- Voz do README: português simples e direto, explica o que cada número significa, sem jargão desnecessário e sem prometer retorno.

## Evidence on Hand
- Dados reais da carteira e do mercado vêm das fontes acima em tempo de execução.
- Não há depoimentos, número de usuários, imprensa ou estudos de caso. Futuras telas não devem inventar nenhum deles.

## Product Principles
1. **O dia primeiro**: toda tela começa pelo que está acontecendo hoje com a carteira da pessoa.
2. **Patrimônio único e honesto**: tudo somado em reais com as regras reais (IR, IOF, CDI, câmbio); nunca um número que a pessoa não consiga entender ou conferir.
3. **Leveza que dá vontade de voltar**: o escritório, o humor e as recompensas tornam o acompanhamento diário agradável, sem atrapalhar a leitura dos números.
4. **Social com privacidade**: comparar é opcional e gradual; valores em reais só aparecem se a pessoa quiser, e o servidor garante que o ranking é justo.
5. **Informar, não recomendar**: sinais e notas mostram os motivos; nada é recomendação individual.

## Accessibility & Inclusion
Nenhum padrão específico foi definido. Público aberto em pt-BR, majoritariamente no celular.
