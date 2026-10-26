const CACHE_NAME = "agenda-v1";

const ARQUIVOS = [
    "app.js",
    "index.html",
    "style.css"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(
                    ARQUIVOS
                );
            })
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(resposta => {
                return resposta || fetch(event.request);
            })
    )
});

