/* Valoriza+ — service worker: notificações push e funcionamento offline.
   Arquivos do próprio site: sempre tenta a rede primeiro (nunca serve versão velha com internet) e guarda uma cópia;
   sem internet, abre a última cópia guardada. Dados (Supabase) e outros domínios não passam por aqui. */
const CACHE = "valoriza-v20261104";
const BASE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable.png", "vendor/supabase-js-2.45.4.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BASE)).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const nomes = await caches.keys();
    await Promise.all(nomes.filter((n) => n.startsWith("valoriza-") && n !== CACHE).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === "basic") cache.put(req, res.clone()).catch(() => {});
      return res;
    } catch (_) {
      const salvo = await cache.match(req) || await cache.match(req, { ignoreSearch: true });
      if (salvo) return salvo;
      if (req.mode === "navigate") { const pg = await cache.match("index.html") || await cache.match("./"); if (pg) return pg; }
      return new Response("Sem conexão.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
  })());
});

self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data && e.data.text() }; }
  const title = d.title || "Valoriza+";
  const opts = {
    body: d.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: d.tag || "radar",
    renotify: true,
    requireInteraction: !!d.req,
    lang: "pt-BR",
    data: { url: d.url || "./" },
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./";
  const base = url.split("#")[0];
  e.waitUntil((async () => {
    const abas = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of abas) { if (c.url.startsWith(base) && "focus" in c) { c.navigate(url).catch(() => {}); return c.focus(); } }
    if (self.clients.openWindow) return self.clients.openWindow(url);
  })());
});
