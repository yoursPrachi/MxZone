const CACHE_NAME = "mxzone-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/movie.html",
  "/admin.html",
  "/go.html",
  "/styles.css",
  "/lib/firebase.js",
  "/lib/data.js",
  "/lib/ui.js",
  "/lib/utils.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
