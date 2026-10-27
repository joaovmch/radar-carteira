-- Radar da Carteira, 30/10/2026: escritório personalizável.
--
--   * perfis.escritorio: posição e giro dos móveis que a pessoa arrastou e a decoração que ela tirou
--     do escritório (formato: {"m": {"sofa": [x, z, giro], ...}, "off": ["aquario", ...]}).
--     Só a própria pessoa lê e grava (política "perfil dono"); limitado a 4 KB.
--   * perfis.boneco aceita até 32 caracteres (altura, corpo, roupa, sapato e mais cortes de cabelo).
-- Rode inteiro no SQL Editor do Supabase. Pode rodar mais de uma vez.

alter table public.perfis add column if not exists escritorio jsonb;
alter table public.perfis drop constraint if exists perfis_escritorio_chk;
alter table public.perfis add constraint perfis_escritorio_chk
  check (escritorio is null or (jsonb_typeof(escritorio) = 'object' and pg_column_size(escritorio) <= 4096));
alter table public.perfis drop constraint if exists perfis_boneco_chk;
alter table public.perfis add constraint perfis_boneco_chk check (boneco is null or boneco ~ '^[a-z0-9]{1,32}$');
