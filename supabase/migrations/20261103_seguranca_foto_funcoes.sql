-- Auditoria de segurança (out/2026)
-- 1) Foto do perfil: só imagem embutida (base64). Remove a opção de URL externa,
--    que permitia usar a foto de um perfil público como rastreador do IP de quem o visita.
alter table public.perfis drop constraint if exists perfis_foto_chk;
alter table public.perfis add constraint perfis_foto_chk
  check (foto is null or (char_length(foto) <= 40000
    and foto ~ '^data:image/(webp|jpeg|png);base64,[A-Za-z0-9+/=]+$'));

-- 2) Funções-gatilho não devem ser chamáveis pela API REST (só rodam como gatilho).
--    O gatilho continua funcionando; isto só fecha a chamada direta via /rpc.
revoke execute on function public.cotacoes_hist_grava() from anon, authenticated, public;
revoke execute on function public.perfis_datas() from anon, authenticated, public;

-- 3) search_path fixo na função de cálculo da renda fixa (boa prática de SECURITY).
alter function public.rf_fator(text, numeric, integer, numeric) set search_path = '';
