// Meu Bolso — service worker mínimo
// Só existe para o Chrome reconhecer a página como app instalável
// (sem isto, o "Adicionar ao ecrã principal" fica só como atalho, com o logo do Chrome por cima).
self.addEventListener("install", (event) => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  // Não faz cache nenhuma por agora — só responde normalmente à rede.
  event.respondWith(fetch(event.request));
});
