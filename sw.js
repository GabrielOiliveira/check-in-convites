/* Service worker do check-in: abre mesmo sem internet. Não mexe nas chamadas à planilha do Google. */
const V = 'belmont-checkin-v1';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
const CDN = ['cdn.jsdelivr.net', 'cdnjs.cloudflare.com'];       // leitor de QR (jsQR): guardado após o 1º uso

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function guardar(req, res) { const cp = res.clone(); caches.open(V).then(c => c.put(req, cp)).catch(() => {}); }
function doCache(req) {
  return caches.match(req).then(h => h || caches.match('index.html')).then(h => h || caches.match('./'));
}
/* Página: rede primeiro (pega lista nova quando há sinal); com sinal ruim, usa a cópia guardada após 3 s. */
function paginaRedePrimeiro(req) {
  return new Promise(resolve => {
    let ok = false;
    const t = setTimeout(() => doCache(req).then(h => { if (h && !ok) { ok = true; resolve(h); } }), 3000);
    fetch(req).then(res => {
      clearTimeout(t);
      if (res && res.ok) guardar(req, res);
      if (!ok) { ok = true; resolve(res); }
    }).catch(() => {
      clearTimeout(t);
      doCache(req).then(h => { if (!ok) { ok = true; resolve(h || Response.error()); } });
    });
  });
}
function cacheDepoisRede(req) {
  return caches.match(req).then(h => h || fetch(req).then(res => { guardar(req, res); return res; }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(req.mode === 'navigate' ? paginaRedePrimeiro(req) : cacheDepoisRede(req));
  } else if (CDN.indexOf(url.hostname) >= 0) {
    e.respondWith(cacheDepoisRede(req));
  }
});
