// Guarda o site e os textos já lidos para abrir rápido e funcionar sem internet.
const VERSAO = "v2";
const SITE = "site-" + VERSAO;
const TEXTOS = "textos";
const ARQUIVOS = ["./", "index.html", "estilo.css", "app.js", "historias.js", "manifest.webmanifest", "icone-192.png", "icone-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SITE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== SITE && n !== TEXTOS).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // textos bíblicos e fontes não mudam: usa o que já tem guardado
  if (url.hostname === "bible.helloao.org" || url.hostname.endsWith("gstatic.com") || url.hostname === "fonts.googleapis.com") {
    e.respondWith(
      caches.open(TEXTOS).then((c) => c.match(req).then((guardado) =>
        guardado || fetch(req).then((r) => { if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; })
      ))
    );
    return;
  }

  // arquivos do site: tenta a versão nova, e sem internet usa a guardada
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req)
        .then((r) => { if (r.ok) { const copia = r.clone(); caches.open(SITE).then((c) => c.put(req, copia)); } return r; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("index.html")))
    );
  }
});
