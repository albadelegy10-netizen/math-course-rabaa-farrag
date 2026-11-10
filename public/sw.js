const CACHE_NAME = 'math-app-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple fetch handler to pass PWA requirements
  event.respondWith(fetch(event.request).catch(() => new Response('Offline mode not fully implemented.', { status: 503 })));
});
