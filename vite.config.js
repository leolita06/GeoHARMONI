import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
const offlineCache = () => ({
  name: 'geoplanner-offline-cache',
  generateBundle(_, bundle) {
    const files = Object.keys(bundle)
      .filter(file => file === 'index.html' || file.startsWith('assets/'))
      .map(file => `/${file}`);
    this.emitFile({
      type: 'asset',
      fileName: 'sw.js',
      source: `const CACHE='geoplanner-v1';const FILES=${JSON.stringify(files)};self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return response}).catch(()=>e.request.mode==='navigate'?caches.match('/index.html'):Response.error())))})`
    });
  }
});
export default defineConfig({
  plugins: [react(), tailwindcss(), offlineCache()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/recharts/')) return 'charts';
          if (id.includes('/node_modules/lucide-react/')) return 'icons';
          if (id.includes('/node_modules/framer-motion/')) return 'motion';
          if (id.includes('/node_modules/')) return 'vendor';
        }
      }
    }
  }
});
