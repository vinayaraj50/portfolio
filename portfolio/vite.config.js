import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // Keep this line since your repo is named 'portfolio'
  plugins: [react()],
})