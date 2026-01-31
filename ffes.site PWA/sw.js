// Nome do cache (versão da sua máquina)
const CACHE_NAME = 'teacher-leo-ffes-v1';

// Ativos que serão cacheados para uso offline
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/logo novo grande.png',
  '/ffeslogotransparente.png',
  // Adicione aqui os arquivos de exercícios principais para garantir o offline
  '/presentsimple.html',
  '/speaking001.html',
  '/quiz01.html'
];

// Instalação: Salva os arquivos essenciais no cache do navegador
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('FFES: Cache de ativos em andamento...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação: Limpa caches antigos se você atualizar a versão (v2, v3...)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('FFES: Limpando cache antigo...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Estratégia Cache-First: Tenta carregar do cache; se não tiver, busca na rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});