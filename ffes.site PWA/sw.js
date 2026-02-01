const CACHE_NAME = 'ffes-exclusive-v3.0';

// Lista TÁTICA de arquivos para cache.
// Prioridade: Interface Global + Menus de Navegação (Backbone)
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/logo novo grande.webp',
  '/Teacher-Leo-Ramos.webp',
  
  // Backbone de Navegação (As portas de entrada de cada módulo)
  '/Pasta001/indexpasta001.html',
  '/Pasta002/indexpasta002.html',
  '/Pasta003/indexpasta003.html',
  '/Pasta004/indexpasta004.html',
  '/Pasta005/indexpasta005.html',
  '/Pasta006/indexpasta006.html',
  '/Pasta007/indexpasta007.html',
  '/Pasta008/indexpasta008.html',
  '/Pasta009/indexpasta009.html',
  '/Pasta010/indexpasta010.html',
  '/Pasta011/indexpasta011.html',
  '/Pasta012/indexpasta012.html',
  '/Pasta013/indexpasta013.html',
  '/Pasta014/indexpasta014.html',
  '/Pasta015/indexpasta015.html',

  // Arquivos Chave de Games e Atividades (Exemplos detectados)
  '/Pasta011/jogodamemoria.html',
  '/Pasta011/word-search.html',
  '/Pasta007/quiz01.html',
  '/Pasta005/speaking001.html'
];

// Instalação: Cacheia o "Kit de Sobrevivência"
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('FFES System: Carregando protocolo offline...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação: Limpa caches antigos (Versões obsoletas v2.1, etc)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('FFES System: Deletando cache obsoleto ->', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch: Estratégia "Stale-While-Revalidate" 
// (Tenta usar cache para velocidade, mas busca atualização em background)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});