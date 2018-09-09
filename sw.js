const cacheName = 'v1';
const cacheFiles = [
  '/',
  'index.html',
  'restaurant.html',
  '/css/styles.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];

//Install Event
self.addEventListener('install', e => {

  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(cacheFiles);
    })
    .then(() => self.skipWaiting())
  );
});

//Fetch Event
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
