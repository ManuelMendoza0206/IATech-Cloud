import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Proxy hacia PRTG: el navegador llama a /prtg-api/... y Vite reenvía a la API
// de PRTG añadiendo el token. Así la clave nunca llega al cliente.
// Variables en .env.local: PRTG_URL y PRTG_API_KEY (ignorado por git).
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const prtgUrl = env.PRTG_URL || 'http://127.0.0.1'
  const prtgKey = env.PRTG_API_KEY || ''

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/prtg-api': {
          target: prtgUrl,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            const destino = path.replace(/^\/prtg-api/, '/api')
            const sep = destino.includes('?') ? '&' : '?'
            return `${destino}${sep}apitoken=${encodeURIComponent(prtgKey)}`
          },
        },
      },
    },
  }
})
