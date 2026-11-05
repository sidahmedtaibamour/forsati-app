const V = "forsati-v6";
const SHELL = ["./", "index.html", "style.css", "app.js", "auth.js", "manifest.json", "icon.svg", "icon-192.png", "icon-180.png", "privacy.html", "privacy.js"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;
  const fresh = /\/(opportunities|status)\.json$/.test(u.pathname);
  e.respondWith((async () => {
    const cache = await caches.open(V);
    const hit = await cache.match(r);
    const net = fetch(r).then((res) => { if (res.ok) cache.put(r, res.clone()); return res; });
    if (fresh) { try { return await net; } catch { return hit || Response.error(); } }
    if (hit) { net.catch(() => {}); return hit; }
    return net;
  })());
});
