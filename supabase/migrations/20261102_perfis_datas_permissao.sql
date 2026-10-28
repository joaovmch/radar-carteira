-- Radar da Carteira, 02/11/2026: corrige "permission denied for function itens_liberados" ao salvar o perfil.
--
--   * O gatilho perfis_datas confere se a moldura/acessório escolhidos estão liberados chamando itens_liberados(),
--     que só o servidor pode executar. O gatilho passa a rodar com a permissão do dono (security definer);
--     itens_liberados continua fechado para chamadas diretas dos usuários.
-- Rode inteiro no SQL Editor do Supabase. Pode rodar mais de uma vez.

alter function public.perfis_datas() security definer;
alter function public.perfis_datas() set search_path = public;
