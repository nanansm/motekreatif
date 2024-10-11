import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/motekreatif/', // Ganti dengan nama repository GitHub Anda
});
