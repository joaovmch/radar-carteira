/* Valoriza+ — service worker das notificações push.
   Não faz cache do site (para não servir versão velha); só cuida das notificações. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

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
