const CACHE_NAME = 'ebook-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/ebook/index.html',
  '/ebook/manifest.webmanifest',
  '/ebook/assets/css/styles.css',
  '/ebook/assets/js/app.js',
  '/ebook/assets/chapters/1.html',
  '/ebook/assets/chapters/2.html',
  // Добавьте другие важные ресурсы
];

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return Promise.all(
            ASSETS_TO_CACHE.map(url => {
              return fetch(url)
                .then(response => {
                  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                  return cache.put(url, response);
                })
                .catch(error => {
                  console.error(`Failed to cache ${url}:`, error);
                });
            })
          );
        })
    );
  });

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});