// src/_worker.js
export default {
  async fetch(request, env, ctx) {
    // La magia aquí la hace `env.ASSETS.fetch`, 
    // que es proporcionado por Cloudflare para servir los archivos
    // que subiste desde el directorio 'dist'.
    return env.ASSETS.fetch(request);
  },
};