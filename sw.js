// Service worker minimal : n'intercepte pas les requêtes Firebase.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
