/* Cerviganglios — caché para consultar sin conexión.
   Al publicar cambios, sube el número de CACHE: el service worker
   nuevo sustituye la caché anterior y la próxima visita ya va actualizada. */
const CACHE = "cerviganglios-v1";

const ASSETS = [
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./icons/icon-32.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith("/sw.js")) return;

  event.respondWith(networkFirst(request));
});

async function precache() {
  const cache = await caches.open(CACHE);
  await Promise.all(
    ASSETS.map(async (path) => {
      const response = await fetch(new Request(path, { cache: "reload" }));
      if (!response.ok) throw new Error("No se pudo guardar " + path);
      await cache.put(path, response);
    })
  );
  const index = await cache.match("./index.html");
  if (index) await cache.put("./", index.clone());
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok && (response.type === "basic" || response.type === "default")) {
      await cache.put(request, response.clone());
    }
    if (response && response.ok) return response;
    const cached = await cachedResponse(cache, request);
    return cached || response;
  } catch (error) {
    const cached = await cachedResponse(cache, request);
    if (cached) return cached;
    return new Response("Cerviganglios no está guardado en este dispositivo. Ábrelo una vez con conexión.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}

async function cachedResponse(cache, request) {
  const hit = await cache.match(request, { ignoreSearch: true });
  if (hit) return hit;
  if (request.mode === "navigate") {
    return (await cache.match("./index.html")) || (await cache.match("./"));
  }
  return undefined;
}
