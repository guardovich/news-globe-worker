-- GeoNews Monitor — D1 Database Schema
-- Ejecutar con: wrangler d1 execute geonews-db --file=schema.sql

CREATE TABLE IF NOT EXISTS articles (
  id          TEXT PRIMARY KEY,        -- hash SHA1 del link para evitar duplicados
  title       TEXT NOT NULL,
  link        TEXT NOT NULL UNIQUE,
  summary     TEXT,
  source      TEXT NOT NULL,           -- nombre del medio (ej. "BBC", "El País")
  country     TEXT NOT NULL,           -- clave interna (ej. "spain", "france")
  lang        TEXT NOT NULL DEFAULT 'en',
  pub_date    TEXT,                    -- ISO 8601 cuando está disponible
  fetched_at  TEXT NOT NULL,           -- ISO 8601, momento de ingesta
  topic_tags  TEXT                     -- JSON array de temas detectados (ej. '["otan","defensa"]')
);

-- Índices para búsquedas frecuentes
CREATE INDEX IF NOT EXISTS idx_country    ON articles(country);
CREATE INDEX IF NOT EXISTS idx_lang       ON articles(lang);
CREATE INDEX IF NOT EXISTS idx_fetched_at ON articles(fetched_at DESC);
CREATE INDEX IF NOT EXISTS idx_pub_date   ON articles(pub_date DESC);

-- Tabla de log de ingesta (para el endpoint /status)
CREATE TABLE IF NOT EXISTS ingest_log (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  ran_at      TEXT NOT NULL,           -- ISO 8601
  feeds_ok    INTEGER NOT NULL DEFAULT 0,
  feeds_fail  INTEGER NOT NULL DEFAULT 0,
  articles_inserted INTEGER NOT NULL DEFAULT 0,
  duration_ms INTEGER
);

-- Tabla de feeds fallidos (para el endpoint /status)
CREATE TABLE IF NOT EXISTS feed_errors (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  feed_name   TEXT NOT NULL,
  feed_url    TEXT NOT NULL,
  country     TEXT NOT NULL,
  error_msg   TEXT,
  failed_at   TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_feed_errors_at ON feed_errors(failed_at DESC);
