import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/paneladeferro/', // Este é o nome exato do repositório no GitHub
  build: {
    outDir: 'build', // Certifica que a saída será na pasta 'build'
  },
});