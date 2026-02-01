const CACHE_NAME = 'ffes-exclusive-v2.1';

// Lista completa de arquivos para cache offline
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/logo novo grande.webp',
  '/Teacher-Leo-Ramos.webp',
  
  // Módulos Skills
  '/Pasta003/writing001.html',
  '/Pasta004/reading001.html',

  // Módulo Gramática (Pasta 002)
  '/Pasta002/presentsimple.html',
  '/Pasta002/presentcontinuous.html',
  '/Pasta002/pastsimple.html',
  '/Pasta002/pastcontinuous.html',
  '/Pasta002/futuresimple.html',
  '/Pasta002/futurecontinuous.html',
  '/Pasta002/futureperfect.html',
  '/Pasta002/futureperfectcont.html',
  '/Pasta002/condicional0.html',
  '/Pasta002/condicional1.html',
  '/Pasta002/condicional2.html',
  '/Pasta002/condicional3.html',
  '/Pasta002/condicionalwould1.html',
  '/Pasta002/condicionalwould2.html',
  '/Pasta002/condicionalwould3.html',
  '/Pasta002/condicionalwould4.html',
  '/Pasta002/modal01.html',
  '/Pasta002/modal02.html',
  '/Pasta002/modal03.html',
  '/Pasta002/auxiliares3.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('FFES: Cacheando sistema completo...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});