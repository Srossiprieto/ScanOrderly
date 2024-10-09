import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dotenv from 'dotenv'

// Cargar variables de entorno desde el archivo .env
dotenv.config()

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})