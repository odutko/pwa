self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pwa-cache').then(cache => {
            return cache.addAll([
                '/pwa/index.html',
                '/pwa/manifest.webmanifest',
                '/pwa/imgs/icon.png',
                '/pwa/imgs/screenshot-desktop.png',
                '/pwa/imgs/screenshot-mobile.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
