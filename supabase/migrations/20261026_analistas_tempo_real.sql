-- Radar da Carteira, 26/10/2026 (já aplicado no projeto Supabase)
-- Mercado, sinais e opinião dos analistas passam a ser recalculados a cada 5 minutos no pregão
-- (antes: 10 minutos, e só parte das ações por rodada).
select cron.schedule('analisar-pregao', '*/5 12-21 * * 1-5', $$ select public.chamar_funcao('radar', '{"acao":"analisar"}', 150000) $$);
